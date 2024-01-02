export default function appendToEachArrayValue(array, appendString) {
	const res = []
	for (let idx of array) {
	  res.push(appendString + idx)
	}

	return res;
  }