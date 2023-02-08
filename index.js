const mergeList = function (l1, l2) {
  if (l1 === null) {
    return l1;
  }
  if (l2 === null) {
    return l2;
  }

  if (l1.val > l2.val) {
    l2.next = mergeList(l1.next, l2);
  } else {
    l2.next = mergeList(l1, l2.next);
  }
};

const searchInsert = (nums, target) => {
  let l = 0,
    r = nums.length - 1;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    l = nums[mid] < target ? mid + 1 : l;
    r = nums[mid] > target ? mid - 1 : r;
    if (nums[mid] === target) return mid;
  }
  return l;
};

let nums = [1, 3, 5, 6];
let target = 5;
searchInsert(nums);

var plusOne = function () {
  let digits = [1, 2, 3];
  for (let i = digits.length - 1; i >= 0; i--) {
    // Increment the current digit by 1
    digits[i]++;
    console.log(digits);

    // If the current digit is not equal to 10
    // return the array of digits
    if (digits[i] !== 10) {
      return digits;
    }

    // If the current digit is equal to 10, set the
    // digit to 0 and carry over the 1 to the next digit
    digits[i] = 0;
  }

  // If all digits are 0 after carrying, create a new
  // array with an additional element to store the carry
  return [1, ...digits];
};

plusOne();

var reverseList = function (head) {
  let prev = null,
    next = null;

  while (head) {
    next = head.next;
    console.log(next);
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
};
let head = [1, 2, 3, 4, 5];
reverseList(head);
