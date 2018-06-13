//Task1

n = +prompt('Input N: ');
max = 2;
min = 200;
A = [];
B = [];
flag = 0;

for (i = 0; i < n; i++){
    A[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(A[i]);
    flag = 0;
    for (j = 2; j < A[i]; j++){
        if (A[i] % j === 0){
            flag = 1;
        }
    }
    if (!flag){
        B.push(A[i]);
    }
}
console.log (A, B);

min1 = B[0];
max1 = B[0];
for(i = 1; i <= B.length; i++){
    if (B[i] > max1){
        max1 = B[i];
    }
    if (B[i] < min1){
        min1 = B[i];
    }
}
console.log('MAX: ', max1, 'MIN: ', min1);

//Task2

n = +prompt('Input N: ');
max = 2;
min = 200;
A = [];
B = [];

for (i = 0; i < n; i++){
    A[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(A[i]);
}

min1 = A[0];
max1 = A[0];
i1 = j1 =0;

for (i = 1; i <= n; i++){
    if (A[i] > max1) {
        max1 = A[i];
        i1 = i;
    }
    if (A[i] < min1){
        min1 = A[i];
        j1 = i;
    }
}
console.log('MAX: ', max1, 'MIN: ', min1);

if (i1 > j1){
    for (i = j1 + 1; i < i1; i++){
        B.push(A[i]);
    }
} else {
    for (i = i1 + 1; i < j1; i++){
        B.push(A[i]);
    }
}
console.log(B);

//Task3

n = +prompt('Input N: ');
max = 2;
min = 100;
A = [];

for (i = 0; i < n; i++){
    A[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(A[i]);
}

min1 = A[0];
max1 = A[0];
i1 = j1 =0;

for (i = 1; i <= n; i++){
    if (A[i] > max1) {
        max1 = A[i];
        i1 = i;
    }
    if (A[i] < min1){
        min1 = A[i];
        j1 = i;
    }
}

temp = A[i1];
A[i1] = A[j1];
A[j1] = temp;

console.log('MAX: ', max1, 'MIN: ', min1);
console.log(A);

//Task4

A = [1, 5, 6, 2, 4];

console.log('original: ', A);

for (i = A.length - 1; i >= 0; i--){
    console.log(A[i]);
}

//Task5

A = [8, 3, 3, 5 , 6, 11, 7, 8, 15, 8, 8, 20];

min = A[0];

for (i = 1; i < A.length; i++){
    if (A[i] < min){
        min = A[i];
    }
}

counter = 0;

for (i = 0; i <= A.length; i++){
    if (A[i] == min + 5){
        counter++;
    }
}
console.log(A);
console.log('MIN: ', min, 'Counter: ', counter);