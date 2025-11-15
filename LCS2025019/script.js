// class Tree{
//     constructor(type, age){
//         this.age = age;
//         this.type = type;
//     }

//     getFruit(){
//         if(this.type == "mango" || this.type == "apple"){
//             console.log(this.type + "fruit");

//         }
//         else{
//             console.log("no fruit");
//         }
//     }
// }

// let mangoTree =  new Tree("mango", 10);
// mangoTree.getFruit();

// class Shape{
//     constructor(s1, s2 = -1){
//         this.s1 = s1;
//         this.s2 = s2;
//     }

//     area(){
//         if(this.s2 == -1){
//             return (3.14*this.s1*this*s1);
//         }
//         else{
//             return (this.s1*this.s2);
//         }
//     }
// }

// let sq1 = new Shape(2,1);
// console.log(sq1.area());

let flag = 1;
let box = document.querySelector(".box");
let btn = document.querySelector(".btn");
const change = () =>{
    
    if(flag == 1)
    {
        box.style.backgroundColor = "blue";
        flag = 0;
    }
    else{
        box.style.backgroundColor = "red";
        flag = 1;
    }
}
btn.addEventListener("click", change);

