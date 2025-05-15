// let dateobj = Date();
// console.log(dateobj)
// let i=0;
// let intv = setInterval(function(){
//     console.log(i);
//     i++;
// },1000)

// clearInterval(intv)

// setTimeout(function(){
//     alert
// })
// let dateobj = Date.now();
//  console.log(dateobj)







// const textarea = document.getElementById("textarea")
// const addtodo = document.getElementById("addtodo")
// const todocontainer = document.getElementsByClassName("todocontainer")[0];
// addtodo.addEventListener("click",function(){
//     const todotext = textarea.Value;
//     const todoitem = document.createElement("li");
    
//     const tododiv = document.createElement("div");
//     tododiv.innerText = todotext;
//     tododiv.style.display = "inline";
//     // todocontainer.append(tododiv);
//     const deletebtn =document.createElement("button");
//     deletebtn.innerText ="delete";
//     deletebtn.style.backgroundColor = "red";
    
//     deletebtn.addEventListener("click", function(){
//         deletebtn.parentElement.remove();
//     })
//     todoitem.appendChild(tododiv);
//     todoitem.appendChild(deletebtn);

//     todocontainer.appendChild(todoitem)
//     textarea.value = "";
    
// })
const textarea = document.getElementById("textarea");
const addtodo = document.getElementById("addtodo");
const todocontainer = document.getElementsByClassName("todocontainer")[0];

addtodo.addEventListener("click", function () {
    const todotext = textarea.value.trim();
    if (todotext === "") return; // Prevent empty todos

    const todoitem = document.createElement("li");

    // Generate random color
    const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    todoitem.style.backgroundColor = randomColor;
    todoitem.style.padding = "10px";
    todoitem.style.margin = "5px 0";
    todoitem.style.listStyle = "none";
    todoitem.style.borderRadius = "5px";

    const tododiv = document.createElement("div");
    tododiv.innerText = todotext;
    tododiv.style.display = "inline-block";
    tododiv.style.marginRight = "10px";

    const deletebtn = document.createElement("button");
    deletebtn.innerText = "Delete";
    deletebtn.style.backgroundColor = "red";
    deletebtn.style.color = "white";
    deletebtn.style.border = "none";
    deletebtn.style.padding = "5px 10px";
    deletebtn.style.cursor = "pointer";
    deletebtn.style.borderRadius = "3px";

    deletebtn.addEventListener("click", function () {
        todoitem.remove();
    });

    todoitem.appendChild(tododiv);
    todoitem.appendChild(deletebtn);

    todocontainer.appendChild(todoitem);

    textarea.value = ""; // Clear input after adding
});
