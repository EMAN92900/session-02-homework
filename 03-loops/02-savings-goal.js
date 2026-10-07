// =============================================
// 3. LOOPS — Savings goal
// =============================================
// You want to save 100 OMR. Every month you save 15 OMR.
// Using a WHILE loop, print how much you have after each month,
// then print how many months it took.
//
// Expected output:
//   Month 1: 15 OMR
//   Month 2: 30 OMR
//   Month 3: 45 OMR
//   Month 4: 60 OMR
//   Month 5: 75 OMR
//   Month 6: 90 OMR
//   Month 7: 105 OMR
//   Goal reached in 7 months!

// your code here
const goal = 100;
const monthlySavings = 15;
let totalSavings = 0;
let month = 0;

while (totalSavings < goal) {
  month++;
  totalSavings += monthlySavings;
  console.log(`Month ${month}: ${totalSavings} OMR`);
}

console.log(`Goal reached in ${month} months!`);    