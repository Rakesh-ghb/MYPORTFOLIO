const GH = 'https://github.com/rakesh-ghb'
export const contact = {
  email: 'rakeshrakeshgorre@gmail.com', phone: '+919652884854', phoneText: '+91 96528 84854',
  github: GH, linkedin: 'https://linkedin.com/in/gorre-rakesh-716855334',
}
export const projects = [
  { title: 'Vendora', tag: 'Full stack e-commerce platform. Solo build, live in production.', featured: true,
    points: ['Customers browse products, fill a cart, place orders, and pay through Razorpay.',
      'Secure sign-in with JWT and role-based access, so shoppers and admins see different things.',
      'Spring Boot REST APIs consumed by the React front end, with user and admin dashboards.',
      'Front end on Vercel, back end on Railway, code managed with Git and GitHub.'],
    stack: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'React.js', 'MySQL', 'Razorpay', 'Bootstrap'],
    links: [{ label: 'Open live demo', href: 'https://full-stack-java-project-yqbm.vercel.app' }, { label: 'GitHub', href: GH }] },
  { title: 'Project KEYSTONE', tag: 'Full stack field service management platform. Built during my Zidio Development internship.',
    points: ['Full stack build: a React front end and a Spring Boot back end working together over REST APIs.',
      'Work orders, technicians, and customers managed across the service lifecycle.',
      'JWT authentication with role-based access control.',
      'Domain model with Spring Data JPA and Flyway migrations on PostgreSQL, with the API documented in springdoc-openapi.'],
    stack: ['React', 'Java 21', 'Spring Boot 3', 'Spring Security', 'JWT', 'Spring Data JPA', 'PostgreSQL', 'Flyway'],
    links: [{ label: 'GitHub', href: GH }] },
  { title: 'Calculator', tag: 'Working calculator built in React. Runs right here in the portfolio.',
    points: ['Add, subtract, multiply, divide, percent, and sign change.', 'Chained operations and divide-by-zero handling.', 'Keyboard support: digits, + - * /, Enter, Backspace, Escape.'],
    stack: ['React', 'Hooks', 'CSS Grid'], links: [{ label: 'Open calculator', href: '#/calculator', internal: true }] },
  { title: 'Weather App', tag: 'Live weather for any city, built in React.',
    points: ['Search a city and see current temperature, feels-like, humidity, and wind.', 'Seven-day forecast with highs and lows.', 'Uses the free Open-Meteo API, so no API key is needed.'],
    stack: ['React', 'Fetch API', 'Open-Meteo'], links: [{ label: 'Open weather app', href: '#/weather', internal: true }] },
]
export const practice = [
  ['Table Tennis Leaderboard', 'HTML'], ['Profile Badge', 'HTML, CSS'], ['Burger Menu', 'HTML, CSS'],
  ['Falling Hearts', 'HTML, CSS, JS'], ['Unit Converter', 'HTML, CSS, JS'], ['Pomodoro Timer', 'React'],
  ['Wikipedia Clone', 'React'], ['Photo Carousel', 'JS'], ['Travel App', 'React'],
]
export const experience = [
  { role: 'AI Data Operations Intern', org: 'Learning Path Technology Private Limited (The AI School), AV-HUB, Hyderabad', when: 'June 2026 to September 10, 2026',
    points: ['Annotated and labeled text, image, and document datasets.', 'Edit phase: reviewed and corrected annotations for accuracy and consistency.',
      'Audit phase: validated finished annotations against quality standards before submission.', 'Ran data validation and quality checks to improve AI model performance.'] },
  { role: 'Java Full Stack Intern', org: 'Zidio Development, Bengaluru (remote)', when: 'August 1 to August 31, 2026',
    points: ['Worked on a full stack project, Project KEYSTONE, covering both the front end and the back end.',
      'Back end: Spring Boot 3, JWT authentication, role-based access, domain model, and database migrations.',
      'Front end: a React interface connected to the back end through REST APIs.'] },
]
export const skills = {
  Languages: ['Java', 'JavaScript', 'SQL'], 'Back end': ['Spring Boot', 'Spring Security', 'JWT', 'Spring Data JPA', 'REST APIs'],
  'Front end': ['React.js', 'HTML5', 'CSS3', 'Bootstrap'], Databases: ['MySQL', 'PostgreSQL'],
  'Tools and deployment': ['Git', 'GitHub', 'VS Code', 'Eclipse', 'Flyway', 'Vercel', 'Railway'], 'AI data operations': ['Data annotation', 'Edit phase', 'Audit phase'],
}
export const education = [
  ['MCA', 'Omega PG College, Hyderabad', '2024 to 2026', 'CGPA 7.5 / 10'],
  ['B.Sc (MPCS)', 'Government City College', '2021 to 2024', '81%'],
  ['Intermediate', 'Sai Sri Junior College', '2019 to 2021', '66%'],
  ['SSC (Class X)', 'TS Model High School, Mustabad', '2018 to 2019', 'CGPA 8.5 / 10'],
]
