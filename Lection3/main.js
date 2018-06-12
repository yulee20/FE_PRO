//Task1

// a = 1; //+prompt('Input a: ');
// b = 15; //+prompt('Input b: ');

// odd = '';
// even = '';

// for ( i = a; i <= b; i++ ){
//     if ( i % 2 == 0){
//         odd += i + ' '; 
//         //console.log(i);
//     } else{
//         even += i + ' ';
//        //console.log(i);
//     }
// } 
// document.write('<table border = "1">');
// document.write('<tr>');
// document.write('<th>', 'even: ','</th>')
// document.write('<td>', even, '</td>');
// document.write('</tr>');

// document.write('<tr>');
// document.write('<th>', 'odd: ','</th>');
// document.write('<td>', odd, '</td>');
// document.write('</tr>');
// document.write('</table>');

//Task2

// do{
//     x = +prompt('Input x: ');
//     y = +prompt('Input y: ');
// } while (isNaN(x) || isNaN(y));
// odd = 0;
// if ( x <= y){
//     for ( i = x; i <= y; i++){
//         if (i % 2 != 0){
//             odd += i; 
//             console.log(i);
//         }
//     }
//     document.write('summa = ', odd);
// } else {
//     even = 0;
//     for ( i = x; i >= y; i--){
//         if ( i % 2 == 0){
//             even += i;
//             console.log(i);
//         }
//     }
//     document.write('summa = ', even);
// }

//Task3

// do{
//      a = +prompt('Input a: ');
//      b = +prompt('Input b: ');
// } while (isNaN(a) || isNaN(b));

//     for ( i = a; i <= b; i++ ){
//         if ( i >= 0){ 
//             document.write(i*i, ' ');
//             console.log(i);
//         }
//         else {
//             document.write(-i*i, ' ');
//             console.log(i);
//         }
//     }

//Task4

// do{
//     x = +prompt('Input x: ');
//     y = +prompt('Input y: ');
//     data = +prompt('Input data: ');
// } while (isNaN(x) || isNaN(y) || isNaN(data));

// for( i = data - 5; i <= data + 5; i++){
//     document.write(i, ' ');
// }

// for ( i = x; x <= y; i++){
//     if (i >= data -5 && i <= data + 5)
//         console.log(i);
// }

//Task5
//1

n = 10;
m = 10;

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

//2
// n = 7;
// m = 15;

full = line = '';

for( i = 1; i <= m; i++){
    full += separator;

    if (i == 1 || i == m){
        line += separator;
    }
    else {
        line += space;
    }
}

document.write(full + "<br /");
for (i = 2; i <= n; i++){
    document.write(line + "<br />");
}
document.write(full + "<br />");