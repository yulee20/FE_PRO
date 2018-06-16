//TEST
//Task1

A = [1, 2, 3, 4, 5];
for (i = 0; i < A.length; i++){
    document.write(A[i], '_');
}

document.write('<br />');

//Task2

A = [6, 7, 2, 3, 5, 7];

document.write('<ul>');
for (i = 0; i < A.length; i++){
    document.write('<li>' + A[i] + '</li>');
}
document.write('</ul>');

document.write('<br />');

//Task3

A = [5, 6, 43, 3, 436, 7, 87, 76, 45, 3];
B = [51, 26, 3, 43, 17, 7, 76, 5, 13];

console.log (A, B);

if (!(A.length % 2)){
    element = A.splice((A.length)/2 - 1, 2); 
    console.log ('A: Deleted element: ', element);
}

if (B.length % 2){
    element = B.splice((B.length)/2, 1); 
    console.log ('B: Deleted element: ', element);
}

console.log ('A: ', A);
console.log ('B: ', B); 

//Task4

A = [1,2,3];

cell = '';
while (cell != '\&'){
    cell = prompt();
    A.push(+cell); //add to the end of array
}
A.pop();

console.log(A);

//Task5

B = [1,2,3];

cell = '';
while (cell != '\&'){
    cell = prompt();
    B.splice(0, 0, +cell); //add to the begginig of array
}
B.splice(0, 1);

console.log(B);

//END TEST

//Task1

A = [1, 2, 3, 4, 5, 6, 7];

console.log('A: ', A);

for(i = 0; i <= A.length - 1; i = i + 2){
        temp = A[i];
        A[i] = A[i + 1];
        A[i + 1] = temp; 
        if ((A.length % 2) && (A[i] == A.length - 1)){
            //console.log('no');
            break;
        } 
}

console.log('New A: ', A);

//Task2

n = 5;
m = 5;

min = 1;
max = 100;

var arr = new Array(n);

for (i = 0; i < arr.length; i++){
    arr[i] = new Array(m);

    for (j = 0; j < arr[i].length; j++){
        arr[i][j] = Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

for (i = 0; i < arr.length; i++){
    for (j = 0; j < arr[i].length; j++){
        document.write(arr[i][j] + ' ');
    }
    document.write('<br />');
}

var sum = new Array(n);

for(i = 0; i < sum.length; i++){
    sum[i] = 0;
}

document.write('<br />');

for (i = 0; i < arr.length; i++){
    for (j = 0; j < arr[i].length; j++){
        sum[i] += arr[i][j];
    }
    document.write(sum[i] + ' ');
}

document.write('<br />');

min1 = sum[0];
max1 = sum[0];
i1 = i2 = 0;

for(i = 1; i < sum.length; i++){
    if(sum[i] > max1){
        max1 = sum[i];
        i1 = i;
    }
    if(sum[i] < min1){
        min1 = sum[i];
        i2 = i;
    }
}

document.write('<br />');
document.write('max sum = ', max1, ' in row = ', i1 + 1, '<br /> min sum = ', min1, ' in row = ', i2 + 1);

for (j = 0; j < arr[i1].length; j++){
        temp = arr[i2][j];
        arr[i2][j] = arr[i1][j];
        arr[i1][j] = temp;
}

document.write('<br />' + '<br />');

for (i = 0; i < arr.length; i++){
    for (j = 0; j < arr[i].length; j++){
        document.write(arr[i][j] + ' ');
    }
    document.write('<br />');
}