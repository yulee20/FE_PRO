pi = Math.PI;
height = +prompt('Input H:');
radius = +prompt('Input R:');

S = 2 * pi * radius * radius;
// console.log(S);
V = pi * radius * radius * height;
// console.log(V);

document.write('**************</br>');
document.write('Обьем цилиндра с площадью основы ', S.toFixed(2), ' радиусом ', radius, ' и высотой ', height, ' равен:</br>');
document.write('-------------------</br>');
document.write('V = ', V.toFixed(2));
document.write('</br>-------------------</br>');
document.write('end.');