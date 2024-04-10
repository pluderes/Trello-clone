export const uppercaseFirstLetter = (val) => {
  if (!val) return "";
  return `${val.charAt(0).toUpperCase()}${val.slice(1)}`;
};

export const sortedArray = (originalArray, conditionArray, key) => {
  if (!originalArray || !conditionArray || !key) {
    return [];
  } else {
    const cloneOrgArr = [...originalArray];
    const result = cloneOrgArr.sort((a, b) => {
      return conditionArray.indexOf(a[key]) - conditionArray.indexOf(b[key]);
    });
    return result;
  }
};
