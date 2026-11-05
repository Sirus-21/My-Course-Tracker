// Course names, credits, LTP and unit topics.
const courses = [
  { name: "Mathematics (MTH165)", credits: 4, ltp: "3-1-0", units: [
    { name: "Unit 1: Linear Algebra", topics: ["Review of matrices", "Elementary operations of matrices", "Rank of a matrix", "Linear dependence and independence of vectors", "Solution of linear systems", "Inverse of matrices", "Eigenvalues and eigenvectors", "Properties of eigenvalues", "Cayley-Hamilton theorem"] },
    { name: "Unit 2: Differential Calculus and its Applications", topics: ["Derivatives of standard functions and general rules", "Derivatives of parametric forms", "Derivatives of implicit functions", "Logarithmic differentiation", "Higher order derivatives", "Rolle’s theorem", "Mean Value Theorem", "Taylor and Maclaurin theorems", "Indeterminate forms", "L’Hospital’s rule", "Maxima and minima"] },
    { name: "Unit 3: Fundamentals of Integral Calculus", topics: ["General rules of integration", "Integration by substitution", "Integration by parts", "Integration by partial fractions", "Properties of definite integrals"] },
    { name: "Unit 4: Multivariate Functions", topics: ["Functions of two variables", "Limits and continuity", "Partial derivatives", "Total derivative and differentiability", "Chain rule", "Euler’s theorem for homogeneous functions", "Maxima and minima for functions of two variables", "Lagrange multiplier method"] },
    { name: "Unit 5: Multivariate Integrals", topics: ["Double integrals", "Change of order of integration", "Triple integrals", "Change of variables", "Using double integrals to calculate area and volume", "Using triple integrals to calculate volume"] }
  ]},
  { name: "Engineering Drawing (MEC136)", credits: 4, ltp: "2-2-0", units: [
    { name: "Unit 1: Introduction to Engineering Graphics", topics: ["Drawing instruments", "Line types and dimensioning", "Single stroke vertical gothic lettering", "Plain and diagonal scales", "Introduction to AutoCAD interface"] },
    { name: "Unit 2: Projection of Points and Lines", topics: ["Principles of orthographic projections", "Projection of points and lines", "AutoCAD 2D basic commands"] },
    { name: "Unit 3: Orthographic Projections", topics: ["Introduction, principles and importance", "Orthographic views", "First and third angle projection systems", "AutoCAD 2D commands"] },
    { name: "Unit 4: Sectional Views", topics: ["Introduction, principles and importance", "Full, half and offset sections", "AutoCAD 2D commands"] },
    { name: "Unit 5: Isometric Views", topics: ["Isometric projection and terminology", "Isometric scale", "Views of prisms and pyramids", "Isometric dimensioning", "3D modelling in AutoCAD"] }
  ]},
  { name: "Design Thinking (INT335)", credits: 2, ltp: "2-0-0", units: [
    { name: "Unit 1: Foundations of Learning, Creativity and Design Thinking", topics: ["Learning and creative thinking", "Focused and diffuse brain modes", "Learning frameworks and VARK model", "Functional fixedness and cognitive blocks", "History of design thinking", "Stanford d.school framework", "IDEO human-centred design", "Creativity, invention and innovation", "Global design case studies"] },
    { name: "Unit 2: Empathy, Observation and Problem Identification", topics: ["Computational empathy in software engineering", "Qualitative and quantitative research", "Field observation and AEIOU framework", "User interviews and inquiry", "Explicit and implicit user needs", "User pain points", "Personas and target archetypes", "Empathy maps and user insights"] },
    { name: "Unit 3: Ideation and Creative Problem Solving", topics: ["Convergent and divergent thinking", "Brainstorming and idea generation", "SCAMPER technique", "Organising and clustering ideas", "Feasibility and relevance analysis", "Idea screening matrices", "Mind mapping and reverse thinking"] },
    { name: "Unit 4: Product Design and Prototyping", topics: ["Prototyping and rapid learning", "Low and high fidelity prototypes", "Paper prototyping", "Idea selection and prioritisation", "Digital wireframing fundamentals", "Wireframing rules", "User flows and core features", "Storyboarding interactions", "Minimum viable product (MVP)"] },
    { name: "Unit 5: Testing, Validation and Customer Experience", topics: ["Neutral user testing", "Task scenarios and user testing", "Show, Don’t Tell approach", "Customer experience and journey mapping", "User touch points and pain points", "Software usability and navigation", "Feedback capture matrix", "Accessibility in digital products"] }
  ]},
  { name: "Orientation to Computing (CSE111)", credits: 3, ltp: "3-0-0", units: [
    { name: "Unit 1: Computational Thinking and Computing Environment", topics: ["Computational thinking", "Decomposition and pattern recognition", "Abstraction and algorithms", "Characteristics of a good algorithm", "Operating systems", "Functions and their types", "Linux file system and basic commands", "Computer networks and devices", "Hypervisors and virtual machines", "Cloud computing models"] },
    { name: "Unit 2: Software Development Practices and Cyber Security Basics", topics: ["Version control systems", "Git installation and configuration", "GitHub and its commands", "Malware types", "Phishing and social engineering", "Password security and multi-factor authentication", "Firewalls and account privileges", "Safe internet practices", "Digital footprint and cyber ethics"] },
    { name: "Unit 3: EDU-Revolution and Academic Enrichment", topics: ["Vision and objectives", "Student-centric revenue generation model", "Projects, internships and competitions", "Research, innovation and entrepreneurship", "MOOCs and certifications", "Recognition of Prior Learning", "Community projects and social media", "Academic benefits and participation process"] },
    { name: "Unit 4: Artificial Intelligence and Emerging Technologies", topics: ["Artificial intelligence and machine learning", "Types and applications of machine learning", "Generative AI and text/image tools", "Prompt engineering and ethical use", "AI agents", "Data science and big data", "IoT, blockchain and edge computing", "AR/VR and digital twins", "Robotics and quantum computing"] },
    { name: "Unit 5: Cohorts, Career Development and Professional Readiness", topics: ["Cohorts, minors and future job roles", "Career pathways", "Interests, strengths and aspirations", "Goal setting and skill-gap analysis", "Individual Development Plan", "Industry interaction and alumni stories", "Networking and workplace communication", "Leadership and career decisions"] }
  ]},
  { name: "Internet Programming (CSE326)", credits: 2, ltp: "1-0-2", units: [
    { name: "Unit 1: HTML Fundamentals", topics: ["Internet and web technologies", "Client-server architecture", "HTML5 document structure", "HTML elements, attributes and text", "Lists, links and images", "SVG graphics", "Audio, video and iframes", "SEO fundamentals"] },
    { name: "Unit 2: Semantic HTML and Forms", topics: ["Semantic HTML elements", "Page structure and layout", "Accessibility fundamentals", "Forms and controls", "Input types and attributes", "Form validation", "Tables and data", "Responsive content structure"] },
    { name: "Unit 3: Cascading Style Sheets", topics: ["CSS selectors and specificity", "Colors, backgrounds and units", "Typography", "Box model and positioning", "Flexbox", "CSS grid", "Pseudo-classes and pseudo-elements", "CSS variables", "Responsive web design", "Animations and transitions"] },
    { name: "Unit 4: JavaScript Fundamentals", topics: ["Variables and constants", "Data types", "Operators and expressions", "Strings and string methods", "Conditional statements", "Functions and scope", "Arrays and array operations", "Objects and object manipulation"] },
    { name: "Unit 5: Interactive Web Development", topics: ["Loops and higher order functions", "Callback functions", "DOM selection and manipulation", "Event handling", "Dynamic content", "Form validation with regular expressions", "Date, time and media events", "Web Storage API", "Fetch API and JSON", "Geolocation and drag-and-drop"] }
  ]},
  { name: "Python (INT108)", credits: 4, ltp: "3-0-2", units: [
    { name: "Unit 1: Setup, Variables and Statements", topics: ["Python installation and setup", "First Hello World program", "Variables and naming rules", "Values and data types", "Statements, operators and operands", "Order of operations", "String operations", "Comments and code composition"] },
    { name: "Unit 2: Conditional and Iterative Statements", topics: ["Modulus operator", "Boolean expressions and logic", "If, elif and else", "Nested conditionals", "While loops", "For loops", "Nested loops", "Random numbers in loops", "Encapsulation and generalisation"] },
    { name: "Unit 3: Strings, Lists, Tuples and Dictionaries", topics: ["Strings as compound data types", "String traversal and slicing", "String comparison and find()", "Lists: values, length and membership", "List operations and slicing", "Lists with for loops", "Nested lists", "Tuples and mutability", "Tuples as return values", "Dictionary operations and methods", "Aliasing and copying"] },
    { name: "Unit 4: Functions and Recursion", topics: ["Function calls", "Type conversion and coercion", "Math functions", "Defining new functions", "Parameters and arguments", "Recursion"] },
    { name: "Unit 5: Classes and Objects", topics: ["Creating classes", "Creating instance objects", "Accessing attributes", "Class inheritance", "Overriding methods", "Data hiding", "Function overloading"] }
  ]}
];

