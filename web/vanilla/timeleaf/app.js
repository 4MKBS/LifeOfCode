/* ============================================
   TIMELEAF - App Logic
   ============================================ */

// ========== STATE MANAGEMENT ==========
const state = {
  trackers: [],
  selectedDate: new Date(),
  settings: {
    accentColor: "#2D9C6F",
    clockStyle: "both",
    theme: "light",
    use24Hour: false,
  },
};

let deleteTargetId = null;

// ========== DOM ELEMENTS ==========
const elements = {
  // Clock elements
  hourHand: document.querySelector(".hour-hand"),
  minuteHand: document.querySelector(".minute-hand"),
  secondHand: document.querySelector(".second-hand"),
  digitalTime: document.getElementById("digitalTime"),
  digitalAMPM: document.getElementById("digitalAMPM"),
  digitalDate: document.getElementById("digitalDate"),

  // Calendar elements
  monthYear: document.getElementById("monthYear"),
  calendarDays: document.getElementById("calendarDays"),
  prevMonth: document.getElementById("prevMonth"),
  nextMonth: document.getElementById("nextMonth"),
  todayBtn: document.getElementById("todayBtn"),

  // Tracker elements
  trackerDateTime: document.getElementById("trackerDateTime"),
  addTrackerBtn: document.getElementById("addTrackerBtn"),
  trackersList: document.getElementById("trackersList"),
  showYears: document.getElementById("showYears"),
  showMonths: document.getElementById("showMonths"),
  showDays: document.getElementById("showDays"),
  showHours: document.getElementById("showHours"),
  showMinutes: document.getElementById("showMinutes"),
  showSeconds: document.getElementById("showSeconds"),

  // Settings & Modals
  settingsBtn: document.getElementById("settingsBtn"),
  settingsModal: document.getElementById("settingsModal"),
  closeSettingsBtn: document.getElementById("closeSettingsBtn"),
  accentColor: document.getElementById("accentColor"),
  colorValue: document.getElementById("colorValue"),
  clockStyle: document.getElementById("clockStyle"),
  theme: document.getElementById("theme"),
  use24Hour: document.getElementById("use24Hour"),
  resetBtn: document.getElementById("resetBtn"),
  confirmModal: document.getElementById("confirmModal"),
  cancelDeleteBtn: document.getElementById("cancelDeleteBtn"),
  confirmDeleteBtn: document.getElementById("confirmDeleteBtn"),
};

// ========== INITIALIZATION ==========
document.addEventListener("DOMContentLoaded", () => {
  loadSettings();
  initializeClock();
  initializeCalendar();
  initializeEventListeners();
  updateClock();
  setInterval(updateClock, 1000);
  updateTrackers();
  setInterval(updateTrackers, 1000);
});

// ========== SETTINGS ==========
function loadSettings() {
  const saved = localStorage.getItem("timeleaf-settings");
  if (saved) {
    state.settings = { ...state.settings, ...JSON.parse(saved) };
  }
  applySettings();
}

function saveSettings() {
  localStorage.setItem("timeleaf-settings", JSON.stringify(state.settings));
  applySettings();
}

function applySettings() {
  // Apply accent color
  document.documentElement.style.setProperty(
    "--primary-green",
    state.settings.accentColor
  );
  elements.accentColor.value = state.settings.accentColor;
  elements.colorValue.textContent = state.settings.accentColor.toUpperCase();

  // Apply theme
  if (state.settings.theme === "auto") {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    document.body.classList.toggle("dark-theme", prefersDark);
  } else {
    document.body.classList.toggle(
      "dark-theme",
      state.settings.theme === "dark"
    );
  }
  elements.theme.value = state.settings.theme;

  // Apply clock style
  elements.clockStyle.value = state.settings.clockStyle;
  updateClockDisplay();

  // Apply time format
  elements.use24Hour.checked = state.settings.use24Hour;
  updateDigitalClock();
}

function updateClockDisplay() {
  const clocks = document.querySelectorAll(".clock-card");
  clocks.forEach((clock, index) => {
    if (state.settings.clockStyle === "analog") {
      clock.style.display = index === 0 ? "flex" : "none";
    } else if (state.settings.clockStyle === "digital") {
      clock.style.display = index === 1 ? "flex" : "none";
    } else {
      clock.style.display = "flex";
    }
  });
}

// ========== CLOCK LOGIC ==========
function initializeClock() {
  // Set initial time
  updateClock();

  // Update digital clock format
  updateDigitalClock();
}

