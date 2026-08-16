/* ============================================================
   Chinook Theatre — Contact page  |  STARTER
   CPRG 213 — Web Development 1

   YOUR NAME: Jahnavi Patel
   ============================================================ */

//  STEP 1: Declare variables //
let retaePerNight = 25;
let nightsSelected = 0;

const nightList = document.querySelectorAll(".day-selector li");
const generalButton = document.getElementById("general");
const vipButton = document.getElementById("vip");
const clearButton = document.getElementById("clear-button");
const totalCost = document.getElementById("total-cost");


//  STEP 2: a function that shows the total //
function calculateTotal() {
   totalCost.innerHTML = nightsSelected * ratePerNight;
}


// ---------- STEP 3: make each night clickable ---------- //
nightList.forEach(function (night) {
   night.addEventListener("click", function () {
      if (night.classList.contains("clicked")) {
         night.classList.remove("clicked");
         nightsSelected = nightsSelected -1;
      } else {
         night.classList.add("clicked");
         nightsSelected = nightsSelected + 1;
      }
      calculateTotal();
   });
});



// STEP 4: the clear button //
clearButton.addEventListener("click", function () {
   nightList.forEach(function (night) {
   });
   nightsSelected = 0;
   calculateTotal();
});



// STEP 5: choose the rate (General / VIP) //
generalButton.addEventListener("click", function () {
   ratePerNight = 25;
   generalButton.classList.add("clicked");
   vipButton.classList.remove("clicked");
   calculateTotal();
});

vipButton.addEventListener("click", function () {
   ratePerNught = 50;
   vipButton.classList.add("clicked");
   generalButton.classList.remove("clicked");
   calculateTotal();
});


