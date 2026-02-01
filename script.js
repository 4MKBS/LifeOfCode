// Files data for each section
const webFiles = [
  // Mini Projects (01-25)
  {
    name: "01. Calculator",
    path: "web/vanilla/01.calculator/index.html",
    category: "Mini Projects",
  },
  {
    name: "02. Temperature Converter",
    path: "web/vanilla/02.temperature-converter/index.html",
    category: "Mini Projects",
  },
  {
    name: "03. Currency Converter",
    path: "web/vanilla/03.currency-converter/index.html",
    category: "Mini Projects",
  },
  {
    name: "04. Login & Signup",
    path: "web/vanilla/04.login&singup/index.html",
    category: "Mini Projects",
  },
  {
    name: "05. Todo List",
    path: "web/vanilla/05.todo-list/index.html",
    category: "Mini Projects",
  },
  {
    name: "06. Contact Form",
    path: "web/vanilla/06.contactFE/index.html",
    category: "Mini Projects",
  },
  {
    name: "07. Simple Blog",
    path: "web/vanilla/07.simple-blog/index.html",
    category: "Mini Projects",
  },
  {
    name: "08. Guestbook",
    path: "web/vanilla/08.guestbook-application/index.html",
    category: "Mini Projects",
  },
  {
    name: "09. BMI Calculator",
    path: "web/vanilla/09.bmi-calculator/index.html",
    category: "Mini Projects",
  },
  {
    name: "10. Survey System",
    path: "web/vanilla/10.basic-survey-system/index.html",
    category: "Mini Projects",
  },
  {
    name: "11. Quote Generator",
    path: "web/vanilla/11.random-quote-generator/index.html",
    category: "Mini Projects",
  },
  {
    name: "12. Age Calculator",
    path: "web/vanilla/12.age-calculator/index.html",
    category: "Mini Projects",
  },
  {
    name: "13. Digital Clock",
    path: "web/vanilla/13.digital-clock/index.html",
    category: "Mini Projects",
  },
  {
    name: "14. IP Address Finder",
    path: "web/vanilla/14.ip-address-finder/index.html",
    category: "Mini Projects",
  },
  {
    name: "15. URL Shortener",
    path: "web/vanilla/15.url-shortener/index.html",
    category: "Mini Projects",
  },
  {
    name: "16. Image Gallery",
    path: "web/vanilla/16.image-gallery/index.html",
    category: "Mini Projects",
  },
  {
    name: "17. File Upload System",
    path: "web/vanilla/17.file-upload-system/index.html",
    category: "Mini Projects",
  },
  {
    name: "18. Feedback Form",
    path: "web/vanilla/18.feedback-form/index.html",
    category: "Mini Projects",
  },
  {
    name: "19. Session Counter",
    path: "web/vanilla/19.session-based-counter/index.html",
    category: "Mini Projects",
  },
  {
    name: "20. E-Card Generator",
    path: "web/vanilla/20.e-card-generator/index.html",
    category: "Mini Projects",
  },
  {
    name: "21. Weather App",
    path: "web/vanilla/21.weather-app/index.html",
    category: "Mini Projects",
  },
  {
    name: "22. Password Generator",
    path: "web/vanilla/22.password-generator/index.html",
    category: "Mini Projects",
  },
  {
    name: "23. Shopping Cart",
    path: "web/vanilla/23.shopping-cart/index.html",
    category: "Mini Projects",
  },
  {
    name: "24. Expense Tracker",
    path: "web/vanilla/24.expense-tracker/index.html",
    category: "Mini Projects",
  },
  {
    name: "25. Recipe Manager",
    path: "web/vanilla/25.recipe-management-system/index.html",
    category: "Mini Projects",
  },
  {
    name: "26. Skeleton Loading",
    path: "web/vanilla/26.skeleton-loading-permissions/index.html",
    category: "Mini Projects",
  },

  // Additional Projects
  {
    name: "Dashboard UI",
    path: "web/vanilla/dashboard-ui-lm/index.html",
    category: "Practice",
  },
  {
    name: "Profile Settings",
    path: "web/vanilla/profile-setting/index.html",
    category: "Practice",
  },
  {
    name: "Timeleaf",
    path: "web/vanilla/timeleaf/index.html",
    category: "Practice",
  },
  {
    name: "Unicode Characters",
    path: "web/vanilla/unicode-charecters/index.html",
    category: "Practice",
  },
  {
    name: "User Profile",
    path: "web/vanilla/user-profile/index.html",
    category: "Practice",
  },

  // Experiments
  {
    name: "Flex Layout",
    path: "web/experiments/flex-layout/index.html",
    category: "Experiments",
  },
  {
    name: "Grid Layout",
    path: "web/experiments/grid-layout/index.html",
    category: "Experiments",
  },

  // Components
  {
    name: "Footer Component",
    path: "web/components/footer.html",
    category: "Components",
  },
  {
    name: "Navbar Component",
    path: "web/components/navbar.html",
    category: "Components",
  },
  {
    name: "Drag Block",
    path: "web/components/dragblock.html",
    category: "Components",
  },
  {
    name: "Fullscreen",
    path: "web/components/fullscreen.html",
    category: "Components",
  },

  // Snippets
  {
    name: "Responsive Meta",
    path: "web/snippets/responsive-meta.html",
    category: "Snippets",
  },
  {
    name: "Dark Mode Toggle",
    path: "web/snippets/dark-mode-toggle.js",
    category: "Snippets",
  },

  // Other Projects
  {
    name: "CSS Exercises",
    path: "web/vanilla/css-exercises/index.html",
    category: "Practice",
  },
  {
    name: "HTML Exercises",
    path: "web/vanilla/exercises/index.html",
    category: "Practice",
  },
  {
    name: "Landing Page",
    path: "web/vanilla/landing-page/index.html",
    category: "Practice",
  },
  {
    name: "Hero Section",
    path: "web/vanilla/hero/index.html",
    category: "Practice",
  },
  {
    name: "Old School",
    path: "web/vanilla/old-school/index.html",
    category: "Practice",
  },
  {
    name: "BD Map",
    path: "web/vanilla/bdmap/index.html",
    category: "Practice",
  },

  // CSS Demos
  {
    name: "Flexbox Demo",
    path: "web/vanilla/css-exercises/demos/flexbox.html",
    category: "CSS Demos",
  },
  {
    name: "Grid Demo",
    path: "web/vanilla/css-exercises/demos/grid.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Selectors",
    path: "web/vanilla/css-exercises/demos/selectors.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 1",
    path: "web/vanilla/css-exercises/demos/cssday1.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 2",
    path: "web/vanilla/css-exercises/demos/cssday2.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 3",
    path: "web/vanilla/css-exercises/demos/cssday3.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 4",
    path: "web/vanilla/css-exercises/demos/cssday4.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 5",
    path: "web/vanilla/css-exercises/demos/cssday5.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 6",
    path: "web/vanilla/css-exercises/demos/cssday6.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 7",
    path: "web/vanilla/css-exercises/demos/cssday7.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 8",
    path: "web/vanilla/css-exercises/demos/cssday8.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 9",
    path: "web/vanilla/css-exercises/demos/cssday9.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 10",
    path: "web/vanilla/css-exercises/demos/cssday10.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 11",
    path: "web/vanilla/css-exercises/demos/cssday11.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 12",
    path: "web/vanilla/css-exercises/demos/cssday12.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 13",
    path: "web/vanilla/css-exercises/demos/cssday13.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 14",
    path: "web/vanilla/css-exercises/demos/cssday14.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 15",
    path: "web/vanilla/css-exercises/demos/cssday15.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 16",
    path: "web/vanilla/css-exercises/demos/cssday16.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 17",
    path: "web/vanilla/css-exercises/demos/cssday17.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 18",
    path: "web/vanilla/css-exercises/demos/cssday18.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 19",
    path: "web/vanilla/css-exercises/demos/cssday19.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 20",
    path: "web/vanilla/css-exercises/demos/cssday20.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 21",
    path: "web/vanilla/css-exercises/demos/cssday21.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 22",
    path: "web/vanilla/css-exercises/demos/cssday22.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 23",
    path: "web/vanilla/css-exercises/demos/cssday23.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 24",
    path: "web/vanilla/css-exercises/demos/cssday24.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 25",
    path: "web/vanilla/css-exercises/demos/cssday25.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 26",
    path: "web/vanilla/css-exercises/demos/cssday26.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 27",
    path: "web/vanilla/css-exercises/demos/cssday27.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 28",
    path: "web/vanilla/css-exercises/demos/cssday28.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 29",
    path: "web/vanilla/css-exercises/demos/cssday29.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 30",
    path: "web/vanilla/css-exercises/demos/cssday30.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 31",
    path: "web/vanilla/css-exercises/demos/cssday31.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 32",
    path: "web/vanilla/css-exercises/demos/cssday32.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 33",
    path: "web/vanilla/css-exercises/demos/cssday33.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 34",
    path: "web/vanilla/css-exercises/demos/cssday34.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 35",
    path: "web/vanilla/css-exercises/demos/cssday35.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 36",
    path: "web/vanilla/css-exercises/demos/cssday36.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 37",
    path: "web/vanilla/css-exercises/demos/cssday37.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 38",
    path: "web/vanilla/css-exercises/demos/cssday38.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 39",
    path: "web/vanilla/css-exercises/demos/cssday39.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 40",
    path: "web/vanilla/css-exercises/demos/cssday40.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 41",
    path: "web/vanilla/css-exercises/demos/cssday41.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 42",
    path: "web/vanilla/css-exercises/demos/cssday42.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 43",
    path: "web/vanilla/css-exercises/demos/cssday43.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 44",
    path: "web/vanilla/css-exercises/demos/cssday44.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 45",
    path: "web/vanilla/css-exercises/demos/cssday45.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 46",
    path: "web/vanilla/css-exercises/demos/cssday46.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 47",
    path: "web/vanilla/css-exercises/demos/cssday47.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 48",
    path: "web/vanilla/css-exercises/demos/cssday48.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 49",
    path: "web/vanilla/css-exercises/demos/cssday49.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 50",
    path: "web/vanilla/css-exercises/demos/cssday50.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 51",
    path: "web/vanilla/css-exercises/demos/cssday51.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 52",
    path: "web/vanilla/css-exercises/demos/cssday52.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 53",
    path: "web/vanilla/css-exercises/demos/cssday53.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 54",
    path: "web/vanilla/css-exercises/demos/cssday54.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 55",
    path: "web/vanilla/css-exercises/demos/cssday55.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 56",
    path: "web/vanilla/css-exercises/demos/cssday56.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 57",
    path: "web/vanilla/css-exercises/demos/cssday57.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 58",
    path: "web/vanilla/css-exercises/demos/cssday58.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 59",
    path: "web/vanilla/css-exercises/demos/cssday59.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 60",
    path: "web/vanilla/css-exercises/demos/cssday60.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 61",
    path: "web/vanilla/css-exercises/demos/cssday61.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 62",
    path: "web/vanilla/css-exercises/demos/cssday62.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 63",
    path: "web/vanilla/css-exercises/demos/cssday63.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 64",
    path: "web/vanilla/css-exercises/demos/cssday64.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 65",
    path: "web/vanilla/css-exercises/demos/cssday65.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 66",
    path: "web/vanilla/css-exercises/demos/cssday66.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 67",
    path: "web/vanilla/css-exercises/demos/cssday67.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 68",
    path: "web/vanilla/css-exercises/demos/cssday68.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 69",
    path: "web/vanilla/css-exercises/demos/cssday69.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 70",
    path: "web/vanilla/css-exercises/demos/cssday70.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 71",
    path: "web/vanilla/css-exercises/demos/cssday71.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 72",
    path: "web/vanilla/css-exercises/demos/cssday72.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 73",
    path: "web/vanilla/css-exercises/demos/cssday73.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 74",
    path: "web/vanilla/css-exercises/demos/cssday74.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 75",
    path: "web/vanilla/css-exercises/demos/cssday75.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 76",
    path: "web/vanilla/css-exercises/demos/cssday76.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 77",
    path: "web/vanilla/css-exercises/demos/cssday77.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 78",
    path: "web/vanilla/css-exercises/demos/cssday78.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 79",
    path: "web/vanilla/css-exercises/demos/cssday79.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 80",
    path: "web/vanilla/css-exercises/demos/cssday80.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 81",
    path: "web/vanilla/css-exercises/demos/cssday81.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 82",
    path: "web/vanilla/css-exercises/demos/cssday82.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 83",
    path: "web/vanilla/css-exercises/demos/cssday83.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 84",
    path: "web/vanilla/css-exercises/demos/cssday84.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 85",
    path: "web/vanilla/css-exercises/demos/cssday85.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 86",
    path: "web/vanilla/css-exercises/demos/cssday86.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 87",
    path: "web/vanilla/css-exercises/demos/cssday87.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 88",
    path: "web/vanilla/css-exercises/demos/cssday88.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 89",
    path: "web/vanilla/css-exercises/demos/cssday89.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 90",
    path: "web/vanilla/css-exercises/demos/cssday90.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 91",
    path: "web/vanilla/css-exercises/demos/cssday91.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 92",
    path: "web/vanilla/css-exercises/demos/cssday92.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 93",
    path: "web/vanilla/css-exercises/demos/cssday93.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 94",
    path: "web/vanilla/css-exercises/demos/cssday94.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 95",
    path: "web/vanilla/css-exercises/demos/cssday95.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 96",
    path: "web/vanilla/css-exercises/demos/cssday96.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 97",
    path: "web/vanilla/css-exercises/demos/cssday97.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 98",
    path: "web/vanilla/css-exercises/demos/cssday98.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 99",
    path: "web/vanilla/css-exercises/demos/cssday99.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Day 100",
    path: "web/vanilla/css-exercises/demos/cssday100.html",
    category: "CSS Demos",
  },
  {
    name: "CSS Animations",
    path: "web/vanilla/css-exercises/demos/animations.html",
    category: "CSS Demos",
  },

  // HTML Demos
  {
    name: "HTML Tables",
    path: "web/vanilla/exercises/demos/tables.html",
    category: "HTML Demos",
  },
  {
    name: "HTML Forms",
    path: "web/vanilla/exercises/demos/forms.html",
    category: "HTML Demos",
  },
  {
    name: "Text Content",
    path: "web/vanilla/exercises/demos/text-content.html",
    category: "HTML Demos",
  },
  {
    name: "Lists",
    path: "web/vanilla/exercises/demos/lists.html",
    category: "HTML Demos",
  },
  {
    name: "Media Elements",
    path: "web/vanilla/exercises/demos/media.html",
    category: "HTML Demos",
  },
  {
    name: "Document Structure",
    path: "web/vanilla/exercises/demos/document-structure.html",
    category: "HTML Demos",
  },
  {
    name: "Links",
    path: "web/vanilla/exercises/demos/links.html",
    category: "HTML Demos",
  },
];

