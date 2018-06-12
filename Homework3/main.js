//Task1
//rectangle
n = 10;
m = 20;

separator = '*';
space = '&nbsp;';

document.write('<br />');
for (i = 1; i <= n; i++){
     for (j = 1; j <= m; j++){
        if (i == 1 || i == n || j == 1 || j == m){
            document.write(separator);
        } else {
            document.write(space);
        }
    }
    document.write('<br />');   
}

document.write('<br />');

//triangel 90*
a = 15;

separator = '*';
space = '&nbsp;';

document.write('<br />');

for (i = 1; i <= a; i++){
     for (j = 1; j <= a; j++){
      if (i == a || j == 1 || i == j){
        document.write(separator);
      } else {
          document.write(space);
        }
    }
    document.write('<br />');
}

document.write('<br />');   

//triangel a == b == c
a = 35;

separator = '*';
space = '&nbsp;';
temp1 = Math.ceil(a/2);
temp2 = Math.ceil(a/2);

document.write('<br />');
for (i = 1; i <= Math.ceil(a/2); i++){
    for (j = 1; j <= a; j++){
      if (j == temp1 || j == temp2 || i == Math.ceil(a/2)){
        document.write(separator);
      } else {
          document.write(space);
        }
    }
    temp1--;
    temp2++;    
    document.write('<br />');
}

document.write('<br />');   

//diamond
a = 20;

separator = '*';
space = '&nbsp;';
temp1 = a/2;
temp2 = a/2;

document.write('<br />');
for (i = 1; i <= a/2; i++){
    for (j = 1; j <= a; j++){
      if (j == temp1 || j == temp2){
        document.write(separator);
      } else {
          document.write(space);
        }
    }
    temp1--;
    temp2++;    
    document.write('<br />');
}

temp = a-1;

for (i = 2; i <= a/2; i++){
  for (j = 1; j <= a; j++){
    if (i == j || j == temp){
      document.write(separator);
    } else {
        document.write(space);
      }
  }
  temp--;
  document.write('<br />');
}
document.write('<br />');   

//Task2

// num = prompt();

// flag = !isNaN(parseInt(num));
// if (flag){
//     for (i = num.length - 1; i >= 0; i-- ){
//         document.write(num[i]);
//         //console.log(num[i]);
//     }
// } else document.write('not a number');

//Task3

// num = prompt();
// max = 0;

// for (i = 0; i <= num.length; i++){
//     if(num[i+1] < num[i]){
//         max = num[i];
//     }
// }
// document.write('max: ', max);

//Task4

// min = 0;
// max = 20;

// num = Math.floor(Math.random() * (max - min + 1)) + min;
// console.log('num: ', num);

// temp = +prompt('Input the number');
// console.log('temp: ', temp);

// if ((temp > num + 4) || (temp < num - 4)){
//   alert( 'Cold' );
// } else
// if (((temp >= num - 4) && (temp < num - 2)) || ((temp > num + 2) && (temp <= num + 4))){
//     alert( 'Warm' );
// } else
// if (((temp >= num - 2) && (temp <= num - 1)) || ((temp >= num + 1) && (temp <= num + 2))){
//   alert( 'Cool, too close' );
// } else
// if (temp == num){
//   alert('You are the winner!');
// }