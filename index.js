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
