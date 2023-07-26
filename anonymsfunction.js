//inline
let a = function() {console.log("hello");}
a();
   const add = (a,b) => a+b;
   console.log(add(3,7));

   //not inline

   let display =(c)=>  {if(c>0)
    {
        console.log(c+"is positive");
    }
else{
    console.log(c+"is negative");
}
   }
   display(-9);