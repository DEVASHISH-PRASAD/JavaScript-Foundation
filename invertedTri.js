const prompt = require("prompt-sync")();
let n = prompt("Enter any number");
for (i = 1; i <= n; i++) {
  for (j = n; j > i; j--) {
    process.stdout.write("*");
  }
  console.log("");
}
