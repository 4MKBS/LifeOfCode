// Adding days to a date

function addDays(date, days) {
    const copy = new Date(date);
    copy.setDate(copy.getDate() + days);
    return copy;
}

// Subtracting days from a date

function subtractDays(date, days) {
    return addDays(date, -days);
}

// Examples
const originalDate = new Date('2024-06-15');
console.log('Original Date:', originalDate.toDateString());

const datePlus10 = addDays(originalDate, 10);
console.log('Date after adding 10 days:', datePlus10.toDateString());

const dateMinus5 = subtractDays(originalDate, 5);
console.log('Date after subtracting 5 days:', dateMinus5.toDateString());

const datePlus30 = addDays(originalDate, 30);
console.log('Date after adding 30 days:', datePlus30.toDateString());

const dateMinus15 = subtractDays(originalDate, 15);
console.log('Date after subtracting 15 days:', dateMinus15.toDateString());

const leapYearDate = new Date('2020-02-28');
const leapYearPlus3 = addDays(leapYearDate, 3);
console.log('Leap year date after adding 3 days:', leapYearPlus3.toDateString());

const endOfMonthDate = new Date('2024-01-31');
const endOfMonthPlus1 = addDays(endOfMonthDate, 1);
console.log('End of month date after adding 1 day:', endOfMonthPlus1.toDateString());

const startOfMonthDate = new Date('2024-03-01');
const startOfMonthMinus1 = subtractDays(startOfMonthDate, 1);
console.log('Start of month date after subtracting 1 day:', startOfMonthMinus1.toDateString());

const negativeDaysDate = subtractDays(originalDate, -10);
console.log('Date after subtracting -10 days (adding 10):', negativeDaysDate.toDateString());

const largeDaysDate = addDays(originalDate, 365);
console.log('Date after adding 365 days:', largeDaysDate.toDateString());

const negativeLargeDaysDate = subtractDays(originalDate, 365);
console.log('Date after subtracting 365 days:', negativeLargeDaysDate.toDateString());

const today = new Date();
const nextMonth = addDays(today, 30);
console.log('Today:', today.toDateString());
console.log('Date after adding 30 days to today:', nextMonth.toDateString());

const previousMonth = subtractDays(today, 30);
console.log('Date after subtracting 30 days from today:', previousMonth.toDateString());

const centuryDate = new Date('2000-01-01');
const centuryPlus100 = addDays(centuryDate, 36525); // Approx. 100 years
console.log('Century date after adding 100 years:', centuryPlus100.toDateString());
