
// is Leap year

const isLeapYear = (year) => {
    if (!year) return false;

    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
}

// console.log(isLeapYear(2009))

// Is Pallindrome ?

const Pallindrome = (val) => {
    if (!val) return;
    val = JSON.stringify(val);

    let i = 0, j = val.length - 1;
    while (i <= j) {
        if (val[i] !== val[j]) {
            return false
        }
        i++;
        j--;
    }

    return true
}


// console.log(Pallindrome(112111))

const evenOdd = (num) => {
    if (typeof num !== 'number') return;

    return num % 2 === 0 ? 'Even' : 'Odd'
}

// console.log(evenOdd(6))

// lcm hcf

const lcmHcf = (a, b) => {
    function hcf(a, b) {
      if (a == 0) return b;
      return hcf(b % a, a);
    }

    let r1 = hcf(a, b)
    let r2 = (a * b) / r1;
    return r1 * r2;
}


// console.log(lcmHcf(15,25))

// reverse

const reverse = (num) => {
    let result = 0;

    while (num > 0) {
      rightmost = num % 10;
      result = result * 10 + rightmost;
      num = Math.floor(num / 10);
    }

    return result;
}

// console.log(reverse(100))