export default function cleanSet(set, startString) {
  let str = '';

  if (startString === '') {
    return '';
  }
  for (const item of set) {
    if (set instanceof Set && typeof startString === 'string') {
      if (item && item.startsWith(startString)) {
        const strSlice = item.slice(startString.length);
        if (str !== '') {
          /* Add hyphen only if it's not the first item, By adding the hyphen
before the item (and only when str is not empty) */
          str += '-';
        }
        str += strSlice;
      }
    }
  }

  return str;
}
