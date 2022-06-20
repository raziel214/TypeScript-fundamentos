"use strict";
console.log('Hola TypeScript con Platzi');
// Number
// Explicito
let phone;
phone = 1;
phone = 54234567;
// phone = 'hola'; // Error
// Inferido
let phoneNumber = 54234567;
phoneNumber = 123;
// phoneNumber = true; // Error por tipo
let hex = 0xf00d;
let binary = 0b1010;
let octal = 0o744;
// Tipo: Boolean
// Tipado Explicito
let isPro;
isPro = true;
// isPro = 1;
// Inferido
let isUserPro = false;
isUserPro = true;
// isUserPro = 10; // Error!
// Strings
let username = 'luixaviles';
username = "Luis";
// username = true; // Error: tipo string
// Template String
// Uso de back-tick `
let userInfo;
userInfo = `
    User Info:'start'
    username: ${username}
    firstName: ${username + ' Aviles'}
    phone: ${phone}
    isPro: ${isPro}
`;
console.log('userInfo', userInfo);
