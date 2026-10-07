// =============================================
// 2. CONDITIONS — Museum ticket
// =============================================
// Create variables age = 25 and isStudent = true.
// Ticket rules for the museum:
//   younger than 6                 -> free
//   60 or older, OR a student      -> 1 OMR
//   everyone else                  -> 2 OMR
// Print the ticket price. Then test with age 4, age 65 and a non-student aged 30.
//
// Expected output:
//   Ticket price: 1 OMR

// your code here
const age = 25;
const isStudent = true;

let ticketPrice;

if (age < 6) {
  ticketPrice = 0;
} else if (age >= 60 || isStudent) {
  ticketPrice = 1;
} else {
  ticketPrice = 2;
}

console.log(`Ticket price: ${ticketPrice} OMR`);