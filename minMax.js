//Array of integers

// function minMaxSum(arr) {
//   let max = arr[0];
//   let min = arr[0];
//   let sum = 0;

//   for (let i = 0; i < 5; i++) {
//     if (max < arr[i]) {
//       max = arr[i];
//     }
//     if (min > arr[i]) {
//       min = arr[i];
//     }
//     sum += arr[i];
//   }
//   let maxSum = sum - min;
//   let minSum = sum - max;
//   console.log(minSum + " " + maxSum);
// }
// function minMaxSum(arr) {
//     let sortarr = arr.sort();
//     let maxSum = 0;
//     let minSum = 0;
//     for (let i=0 ; i < arr.length - 1; i++ ){
//         minSum += sortarr[i];
//     }
//     for (let j=arr.length - 1; j > 0; j-- ){
//         maxSum += sortarr[j];
//     }
//     console.log(minSum + ' ' + maxSum);
// }

let arr = [1, 3, 5, 7, 9];

function minMaxSum(arr) {
  // Reduce Function of  adding accumulator and current value.
  // acc = 1,curr=3 => acc = 4
  //acc = 4, curr =5 => acc = 9
  // acc = 9, curr =7 =>acc = 16,
  //acc = 16,curr = 9 ,=> acc = 24
  const  sum = arr.reduce((acc, curr) => acc + curr);
  // 1,3       1+3 = 4
  //console.log(sum)

  const min = sum - Math.max(...arr); //1 3 5 7 9 
  //console.log(...arr)
  const max = sum - Math.min(...arr);

//   console.log(`Minimum number is ${min}`);
//   console.log(`Maximum number is ${max}`);
}

minMaxSum(arr);

// function minMaxSum(arr) {
//   const sum = arr.reduce((acc,curr) => acc + curr);
//   const maxVal = Math.max(...arr);
// //   console.log(arr);
//   const minVal = Math.min(...arr);
//   //console.log(sum);
  
//   console.log(sum - maxVal);
//   console.log(sum - minVal);
// }

// minMaxSum(arr);