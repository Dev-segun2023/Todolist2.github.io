let todoList = JSON.parse(localStorage.getItem('todoList')) ||
[{
  task: 'clean the house',  
  date:'2023-10-01',
},{
  task: 'buy groceries',
  date:'2023-10-02',
}];

function render() {
  let todoHTML = '';
  todoList.forEach((todo, index)=>{
    const {task, date} = todo;

    const todohtml = `
    <div class="js-wrapper">
    <div class="task js-input-css">${task}</div>
    <div class="date js-date-css">${date}</div>
    <button class="js-delete-btn js-del-css">
    Delete
    </button>
    </div>
    `
    todoHTML += todohtml;
  })

  document.querySelector('.todolist').innerHTML = todoHTML;

  const deleteButtons = document.querySelectorAll('.js-delete-btn');
  deleteButtons.forEach((button, index)=>{
button.addEventListener('click',()=>{
  todoList.splice(index, 1);
  render()
})
  })

  localStorage.setItem('todoList',JSON.stringify(todoList))
}

render();

function updateTodo() {
  const inputElement = document.querySelector('.inputElement');
  const task = inputElement.value;
  const dueDate = document.querySelector('.dueDate')
  const date = dueDate.value;
  if(date < new Date().toISOString().split('T')[0]){
    alert('Please select a valid date!')
    return;
  }

  if (!task || !date) {
    alert('Please fill in all fields!');
    return;
  }
  inputElement.value = ''; 
  console.log('todoText')

  todoList.push({task,date})
  render();
}

document.querySelector('.btn').addEventListener('click', ()=>{
  updateTodo();
})