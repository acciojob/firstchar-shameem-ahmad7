function firstChar(str) {
  // your code here
	 // Loop through each character in the string
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      return str[i];  // Return the first non-space character
    }
  }
  return '';  // Return empty string if no non-space character is found
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));