const fundamentalsFiles = [
  {
    name: "Hello World (C)",
    path: "fundamentals/c/hello.c",
    category: "C Language",
  },
  {
    name: "Variables (C)",
    path: "fundamentals/c/variable.c",
    category: "C Language",
  },
  {
    name: "Boilerplate",
    path: "fundamentals/cpp/boilerplate.cpp",
    category: "C++",
  },
  {
    name: "Hello World (C++)",
    path: "fundamentals/cpp/hello.cpp",
    category: "C++",
  },
  {
    name: "Check Prime",
    path: "fundamentals/cpp/checkprime.cpp",
    category: "C++",
  },
  {
    name: "Data Types",
    path: "fundamentals/cpp/datatype.cpp",
    category: "C++",
  },
  {
    name: "Functions",
    path: "fundamentals/cpp/function.cpp",
    category: "C++",
  },
  {
    name: "If-Else",
    path: "fundamentals/cpp/ifelse.cpp",
    category: "C++",
  },
  {
    name: "Loops - For",
    path: "fundamentals/cpp/forloop.cpp",
    category: "C++",
  },
  {
    name: "Loops - While",
    path: "fundamentals/cpp/whileloop.cpp",
    category: "C++",
  },
  {
    name: "Loops - Do-While",
    path: "fundamentals/cpp/dowhile.cpp",
    category: "C++",
  },
  {
    name: "Operators",
    path: "fundamentals/cpp/operator.cpp",
    category: "C++",
  },
  {
    name: "Pointers",
    path: "fundamentals/cpp/pointer.cpp",
    category: "C++",
  },
  {
    name: "Patterns",
    path: "fundamentals/cpp/patterns.cpp",
    category: "C++",
  },
  {
    name: "Calculator",
    path: "fundamentals/cpp/simplecalculator.cpp",
    category: "C++",
  },
  {
    name: "Hello World (Java)",
    path: "fundamentals/java/Hello.java",
    category: "Java",
  },
  {
    name: "Sum Program",
    path: "fundamentals/java/sum.java",
    category: "Java",
  },
  {
    name: "Hello World (JS)",
    path: "fundamentals/JS/hello.js",
    category: "JavaScript",
  },
  {
    name: "Variables (JS)",
    path: "fundamentals/JS/variable.js",
    category: "JavaScript",
  },
  {
    name: "Data Types (JS)",
    path: "fundamentals/JS/datatype.js",
    category: "JavaScript",
  },
  {
    name: "Functions (JS)",
    path: "fundamentals/JS/function.js",
    category: "JavaScript",
  },
  {
    name: "Arrays (JS)",
    path: "fundamentals/JS/array.js",
    category: "JavaScript",
  },
  {
    name: "Objects (JS)",
    path: "fundamentals/JS/object.js",
    category: "JavaScript",
  },
  {
    name: "Let, Var, Const",
    path: "fundamentals/JS/letVarConst.js",
    category: "JavaScript",
  },
  {
    name: "Hello World (Python)",
    path: "fundamentals/python/hello.py",
    category: "Python",
  },
  {
    name: "Variables (Python)",
    path: "fundamentals/python/variable.py",
    category: "Python",
  },
  {
    name: "Data Types (Python)",
    path: "fundamentals/python/dataType.py",
    category: "Python",
  },
  {
    name: "Functions (Python)",
    path: "fundamentals/python/function.py",
    category: "Python",
  },
  {
    name: "Lists (Python)",
    path: "fundamentals/python/list.py",
    category: "Python",
  },
  {
    name: "Dictionaries (Python)",
    path: "fundamentals/python/dictionary.py",
    category: "Python",
  },
  {
    name: "Classes & Objects",
    path: "fundamentals/python/class&obj.py",
    category: "Python",
  },
  {
    name: "Loops (Python)",
    path: "fundamentals/python/loop.py",
    category: "Python",
  },
  {
    name: "Hello World (Go)",
    path: "fundamentals/go/hello.go",
    category: "Go",
  },
  {
    name: "Variables (Go)",
    path: "fundamentals/go/variable.go",
    category: "Go",
  },
  {
    name: "Hello World (Rust)",
    path: "fundamentals/rust/hello.rs",
    category: "Rust",
  },
  {
    name: "Variables (Rust)",
    path: "fundamentals/rust/variable.rs",
    category: "Rust",
  },
  {
    name: "Hello World (PHP)",
    path: "fundamentals/php/hello.php",
    category: "PHP",
  },
  {
    name: "Variables (PHP)",
    path: "fundamentals/php/variable.php",
    category: "PHP",
  },
  {
    name: "Arrays (PHP)",
    path: "fundamentals/php/array.php",
    category: "PHP",
  },
  {
    name: "Functions (PHP)",
    path: "fundamentals/php/function.php",
    category: "PHP",
  },
  {
    name: "OOP Classes",
    path: "fundamentals/php/oopClass&Obj.php",
    category: "PHP",
  },
  {
    name: "OOP 4 Pillars",
    path: "fundamentals/php/oop4pillar.php",
    category: "PHP",
  },
  {
    name: "Shell Hello",
    path: "fundamentals/shell/hello.sh",
    category: "Shell",
  },
  {
    name: "Shell Variables",
    path: "fundamentals/shell/variable.sh",
    category: "Shell",
  },
  {
    name: "Shell Arrays",
    path: "fundamentals/shell/array.sh",
    category: "Shell",
  },
  {
    name: "Shell Functions",
    path: "fundamentals/shell/functions.sh",
    category: "Shell",
  },
];

