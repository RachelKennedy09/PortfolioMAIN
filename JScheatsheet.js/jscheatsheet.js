// 🌱 STEP 1: Grab HTML elements
const form = document.getElementById("example-form");
const button = document.getElementById("example-button");
const title = document.getElementById("page-title");

// 🧠 STEP 2: Global variables
let userName = ""; // will be filled in later
const siteName = "My Awesome Site"; // constant, doesn't change

// 🔧 STEP 3: Functions (reusable actions)
function updateTitle() {
  title.textContent = "Welcome to " + siteName;
}

function handleFormSubmit(event) {
  event.preventDefault(); // stop the page from reloading
  userName = document.getElementById("name-input").value;
  alert("Hello, " + userName + "! Your form was submitted.");
}

// 🔔 STEP 4: Event listeners (trigger functions when things happen)
button.addEventListener("click", updateTitle);
form.addEventListener("submit", handleFormSubmit)



    //HTML

//     <h1 id="page-title">Welcome!</h1>

// <form id="example-form">
//   <input type="text" id="name-input" placeholder="Enter your name" required>
//   <button type="submit">Submit</button>
// </form>

// <button id="example-button">Change Title</button>


