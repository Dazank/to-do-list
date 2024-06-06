const button = document.querySelector('button')
let list = document.querySelector(".todo_list")

function createTask(){
    let task = prompt("Add a new task")
    if(task.length > 0){
  let newList =  document.createElement('li')
  newList.innerText = task
  list.append(newList)
  list.classList.add("liststyle")
  let closeButton = document.createElement('span')
  closeButton.innerHTML =  ' &#10060;'
  newList.append(closeButton)
  closeButton.classList.add('closebutton')
  let doneButton = document.createElement('span')
  doneButton.innerHTML =  ' &#9989;'
  newList.append(doneButton)
  doneButton.classList.add('donebutton')
  let editButton = document.createElement('span')
  editButton.innerHTML =  ' &#x1F589;'
  newList.append(editButton)
  editButton.classList.add('editbutton')
  
 
}


}

button.addEventListener('click',(e)=>{createTask()
    e.stopPropagation})

    list.addEventListener('click', (e)=>{
      let target = e.target
      let targetParent = target.parentElement
if(target.className == 'donebutton'){
targetParent.classList.add('strike')
}
else if (target.className == 'closebutton'){
  targetParent.remove()
}
else if (target.className == 'editbutton'){
  let edit = prompt('Please edit your task')
  if(edit.length >0 ){
  targetParent.innerText = edit
  targetParent.classList.add("liststyle")
  let closeButton = document.createElement('span')
  closeButton.innerHTML =  ' &#10060;'
  targetParent.append(closeButton)
  closeButton.classList.add('closebutton')
  let doneButton = document.createElement('span')
  doneButton.innerHTML =  ' &#9989;'
  targetParent.append(doneButton)
  doneButton.classList.add('donebutton')
  let editButton = document.createElement('span')
  editButton.innerHTML =  ' &#128393;'
  targetParent.append(editButton)
  editButton.classList.add('editbutton')
  



 
 
  








}
  
}


    })

   
