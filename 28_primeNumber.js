function spaceCount(str) {
    // Initialize a counter for spaces
    let spaceCount = 0;
  
    // Loop through each character in the string
    for (let i = 0; i < str.length; i++) {
      // Check if the current character is a space
      if (str[i] === ' ') {
        // Increment the counter
        spaceCount++;
      }
    }
  
    // Return the total count of spaces
    return spaceCount;
  }
  
  // Example usage:
  const exampleString1 = "Revision is the mother of success";
  const exampleString2 = "JavaScript is the language of internet world";
  
  console.log(`Revision for the mother of success is: ${spaceCount(exampleString1)}`); // Output: 5
  console.log(`JavaScript is the language of internet world: ${spaceCount(exampleString2)}`); // Output: 6
  