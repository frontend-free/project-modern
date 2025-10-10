function isEqual(data1, data2) {
  // Check for null, undefined, empty string, and empty array equivalence
  const normalize = (value) => {
    if (
      value === null ||
      value === undefined ||
      value === '' ||
      (Array.isArray(value) && value.length === 0)
    ) {
      return 'nullish';
    }
    return value;
  };

  data1 = normalize(data1);
  data2 = normalize(data2);

  // Base cases: both are nullish or primitives and equal
  if (data1 === data2) return true;
  if (typeof data1 !== 'object' || typeof data2 !== 'object') return false;

  // Check if both are arrays
  if (Array.isArray(data1) && Array.isArray(data2)) {
    if (data1.length !== data2.length) return false;
    for (let i = 0; i < data1.length; i++) {
      if (!isEqual(data1[i], data2[i])) return false;
    }
    return true;
  }

  // Check if both are objects
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  if (keys1.length !== keys2.length) return false;
  for (const key of keys1) {
    if (!isEqual(data1[key], data2[key])) return false;
  }
  return true;
}

export { isEqual };
