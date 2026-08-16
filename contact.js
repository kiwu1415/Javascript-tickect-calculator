/* ============================================================
   Chinook Theatre — Contact page  |  STARTER
   CPRG 213 — Web Development 1

   YOUR NAME: Jahnavi Patel
   ============================================================ */


// STEP 1: create your variables //
const submitButton = document.getElementById("submit-button");
const contactPage = document.getElementById("contact-page");


// ---------- STEP 2: handle the click ---------- //
submitButton.addEventListener("click", function (event) {
   event.preventDefault(); // Prevents page reload
   contactPage.innerHTML = "<p> Thank you for your message!</p>";
   contactPage.style.fontSize = "24px";
});


