/** product: calculate the product of an array of numbers. */

function product(nums) {
	// Base case (empty array = multiply by one)
	if (nums.length === 0) return 1;

	// Normal case
	return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

/**
 * Get the length of the word
 * If the array is empty, return 0
 * Compare length to the length of the next word. If it's longer, return it
 */

//  longest(["hello", "hi", "hola"])

function longest(words) {
	// Base case
	if (words.length === 0) return 0;

	// Normal case
	let length = words[0].length;
	return length > longest(words.slice(1)) ? length : longest(words.slice(1));
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
	// Base case: when string is empty, return blank string
	if (str.length === 0) return "";

	// Normal case: add first element in string to output and recursively call function on every other letter
	return (str[0] += everyOther(str.slice(2)));
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
	//Base case
	if (str.length === 0 || str.length === 1) return true;

	// Normal case
	if (str[0] === str[str.length - 1]) {
		return isPalindrome(str.slice(1, str.length - 1));
	} else {
		return false;
	}
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
	// Base case
	if (arr.length === idx) return -1;

	// Normal case: if the value is found, return index. Each time it's not found, increase index by one and run again
	if (arr[idx] === val) {
		return idx;
	} else {
		return findIndex(arr, val, idx + 1);
	}
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx = str.length - 1) {
	// Base case
	if (idx < 0) return "";

	// Normal case
	return str[idx] + revString(str, idx - 1);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
	// Base case
	if (!obj) return;

	// Normal case
	let res = [];
	for (let property in obj) {
		if (typeof obj[property] === "object") {
			res.push(...gatherStrings(obj[property]));
		} else if (typeof obj[property] === "string") {
			res.push(obj[property]);
		}
	}
	return res;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {}

module.exports = {
	product,
	longest,
	everyOther,
	isPalindrome,
	findIndex,
	revString,
	gatherStrings,
	binarySearch
};
