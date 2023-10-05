function lowerCaseWords(inputArray) {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(inputArray)) {
        reject("There is not a word an array");
        return;
      }
      const filterLowercase = inputArray
        .filter((item) => typeof item === "string")
        .map((word) => word.toLowerCase());
  
      if (filterLowercase.length === 0) {
        reject("No valid words found in the input array");
      } else {
        resolve(filterLowercase);
      }
    });
  }
  
  const mixedArray = [41, "Hob","Joe", "WORLD", 3.14, "JavaScript", true, "ES6","APPLE"];
  lowerCaseWords(mixedArray)
    .then((result) => {
      console.log("Number of words filtered:", result);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  