export default function appendToEachArrayValue(array, appendString) {
  const arrayx = [];
for (const idx of array) {
    const value = idx;
    arrayx.push(appendString + value);
  }

  return arrayx;
}