const dsaFiles = [
  { name: "README", path: "dsa/README.md", category: "Documentation" },
];

const competitiveFiles = [
  {
    name: "README",
    path: "competitive/README.md",
    category: "Documentation",
  },
];

const reallifeFiles = [
  {
    name: "README",
    path: "real-life/README.md",
    category: "Documentation",
  },
];

const utilityFiles = [
  {
    name: "README",
    path: "utility/README.md",
    category: "Documentation",
  },
  {
    name: "FTP Checker Script",
    path: "utility/ftp-check/check_urls.sh",
    category: "FTP Tools",
  },
  {
    name: "FTP Links",
    path: "utility/ftp-check/ftplinks.txt",
    category: "FTP Tools",
  },
  {
    name: "FTP Check README",
    path: "utility/ftp-check/README.md",
    category: "FTP Tools",
  },
];

const docsFiles = [
  { name: "README", path: "docs/README.md", category: "Documentation" },
];

// Function to populate file grid
function populateFileGrid(fileGridId, files) {
  const fileGrid = document.getElementById(fileGridId);

  // Clear existing content
  fileGrid.innerHTML = "";

  if (files.length === 0) {
    fileGrid.innerHTML =
      '<div style="grid-column: 1 / -1; text-align: center; padding: 2rem; color: #666;">No files available yet. Coming soon! 🚧</div>';
  } else {
    // Group files by category
    const categories = {};
    files.forEach((file) => {
      if (!categories[file.category]) {
        categories[file.category] = [];
      }
      categories[file.category].push(file);
    });

    // Create file cards grouped by category
    Object.keys(categories).forEach((category) => {
      const categorySection = document.createElement("div");
      categorySection.style.gridColumn = "1 / -1";
      categorySection.innerHTML = `<h3 style="margin: 1rem 0 0.5rem 0; color: var(--primary); font-size: 1.2rem;">${category}</h3>`;
      fileGrid.appendChild(categorySection);

      categories[category].forEach((file) => {
        const fileCard = document.createElement("a");
        fileCard.className = "file-card";
        fileCard.href = file.path;
        fileCard.target = "_blank";

        const icon = getFileIcon(file.name, file.category);

        fileCard.innerHTML = `
                            <span class="file-icon">${icon}</span>
                            <div class="file-name">${file.name}</div>
                            <div class="file-path">${file.path}</div>
                        `;

        fileGrid.appendChild(fileCard);
      });
    });
  }
}

