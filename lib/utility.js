exports.capitalizeFirstLetter = (string) => (
  string.split(' ').map(word => (
    word.charAt(0).toUpperCase() + word.slice(1)
  )).join(' ')
);

// filters search results between applicants, employers, and job postings
exports.filterSearchResults = (searchResults) => {
  /*
   * applicants have firstName, which is unique
   * employers have company_name, which is unique
   * jobPostings have position, which is unique
   */

  const applicants = [];
  const employers = [];
  const jobPostings = [];

  searchResults.forEach((result) => {
    if (result.firstName) {
      applicants.push(result);
    } else if (result.company_name) {
      employers.push(result);
    } else if (result.position) {
      jobPostings.push(result);
    }
  });

  return {
    applicants,
    employers,
    jobPostings,
  };
};

// sum all properties' array lengths of object
exports.sumPropsLengths = (objectOfArrays) => {
  let lengthsSum = 0;
  if (typeof objectOfArrays === 'object') {
    const arrayOfObjectValues = Object.values(objectOfArrays);
    arrayOfObjectValues.forEach((array) => {
      if (Array.isArray(array)) {
        lengthsSum += array.length;
      }
    });
  }
  return lengthsSum;
};