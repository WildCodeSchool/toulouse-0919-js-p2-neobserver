function getFlattenArrayFromObject(myObject) {
  if (myObject) {
    const finalArray = Object.keys(myObject).map(date => {
      return myObject[date];
    });
    function flattenMap(carry, current) {
      carry = [...carry, ...current];
      return carry;
    }
    const flattenArray = finalArray.reduce(flattenMap, []);
    return flattenArray;
  }
}

function getFlattenArrayLength(myObject) {
  if (myObject) {
    const finalArray = Object.keys(myObject).map(date => {
      return myObject[date];
    });
    function flattenMap(carry, current) {
      carry = [...carry, ...current];
      return carry;
    }
    const flattenArray = finalArray.reduce(flattenMap, []);
    return flattenArray.length;
  }
}
export { getFlattenArrayFromObject, getFlattenArrayLength };
