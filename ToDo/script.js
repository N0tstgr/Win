// for selecting the dom element
const input = document.getElementsById('text')
const btn = document.getElementsById('submit')
const list = document.getElementsById('to-dolist')

//trying to access the todos from the local storage
const saved = localStorage.getItem('todos')
const todos = saved? JSON.parse(saved):[];

function saveTodos(){
    //save the current todo arrays to the local storage

}