// Populate all sections on page load
function initializeFileSections() {
  populateFileGrid("webFileGrid", webFiles);
  populateFileGrid("fundamentalsFileGrid", fundamentalsFiles);
  populateFileGrid("dsaFileGrid", dsaFiles);
  populateFileGrid("competitiveFileGrid", competitiveFiles);
  populateFileGrid("reallifeFileGrid", reallifeFiles);
  populateFileGrid("utilityFileGrid", utilityFiles);
  populateFileGrid("docsFileGrid", docsFiles);
}

// Get appropriate icon for file type
function getFileIcon(name, category) {
  // Mini Projects - Specific icons
  if (category === "Mini Projects") {
    if (name.includes("Calculator")) return "🧮";
    if (name.includes("Temperature")) return "🌡️";
    if (name.includes("Currency")) return "💱";
    if (name.includes("Login") || name.includes("Signup")) return "🔐";
    if (name.includes("Todo")) return "✅";
    if (name.includes("Contact")) return "📧";
    if (name.includes("Blog")) return "📝";
    if (name.includes("Guestbook")) return "📖";
    if (name.includes("BMI")) return "⚖️";
    if (name.includes("Survey")) return "📊";
    if (name.includes("Quote")) return "💬";
    if (name.includes("Age")) return "🎂";
    if (name.includes("Clock")) return "🕒";
    if (name.includes("IP Address")) return "🌐";
    if (name.includes("URL")) return "🔗";
    if (name.includes("Gallery")) return "🖼️";
    if (name.includes("Upload")) return "📤";
    if (name.includes("Feedback")) return "⭐";
    if (name.includes("Counter")) return "🔢";
    if (name.includes("Card")) return "💌";
    if (name.includes("Weather")) return "🌤️";
    if (name.includes("Password")) return "🔑";
    if (name.includes("Shopping")) return "🛒";
    if (name.includes("Expense")) return "💰";
    if (name.includes("Recipe")) return "🍳";
    return "🚀"; // Default for mini projects
  }

  // Web Development icons
  if (category === "Components") return "🧩";
  if (category === "Experiments") return "🧪";
  if (category === "Snippets") return "✂️";
  if (category === "CSS Demos") return "🎨";
  if (category === "HTML Demos") return "📄";
  if (category === "Practice") return "💪";
  if (name.includes("Landing") || name.includes("Hero")) return "🏠";
  if (name.includes("Exercise")) return "💪";
  if (name.includes("BD Map")) return "🗺️";

  // Programming Language icons
  if (category === "C Language") return "⚡";
  if (category === "C++") return "🔥";
  if (category === "Java") return "☕";
  if (category === "JavaScript") return "🟨";
  if (category === "Python") return "🐍";
  if (category === "Go") return "🐹";
  if (category === "Rust") return "🦀";
  if (category === "PHP") return "🐘";
  if (category === "Shell") return "🐚";

  // General categories
  if (category === "Documentation") return "📚";
  if (category === "FTP Tools") return "🌐";

  // File type based icons
  if (name.toLowerCase().includes("hello")) return "👋";
  if (name.toLowerCase().includes("variable")) return "📦";
  if (name.toLowerCase().includes("function")) return "⚙️";
  if (name.toLowerCase().includes("class")) return "🏗️";
  if (name.toLowerCase().includes("loop")) return "🔄";
  if (name.toLowerCase().includes("array")) return "📋";

  return "📄";
}

