//Parašykite funkciją, kuri grąžina skaičiaus kvadratą. Skaičius perduodamas kaip parametras.
function square(number) {
    return Math.pow(number,2);
}
document.write(square(6));
document.write('<br>');

//Parašykite funkciją, kuri grąžina dviejų skaičių sumą.
// Skaičiai perduodami funkcijos parametrus.
function summ(a,b) {
    return (a+b);
}
document.write(summ(100,10));
document.write('<br>');
//Parašykite funkciją, kuri iš antro parametro atima pirmą ir padalija iš trečio.
function num(a,b,c) {
    return ((a-b)/c);
}
document.write(num(20,10,2));
document.write('<br>');
//Parašykite funkciją, kuri priima kaip parametrą skaičių nuo 1 iki 7,
// o grąžina savaitės dieną lietuvių kalba.
function wday(day) {
    day=day-1;
    return ["Pirmadienis", "Antradienis", "Treciadienis", "Ketvirtadienis", "Penktadienis", "Sestadienis", "Sekmadienis"][day];
}
document.write(wday(2));

