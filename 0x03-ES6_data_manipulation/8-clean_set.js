export default function cleanSet(set, startString) {
  let str = '';
  for (const item of set) {
    if (item.startsWith(startString)) {
      const strSlice = item.slice(startString.length);
      if (str !== '') {
        /* Add hyphen only if it's not the first item, By adding the hyphen
before the item (and only when str is not empty) */
        str += '-';
      }
      str += strSlice;
    }
  }
  return str;
}
