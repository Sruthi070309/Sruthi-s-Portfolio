// size: wide (7 cols), std (5 cols), third (4 cols). bg/fg/mark/shape style the cover art.
// TODO: add repository links to the links arrays as you push each project.
export const projects = [
  {
    id: "pathly", title: "Pathly", category: "Web Development", year: "2025", size: "wide",
    desc: "A full stack app to track job and internship applications, with analytics and personalised dashboards. Includes authentication, CRUD and a responsive UI with theme support.",
    tools: ["React", "Supabase"], links: [],
    bg: "#111111", fg: "#F3F3F1", mark: "Pathly", shape: "bars",
  },
  {
    id: "jobtrack", title: "JobTrack", category: "Web Development", year: "2026", size: "std",
    desc: "Job and internship tracker with search, status tracking, JWT login, user and admin roles, and an admin dashboard for internships.",
    tools: ["JavaScript", "Node.js", "Express", "MongoDB", "JWT"], links: [],
    bg: "#E23744", fg: "#FFFFFF", mark: "JobTrack", shape: "lines",
  },
  {
    id: "studyroom", title: "Campus Study Room Booking", category: "Web Development", year: "2026", size: "third",
    desc: "A React app to browse study rooms, search by name or building, request a booking with validation and view your bookings. Built sprint by sprint from user stories.",
    tools: ["React", "Vite", "React Router", "Tailwind CSS"],
    links: [
      { label: "Live site", url: "https://sruthi070309.github.io/campus-study-room-booking/" },
      { label: "Code", url: "https://github.com/Sruthi070309/campus-study-room-booking" },
    ],
    bg: "#DADDE3", fg: "#111111", mark: "Study Rooms", shape: "grid",
  },
  {
    id: "api", title: "Job Tracker REST API", category: "Backend and APIs", year: "2026", size: "third",
    desc: "Full create, read, update and delete for job applications, stored in MongoDB Atlas with Mongoose and tested in Postman.",
    tools: ["Node.js", "Express", "MongoDB Atlas", "Mongoose"], links: [],
    bg: "#1D2B3A", fg: "#E8EEF4", mark: "REST API", shape: "dots",
  },
  {
    id: "tourytale", title: "TouryTale", category: "Web Development", year: "2024", size: "third",
    desc: "A responsive tour guide portal with travel tips, local highlights and a dynamic interface.",
    tools: ["HTML", "CSS", "Bootstrap", "JavaScript"], links: [],
    bg: "#CFE0DA", fg: "#111111", mark: "TouryTale", shape: "arc",
  },
  {
    id: "dustsponge", title: "Dust-Sponge Capsules", category: "Social Impact", year: "Startup project", size: "std",
    desc: "A low-cost, eco-friendly capsule that treats 100 L of stagnant water for 30 days, tackling mosquito control, sanitation and flood management. Pitched by a 5-member team at national-level innovation forums.",
    tools: ["Ideation", "Pitching", "Feasibility planning"], links: [],
    bg: "#2E3B2F", fg: "#E7EFE0", mark: "Dust-Sponge", shape: "wave",
  },
  {
    id: "ngts", title: "Multi-service web platform", category: "Internship Work", year: "2025", size: "wide",
    desc: "Internship project at NGTS IT Solutions: a real-time platform integrating education, matrimony and travel services, built on the Liferay framework.",
    tools: ["jQuery", "Bootstrap", "JavaScript", "Liferay"], links: [],
    bg: "#EAEAE6", fg: "#111111", mark: "NGTS", shape: "circle",
  },
];