// Simple theme toggle functionality
function toggleTheme() {
  const body = document.body;
  const button = document.querySelector(".theme-toggle");

  if (body.style.filter === "invert(1) hue-rotate(180deg)") {
    body.style.filter = "";
    button.textContent = "🌙";
  } else {
    body.style.filter = "invert(1) hue-rotate(180deg)";
    button.textContent = "☀️";
  }
}

// Add some interactive effects
document.addEventListener("DOMContentLoaded", function () {
  // Initialize all file sections
  initializeFileSections();

  const cards = document.querySelectorAll(".nav-card");

  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px) scale(1.02)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
    });
  });

  // Add click effect
  cards.forEach((card) => {
    card.addEventListener("click", function (e) {
      // Create ripple effect
      const ripple = document.createElement("div");
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.cssText = `
                        position: absolute;
                        width: ${size}px;
                        height: ${size}px;
                        left: ${x}px;
                        top: ${y}px;
                        background: rgba(102, 126, 234, 0.3);
                        border-radius: 50%;
                        transform: scale(0);
                        animation: ripple 0.6s ease-out;
                        pointer-events: none;
                    `;

      this.style.position = "relative";
      this.appendChild(ripple);

      setTimeout(() => ripple.remove(), 600);
    });
  });
});

// Add CSS for ripple animation
const style = document.createElement("style");
style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(2);
                    opacity: 0;
                }
            }
        `;
document.head.appendChild(style);
