//your JS code here. If required.
let input =prompt("Enter a String")

function f (str){
	for(let i =0;i<str.length,i++){
		const currchar = str[i];
		if(str.indexOf(currchar)=== str.lastIndexOf(currchar)){
			return currchar;
		}
	}
	return null;
}

const f1 = f(input);

if (f1) {
  console.log(`The first non-repeated character is: ${firstNonRepeatedChar}`);
} else {
  console.log("There are no non-repeated characters in the string.");
}