function updateClock() {
  const now = new Date();
  updateAnalogClock(now);
  updateDigitalClock(now);
}

function updateAnalogClock(date) {
  const seconds = date.getSeconds();
  const minutes = date.getMinutes();
  const hours = date.getHours();

  const secondDegrees = (seconds / 60) * 360 + 6;
  const minuteDegrees = (minutes / 60) * 360 + (seconds / 60) * 6;
  const hourDegrees = (hours / 12) * 360 + (minutes / 60) * 30;

  elements.secondHand.style.transform = `rotate(${secondDegrees}deg)`;
  elements.minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
  elements.hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

function updateDigitalClock(date = new Date()) {
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  if (state.settings.use24Hour) {
    elements.digitalTime.textContent = `${hours}:${minutes}:${seconds}`;
    elements.digitalAMPM.textContent = "";
  } else {
    const hours12 = String(date.getHours() % 12 || 12).padStart(2, "0");
    elements.digitalTime.textContent = `${hours12}:${minutes}:${seconds}`;
    elements.digitalAMPM.textContent = date.getHours() >= 12 ? "PM" : "AM";
  }

  // Update date display
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  elements.digitalDate.textContent = date.toLocaleDateString("en-US", options);
}

// ========== CALENDAR LOGIC ==========
function initializeCalendar() {
  renderCalendar();
}

function renderCalendar() {
  const year = state.selectedDate.getFullYear();
  const month = state.selectedDate.getMonth();

  // Update header
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  elements.monthYear.textContent = `${monthNames[month]} ${year}`;

  // Get first day of month and number of days
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();

  elements.calendarDays.innerHTML = "";

  // Previous month's days
  for (let i = firstDay - 1; i >= 0; i--) {
    const day = createDayElement(daysInPrevMonth - i, "other-month");
    elements.calendarDays.appendChild(day);
  }

  // Current month's days
  const today = new Date();
  for (let day = 1; day <= daysInMonth; day++) {
    const isToday =
      day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear();

    const dayElement = createDayElement(day, isToday ? "today" : "");
    dayElement.addEventListener("click", () =>
      selectDate(new Date(year, month, day))
    );
    elements.calendarDays.appendChild(dayElement);
  }

  // Next month's days
  const totalCells = elements.calendarDays.children.length;
  const remainingCells = 42 - totalCells;
  for (let day = 1; day <= remainingCells; day++) {
    const dayElement = createDayElement(day, "other-month");
    elements.calendarDays.appendChild(dayElement);
  }
}

function createDayElement(day, className = "") {
  const div = document.createElement("div");
  div.className = `calendar-day ${className}`;
  div.textContent = day;
  return div;
}

function selectDate(date) {
  state.selectedDate = new Date(date);
  renderCalendar();
}

function goToPreviousMonth() {
  state.selectedDate.setMonth(state.selectedDate.getMonth() - 1);
  renderCalendar();
}

function goToNextMonth() {
  state.selectedDate.setMonth(state.selectedDate.getMonth() + 1);
  renderCalendar();
}

function goToToday() {
  state.selectedDate = new Date();
  renderCalendar();
}

// ========== TIME TRACKER LOGIC ==========
function addTracker() {
  const dateTimeValue = elements.trackerDateTime.value;

  if (!dateTimeValue) {
    showMessage("Please select a date and time", "error");
    return;
  }

  const startDate = new Date(dateTimeValue);
  const now = new Date();

  if (startDate > now) {
    showMessage("Start time cannot be in the future", "error");
    return;
  }

  const id = Date.now();
  const tracker = {
    id,
    startDate,
    createdAt: new Date().toLocaleString(),
  };

  state.trackers.unshift(tracker);
  saveTrackers();
  elements.trackerDateTime.value = "";
  updateTrackers();
  showMessage("Tracker added successfully", "success");
}

function deleteTracker(id) {
  deleteTargetId = id;
  elements.confirmModal.classList.add("active");
}

function confirmDelete() {
  state.trackers = state.trackers.filter((t) => t.id !== deleteTargetId);
  saveTrackers();
  updateTrackers();
  closeConfirmModal();
  showMessage("Tracker deleted", "success");
}

function closeConfirmModal() {
  elements.confirmModal.classList.remove("active");
  deleteTargetId = null;
}

function updateTrackers() {
  if (state.trackers.length === 0) {
    elements.trackersList.innerHTML = `
            <div class="empty-state">
                <p>No trackers yet</p>
                <p class="empty-hint">Add a tracker to start tracking time</p>
            </div>
        `;
    return;
  }

  const trackersList = elements.trackersList;

  // Check if list is empty (initial load)
  const isEmpty = trackersList.querySelector(".empty-state");
  if (isEmpty) {
    trackersList.innerHTML = "";
  }

  state.trackers.forEach((tracker) => {
    const age = calculateAge(tracker.startDate);
    const displayText = formatAge(age);
    const existingItem = trackersList.querySelector(
      `[data-tracker-id="${tracker.id}"]`
    );

    if (existingItem) {
      // Update existing tracker - just change the elapsed time
      const elapsedDiv = existingItem.querySelector(".tracker-elapsed");
      const timeDiv = existingItem.querySelector(".tracker-time");
      elapsedDiv.textContent = displayText;
      timeDiv.textContent = `Age as of ${new Date().toLocaleString()}`;
    } else {
      // Create new tracker item
      const trackerHTML = `
            <div class="tracker-item new-item" data-tracker-id="${tracker.id}">
                <div class="tracker-info">
                    <div class="tracker-label">Born: ${tracker.startDate.toLocaleString()}</div>
                    <div class="tracker-elapsed">${displayText}</div>
                    <div class="tracker-time">Age as of ${new Date().toLocaleString()}</div>
                </div>
                <div class="tracker-actions">
                    <button class="tracker-btn copy-btn" onclick="copyTrackerTime(${
                      tracker.id
                    })" title="Copy">📋</button>
                    <button class="tracker-btn delete-btn" onclick="deleteTracker(${
                      tracker.id
                    })" title="Delete">🗑️</button>
                </div>
            </div>
        `;
      const trackerElement = document.createElement("div");
      trackerElement.innerHTML = trackerHTML;
      trackersList.appendChild(trackerElement.firstElementChild);

      // Remove animation class after animation completes
      setTimeout(() => {
        const item = trackersList.querySelector(
          `[data-tracker-id="${tracker.id}"]`
        );
        if (item) {
          item.classList.remove("new-item");
        }
      }, 300);
    }
  });
}

function calculateAge(birthDate) {
  const now = new Date();
  const elapsed = now - birthDate;

  // Break down age
  let years = now.getFullYear() - birthDate.getFullYear();
  let months = now.getMonth() - birthDate.getMonth();
  let days = now.getDate() - birthDate.getDate();

  // Adjust for negative days
  if (days < 0) {
    months--;
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
  }

  // Adjust for negative months
  if (months < 0) {
    years--;
    months += 12;
  }

  // Calculate time components for today
  let tempDate = new Date(birthDate);
  tempDate.setFullYear(now.getFullYear());
  tempDate.setMonth(now.getMonth());
  tempDate.setDate(now.getDate());

  const remaining = now - tempDate;
  const hours = Math.floor((remaining % 86400000) / 3600000);
  const minutes = Math.floor((remaining % 3600000) / 60000);
  const seconds = Math.floor((remaining % 60000) / 1000);

  // Calculate totals
  const totalDays = Math.floor(elapsed / 86400000);
  const totalHours = Math.floor(elapsed / 3600000);
  const totalMinutes = Math.floor(elapsed / 60000);
  const totalSeconds = Math.floor(elapsed / 1000);
  const totalWeeks = Math.floor(totalDays / 7);
  const remainingDaysAfterWeeks = totalDays % 7;

  return {
    years,
    months,
    days,
    hours,
    minutes,
    seconds,
    totalDays,
    totalHours,
    totalMinutes,
    totalSeconds,
    totalWeeks,
    remainingDaysAfterWeeks,
  };
}

function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function formatAge(age) {
  let parts = [];

  // Show all checked formats
  if (elements.showYears.checked) {
    parts.push(`${age.years} years ${age.months} months`);
  }

  if (elements.showMonths.checked) {
    parts.push(`${age.totalWeeks} weeks ${age.remainingDaysAfterWeeks} days`);
  }

  if (elements.showDays.checked) {
    parts.push(`${formatNumber(age.totalDays)} days`);
  }

  if (elements.showHours.checked) {
    parts.push(`${formatNumber(age.totalHours)} hours`);
  }

  if (elements.showMinutes.checked) {
    parts.push(`${formatNumber(age.totalMinutes)} minutes`);
  }

  if (elements.showSeconds.checked) {
    parts.push(`${formatNumber(age.totalSeconds)} seconds`);
  }

  return parts.length > 0 ? parts.join("\n") : "0 days";
}

function copyTrackerTime(trackerId) {
  const tracker = state.trackers.find((t) => t.id === trackerId);
  if (!tracker) return;

  const age = calculateAge(tracker.startDate);
  const text = formatAge(age);

  navigator.clipboard
    .writeText(text)
    .then(() => {
      showMessage(`Copied: ${text}`, "success");
    })
    .catch(() => {
      showMessage("Failed to copy", "error");
    });
}

function saveTrackers() {
  localStorage.setItem(
    "timeleaf-trackers",
    JSON.stringify(
      state.trackers.map((t) => ({
        id: t.id,
        startDate: t.startDate.toISOString(),
        createdAt: t.createdAt,
      }))
    )
  );
}

function loadTrackers() {
  const saved = localStorage.getItem("timeleaf-trackers");
  if (saved) {
    try {
      const data = JSON.parse(saved);
      state.trackers = data.map((t) => ({
        id: t.id,
        startDate: new Date(t.startDate),
        createdAt: t.createdAt,
      }));
    } catch (e) {
      console.error("Failed to load trackers:", e);
    }
  }
}

// ========== EVENT LISTENERS ==========
function initializeEventListeners() {
  // Clock
  updateClockDisplay();

  // Calendar
  elements.prevMonth.addEventListener("click", goToPreviousMonth);
  elements.nextMonth.addEventListener("click", goToNextMonth);
  elements.todayBtn.addEventListener("click", goToToday);

  // Tracker
  elements.addTrackerBtn.addEventListener("click", addTracker);
  elements.trackerDateTime.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addTracker();
  });

  // Display options
  [
    elements.showYears,
    elements.showMonths,
    elements.showDays,
    elements.showHours,
    elements.showMinutes,
    elements.showSeconds,
  ].forEach((checkbox) => {
    checkbox.addEventListener("change", updateTrackers);
  });

  // Settings
  elements.settingsBtn.addEventListener("click", () => {
    elements.settingsModal.classList.add("active");
  });

  elements.closeSettingsBtn.addEventListener("click", () => {
    elements.settingsModal.classList.remove("active");
  });

  elements.accentColor.addEventListener("input", (e) => {
    state.settings.accentColor = e.target.value;
    saveSettings();
  });

  elements.clockStyle.addEventListener("change", (e) => {
    state.settings.clockStyle = e.target.value;
    saveSettings();
  });

  elements.theme.addEventListener("change", (e) => {
    state.settings.theme = e.target.value;
    saveSettings();
  });

  elements.use24Hour.addEventListener("change", (e) => {
    state.settings.use24Hour = e.target.checked;
    saveSettings();
    updateDigitalClock();
  });

  elements.resetBtn.addEventListener("click", () => {
    state.settings = {
      accentColor: "#2D9C6F",
      clockStyle: "both",
      theme: "light",
      use24Hour: false,
    };
    saveSettings();
    applySettings();
    showMessage("Settings reset to defaults", "success");
  });

  // Confirmation modal
  elements.cancelDeleteBtn.addEventListener("click", closeConfirmModal);
  elements.confirmDeleteBtn.addEventListener("click", confirmDelete);

  // Close modals on outside click
  window.addEventListener("click", (e) => {
    if (e.target === elements.settingsModal) {
      elements.settingsModal.classList.remove("active");
    }
    if (e.target === elements.confirmModal) {
      closeConfirmModal();
    }
  });

  // Load trackers on startup
  loadTrackers();
  updateTrackers();

  // Set default datetime to now
  setDefaultDateTime();
}

function setDefaultDateTime() {
  const now = new Date();
  now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
  elements.trackerDateTime.value = now.toISOString().slice(0, 16);
}

// ========== UI UTILITIES ==========
function showMessage(text, type = "success") {
  const feedback = document.createElement("div");
  feedback.className = "copy-feedback";
  feedback.textContent = text;
  feedback.style.background =
    type === "success" ? "var(--primary-green)" : "#DC3545";

  document.body.appendChild(feedback);

  setTimeout(() => {
    feedback.style.animation = "slideInRight 0.3s ease-out reverse";
    setTimeout(() => feedback.remove(), 300);
  }, 2000);
}

// ========== KEYBOARD SHORTCUTS ==========
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    elements.settingsModal.classList.remove("active");
    closeConfirmModal();
  }
});

// Support for automatic theme detection changes
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", () => {
    if (state.settings.theme === "auto") {
      applySettings();
    }
  });
