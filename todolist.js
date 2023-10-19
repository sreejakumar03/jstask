let button = document.getElementById('add')

let todoList = document.getElementById('todoList') 
let input = document.getElementById('input')



let todo = []

 button.addEventListener('click', ()=>{

todo.push(input.value)

console.log(todo)


addtodo(input.value)

input.value=''
 })

function addtodo (todo){



let para = document.createElement('p')

para.innerText = todo

todoList.appendChild(para) 
para.addEventListener('click', ()=>{

todoList.removeChild(para)

remove(todo)



})



}



function remove(todo){



let index = todo.indexOf(todo)

if(index>-1)

todo.splice(index, 1)



}