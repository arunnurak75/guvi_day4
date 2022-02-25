//Task 3: Simple Programs todo for Condition , Looping and Arrays
//Write a loop that makes seven calls to console.log to output the following triangle:
let n = 7;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    string += "#";
  }
  string += "\n";
}
console.log(string);

//Iterate through the string array and print it contents
var string= ["Jazz","Blues","New Age","Classical","Opera"]
console.log(... string)

//write a code to count the elements in the array . Don’t use length property
var myarray=[11,22,33,44,55]
myarray.map((e) => {
console.log(e)
})

//Starting from the existing friends variable below, change the element that is currently “Mari” to “Munnabai”.
let friend = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"];
function dataHandling(input){
  input.splice(0, 1, "Munnabai");
console.log(input)
    }
    dataHandling(friend);