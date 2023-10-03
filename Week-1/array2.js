// delete element div by 2 & 3

const deleteEle = (arr) => {
    return arr.filter(val => {
        if (val % 2 === 0 || val % 3 === 0) {
            return false;
        }
        return true
    })
}

// console.log(deleteEle([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// max product of subArray

const max = (arr) => {
    let maxProduct = arr[0], minProduct = arr[0], result = arr[0];
    for (let i = 1; i < arr.length; i++) {
        let curr = arr[i];
        if (curr > 0) {
            let temp = maxProduct;
            maxProduct = minProduct;
            minProduct =  temp
        }

        maxProduct = Math.max(arr[i], )
    }
}



const oldKeyNewKey = (arr, ok, nk) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === ok) {
            arr[i] = nk
        }
    }
    return arr
}

// console.log(oldKeyNewKey([1, 2, 3, 2, 2, 9, 6], 2, 9));

// sum of 2d mattrix

const sum = (m, n, arr1, arr2) => {
    let arr = [], counter = 0;
    for (let i = 0; i < m; i++) {
        let r = []
        for (let j = 0; j < n; j++) {
            r.push(arr1[counter] + arr2[counter])
            counter++;
        }
        arr.push(r)
    }
    return arr
}

// console.log(sum(2,3,[1,2,3,4,5,6], [7,8,9,10,11,12]))

// transpose

const transpose = (m, n, arr) => {
    const res = [];
    let arr1 = arr.slice(0, n);
    let arr2 = arr.slice(n, arr.length);
    for (let i = 0; i < n; i++) {
        res.push(arr1[i]);
        res.push(arr2[i])
    }
    return res
}


console.log(transpose(2,4,[1,2,3,4,5,6, 7,8]))
