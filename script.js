/*Instructions
Prompt the user for several words (separated by commas).
Put the words into an array.
Console.log the words one per line, in a rectangular frame as seen below.
Check out the Hints and Requirements below.
For example, if the user gives you:
Hello, World, in, a, frame
you will transform it to : ["Hello", "World", "in", "a", "frame"]
that will get displayed as:

stars and words */

let words = prompt("Please enter several words (separated by commas)");

let tabWords = words.split(",");

function wordsBigger(words) {
  let lengthWordsBig = 0;
  for (let i = 0; i < tabWords.length; i++) {
    if (lengthWordsBig < tabWords[i].length) {
      lengthWordsBig = tabWords[i].length;
    }
  }
  return lengthWordsBig;
}
console.log("*".repeat(wordsBigger() + 4));

for (let i = 0; i < tabWords.length; i++) {
  console.log(
    "* " + tabWords[i] + " ".repeat(wordsBigger() - tabWords[i].length) + " *"
  );
}

console.log("*".repeat(wordsBigger() + 4));
