// ===============================
// 📬 CONTACT FORM INTERACTIVITY
// ===============================

// STEP 1: Grab the HTML element
const contactForm = document.getElementById("contact-form");

// STEP 2: Define the function
function handleContactSubmit(event) {
event.preventDefault();

const name = document.getElementById("name").value;

alert(`Thanks for reaching out, ${name}! I’ll get back to you soon.`);
contactForm.reset();
}

// STEP 3: Set up the event listener
contactForm.addEventListener("submit", handleContactSubmit);
