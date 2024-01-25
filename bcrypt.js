const bcryptjs =require("bcryptjs");

//hash
const encryptPw = (string)=>{
    return bcryptjs.hashSync(string, 10)
};
const dcryptPw = encryptPw("password");

//compare
const comparePw =(string, hash)=>{
    return bcryptjs.compareSync(string,hash);
};
const isValidPw =comparePw("password", hashedPw);
console.log({isValidPw});






