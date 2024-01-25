//create your own module (library)
//1. write  a function
//2. export that function out of the file
//3. required that file in the srever file

//const getHello =()=>{
 //   console.log("Hello From Library");
//}
//const getNamaste = (name)=>{
  //  console.log(`Namaste ${name}`);
//};
//module.exports ={getHello, getNamaste};


add =(a=2,b=3)=>{
    return a+b;
}
multiply=(a=1,b=2)=>{
    return a*b;
};
module.exports={add,multiply};
