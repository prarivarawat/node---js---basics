//write a function that takes two parameters (userRole,roles)
//return true or false based on the role check
//eg:
const userRole =["admin",'vendor'];
const role = ["vendor",'inventoryManager',"receptionist"]
const checkRole =(userRole,role)=>{
    const check =role.map((role)=>userRole.includes(role));
    if (check.includes(true)) return true;
    return false;
};
const check = checkRole(userRole,role);
console.log(check);

//write a nodejs application to encrypt the password using
//package called bcrypt
const bcrypt = require('bcryptjs');
const password ='pass123';