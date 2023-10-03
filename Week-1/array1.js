// length of an array

const length = (arr) => {
  if (!arr) return 0;
  return arr.length;
};

// console.log(length([1, 2, 3, 4, 5]))

// first non duplicate

const nonDuplicate = (arr) => {
  if (!arr) return;
  let obj = {};
  arr.forEach((val) => {
    let freq = obj[val];
    if (freq) {
      obj[val] = freq + 1;
    } else {
      obj[val] = 1;
    }
  });
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] === 1) {
      return arr[i];
    }
  }
};

// console.log(nonDuplicate([-1,-1,-2,-2,-3]));

// sum of max and min

const maxMinSum = (arr) => {
  if (!arr) return;
  let max = -Infinity,
    min = Infinity;
  arr.forEach((val) => {
    if (val > max) {
      max = val;
    }
    if (val < min) {
      min = val;
    }
  });

  return max + min;
};

// console.log(maxMinSum([-10, 0, 100, -50, 20]));

// intersaction

const intersaction = (arr1, arr2) => {
  const set = new Set(arr1);
  let arr3 = [];
  arr2.forEach((val) => {
    if (set.has(val)) {
      arr3.push(val);
      set.delete(val);
    }
  });

  return arr3;
};

// console.log(intersaction([1, 2, 3, 4, 5, 6], [4, 5, 6, 7, 8]));

// pair sum

const pairSum = (arr, k) => {
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let sum = 0;
            sum = arr[i]+arr[j];
            if (sum === k) {
                arr2.push([arr[i], arr[j]])
            }
        }
    }

    return arr2
}

// console.log(pairSum([1,2,3,4,5], 6))