const courseList = document.getElementById("courseList");
const search = document.getElementById("search");
let checkedTopics = JSON.parse(localStorage.getItem("simple-course-checks") || "{}");
let topicNotes = JSON.parse(localStorage.getItem("simple-course-notes") || "{}");

function getDifficulty(number, total) {
  if (number < Math.ceil(total / 3)) return "Easy";
  if (number < Math.ceil(total * 2 / 3)) return "Moderate";
  return "Tough";
}

function showCourses() {
  courseList.innerHTML = "";
  let visibleCourses = 0;

  courses.forEach(function(course, courseNumber) {
    if (!course.name.toLowerCase().includes(search.value.toLowerCase())) return;
    visibleCourses++;

    const details = document.createElement("details");
    details.className = "course";
    const summary = document.createElement("summary");
    summary.innerHTML = course.name + " <span>L:T:P " + course.ltp + " · " + course.credits + " credits</span>";
    details.appendChild(summary);

    course.units.forEach(function(unit, unitNumber) {
      const unitTitle = document.createElement("h3");
      unitTitle.textContent = unit.name;
      unitTitle.style.margin = "12px 15px 6px";
      unitTitle.style.fontSize = "13px";
      details.appendChild(unitTitle);

      const topicArea = document.createElement("div");
      topicArea.className = "topics";
      unit.topics.forEach(function(topic, topicNumber) {
        const topicItem = document.createElement("div");
        topicItem.className = "topic-item";
        const label = document.createElement("label");
        label.className = "topic-name";
        const box = document.createElement("input");
        const key = courseNumber + "-" + unitNumber + "-" + topicNumber;
        box.type = "checkbox";
        box.checked = Boolean(checkedTopics[key]);
        box.addEventListener("change", function() {
          checkedTopics[key] = box.checked;
          localStorage.setItem("simple-course-checks", JSON.stringify(checkedTopics));
          updateProgress();
        });
        label.appendChild(box);
        label.appendChild(document.createTextNode(topic));
        topicItem.appendChild(label);

        const difficulty = document.createElement("div");
        difficulty.className = "difficulty";
        difficulty.textContent = "Difficulty: " + getDifficulty(topicNumber, unit.topics.length);
        topicItem.appendChild(difficulty);

        const note = document.createElement("textarea");
        note.className = "quick-note";
        note.placeholder = "Quick notes or formula...";
        note.setAttribute("aria-label", "Quick notes for " + topic);
        note.value = topicNotes[key] || "";
        note.addEventListener("input", function() {
          topicNotes[key] = note.value;
          localStorage.setItem("simple-course-notes", JSON.stringify(topicNotes));
        });
        topicItem.appendChild(note);
        topicArea.appendChild(topicItem);
      });
      details.appendChild(topicArea);
    });

    courseList.appendChild(details);
  });

  document.getElementById("empty").hidden = visibleCourses > 0;
}

function updateProgress() {
  let total = 0;
  let done = 0;
  courses.forEach(function(course, courseNumber) {
    course.units.forEach(function(unit, unitNumber) {
      unit.topics.forEach(function(topic, topicNumber) {
        total++;
        if (checkedTopics[courseNumber + "-" + unitNumber + "-" + topicNumber]) done++;
      });
    });
  });
  const percent = Math.round(done / total * 100);
  document.getElementById("percent").textContent = percent + "%";
  document.getElementById("count").textContent = done + " of " + total + " topics completed";
  document.getElementById("barFill").style.width = percent + "%";
}

search.addEventListener("input", showCourses);
showCourses();
updateProgress();
