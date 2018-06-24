// A = [1, 2, 3, 4, 5];
// for (i = 0; i < A.length; i++){
//     document.write(A[i], '_');
// }

// A = [6, 7, 2, 3, 5, 7];
// document.write('<ul>');
// for (i = 0; i < A.length; i++){
//     document.write('<li>' + A[i] + '</li>');
// }
// document.write('</ul>');

// A = [5, 6, 43, 3, 436, 7, 87, 76, 45, 3];
// console.log (A);
// element = A.splice((A.length)/2, 1); 
// console.log ('Deleted element: ', element);
// console.log (A); 

// //a[i][j]
// //Task1

// n = 5;
// m = 5;

// min = -42;
// max = 38;

// var arr = new Array(n);
// for (i = 0; i < arr.length; i++){
//     arr[i] = new Array(m);

//     for (j = 0; j < arr[i].length; j++){
//         arr[i][j] = Math.floor(Math.random() * (max - min + 1)) + min;
//     }
// }

// for (i = 0; i < arr.length; i++){
//     for (j = 0; j < arr[i].length; j++){
//         document.write(arr[i][j] + ' ');
//     }
//     document.write('<br />');
// }
// min = arr[0][0];
// for (i = 0; i < arr.length; i++){
//     for (j = 0; j < arr[i].length; j++){
//         if (arr[i][j] < min){
//             min = arr[i][j];
//             i1 = i;
//             j1 = j;
//         }
//     }
    
// }
// temp = arr[0][0];
// arr[0][0] = min;
// arr[i1][j1] = temp;

// document.write('<br />');

// document.write('min: ', min);

// document.write('<br />');

// for (i = 0; i < arr.length; i++){
//     for (j = 0; j < arr[i].length; j++){
//         document.write(arr[i][j] + ' ');
//     }
//     document.write('<br />');
// }

// //Task2
// n = 10;
// A = [];
// max = 10;
// min = 200;

// for (i = 0; i < A.length; i++){
//     A[i] = Math.floor(Math.random() * (max - min + 1)) + min;
// }
// min1 = A[0];
// for (i = 0; i < A.length; i = i + 2){
//     if (A[i] < min1){
//         min1 = A[i];
//     }
//     console.log(A[i]);
// }

// console.log('min = ', min1);

n = 20;
m = 20;
k = 13;
r =9;

min = 0;
max = 200;
center = Math.ceil(n/2) - 1;
var arr = new Array(n);
for (i = 0; i < arr.length; i++){
    arr[i] = new Array(m);

    for (j = 0; j < arr[i].length; j++){
        //arr[i][j] = Math.floor(Math.random() * (max - min + 1)) + min;

        //expression = i <= j && i <= center; //A
        //expression = i <= j && i >= center && i <= k; //B
        //expression = i >= j && i >= center/2 && i <= center + center/2 + 1 && i + j <= n; //C
        //expression = (i <= j && i + j <= n -1) || (i >= j && i + j >= n-1) //D
        expression = Math.pow(i - center, 2) + Math.pow(j - center, 2) <= r*r;

        if(expression){
            arr[i][j] = '1 ';
        } else {
            arr[i][j] = '0 ';
        }
        document.write(arr[i][j]);
    }
    document.write('<br />');
}