document.getElementById('nimi').innerHTML = '<td> Kristian </td>';
document.getElementById('sukunimi').innerHTML = '<td> Husso </td>';
document.getElementById('nikki').innerHTML = '<td> krisu </td>';
document.getElementById('osoite').innerHTML = '<td> lehmuspolku </td>';


const todolist = document.querySelector('tr');
const uus = document.createElement('th');
uus.textContent = "Puhelinnumero";

todolist.appendChild(uus);

const lisaapuh = document.getElementById('uus');
const uuspuh = document.createElement('td');
uuspuh.textContent = "040137737";
lisaapuh.appendChild(uuspuh);

var row = document.getElementById('uus');
row.deleteCell(2);
var k = document.getElementById('1');
k.deleteCell(2);