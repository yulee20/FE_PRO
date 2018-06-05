//1. Fibonachchi numbers

n = +prompt('Input n:');
console.log('Fibonachi numbers: ');
fib1 = 0;
fib2 = 1;
console.log(fib1);
console.log(fib2);
for ( i = 0; i < n-2; i++ ){
    fib = fib1 + fib2;
    console.log(fib);
    fib1 = fib2;
    fib2 = fib;
}

//2. Faktorial of number

a = +prompt('Input a:');
b = +prompt('Input b:');
h = +prompt('Input h:');

sum = 0;

if (a < b){
    for ( i = a; i <= b; i = i + h ){
        f = 1;
        for ( j = 1; j <= i; j++ ){
            f = f * j;
        }
        console.log('f ( ', i , ' ) = ', f);
        sum = sum + f;    
    }
    console.log('Summa: ', sum);
} else console.log('a >= b');

//3. Table of numbers

document.write('<table  id="customers">');
document.write('<tr>');
document.write('<th>column 1</th><th>column 2</th><th>column 3</th><th>column 4</th><th>column 5</th>');
document.write('</tr>');

for (i = 0, j = 1; i <= 100; i = i + 2, j++){
    if (j === 0) {
        document.write('<tr>');
    }
    //console.log(i);
    document.write('<td>', i, '</td>');
    if (j === 5){
        j = 0;
        document.write('</tr>');
    }   
}
document.write('</table>');