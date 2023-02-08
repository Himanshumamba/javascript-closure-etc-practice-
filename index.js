function balanceParenthesis(expr) {
  let stack = [];

  for (let i = 0; i < expr.length; i++) {
    let x = expr[i];
    console.log(x);
    if (x == '[' || x == '(' || x == '{') {
      stack.push(x);

      continue;
    }
    if (stack.length == 0) return false;
    let check;
    switch (x) {
      case ')':
        check = stack.pop();
        if (check == '{' || check == '[') return false;
        break;

      case '}':
        check = stack.pop();
        if (check == '(' || check == '[') return false;
        break;

      case ']':
        check = stack.pop();
        if (check == '(' || check == '{') return false;
        break;
    }
  }
  return stack.length == 0;
}

// Driver code
let expr = '[()]{}{[()()]()}';

// Function call
if (balanceParenthesis(expr)) console.log('Balanced ');
else console.log('Not Balanced ');

function repeatMissing(nums) {
  for (i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) console.log('repeating number', nums[i]); // repeating number
  }

  for (i = 1; i < nums.length; i++) {
    if (i !== nums[i - 1]) {
      let newArray = [];
      // let x = i;
      newArray.push(i - 1);
      console.log(newArray);
    }
  }
}

let nums = [1, 2, 2, 4, 5, 5, 7, 8, 7, 7, 9, 9, 4];
repeatMissing(nums);

function occurence(nums) {
  let flag = {};
  for (let i = 0; i < nums.length; i++) {
    const x = nums[i];
    if (flag[x]) {
      console.log(flag[x]);
      flag[x] += 1;
      console.log(flag);
    } else {
      flag[x] = 1;
    }
  }
  console.log(flag);
}

let nums = [1, 2, 2, 2, 2, 3, 4, 7, 8, 8];

occurence(nums);

function occurence(nums, count) {

  let start = 0;
  for (i of nums) {
    if (i === count) {
      start++;
    }
  }
  console.log(start);
}

let nums = [1, 2, 2, 2, 2, 3, 4, 7, 8, 8];
let count = 2;

occurence(nums, count);
buble sort
function bubbleSort(arr, n) {
  let i, j, temp;
  let swapping;
  for (i = 0; i < n - 1; i++) {
    swapping = false;
    for (
      j = 0;
      j < n - i - 1;
      j++ // one less then previous
    )
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];

        console.log('the temp ', temp);
        arr[j] = arr[j + 1];
        console.log('the temp2 ', arr[j]);
        arr[j + 1] = temp;
        console.log('the temp 3', arr[j + 1]);
        swapping = true;
      }
    if (swapping == false) break;
  }
}

function printArray(arr, size) {
  let i;
  for (i = 0; i < size; i++) {
    console.log(arr[i]);
  }
}
var arr = [64, 34, 25, 12, 22, 11, 90];
var n = arr.length;
bubbleSort(arr, n);
console.log('sorted');
printArray(arr, n);

let nameOne = [1, 3, 4, 5];

nameOne.forEach((element) => {
  console.log(element);
});

let games = ['A', 'B'];
games.forEach((element, index) => {
  console.log(element, index);
});


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
