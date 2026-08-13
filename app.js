/* ============================================================
   Chinook Theatre — Ticket Cost Calculator  |  STARTER
   CPRG 213 — Web Development 1

   YOUR NAME: Jahnavi Patel

   ============================================================ */

//Element References
const ticketType = document.getElementyById("ticket-type");
const quantityInput = document.getElemntById("quantity");
const calculateButton = document.getElementById("calculate-button");
const resultDiv = document.getElementById("result");


/* ---------- Pricing rules (provided for you) ---------- */
const GROUP_SIZE     = 10;    // 10+ tickets qualifies for the group discount
const GROUP_DISCOUNT = 0.10;  // 10% off the subtotal
const BOOKING_FEE    = 2.50;  // flat fee, once per order


function calculateTotal(){
   const price = Number(ticketType.value);
   const quantity = parseInt(quantityInput.value);

   //Input Validation: Ensure quantity is entered and at least 1
   if (isNaN(quantity) || quantity <1) {
      showError("please enter a valid quantity of at least 1 ticket.");
      return;
   }

   //Perform Calculations
   const subtotal = price * quantity;
   let discount = 0;

   //Apply 10% group discount for 10 or more ticketType
   if (quantity >= GROUP_SIZE) {
     discount = subtotal * GROUP_DISCOUNT;
   }

   const total = subtotal - discount + BOOKING_FEE;

   resultDiv.className = "";
   resultDiv.style.display = "block";

  let output =`
    <p>Subtotal: $${subtotal.toFixed(2)}</p>
   `;
    

   if (discount > 0) {
      output += `<p>Group Discount: -$${discount.toFixed(2)}</p>`;
   }

   output +=`
     <p>Booking Fee: $${BOOKING_FEE.toFixed(2)}</p>
     <p><strong>Total: $${total.toFixed(2)}</strong></p>
   `;
   

   resultDiv.innerHTML = output;
}

   function showError(message){
   resultDiv.className = "error";
   resultDiv.style.display = "block";
   resultDiv.textContent = message;
   }

calculateButton.addEventListener("click", calculateTotal);