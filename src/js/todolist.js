import addFunc from './addFunc';
import deleteFunc from './deleteFunc';

const todolist = {
  init() {
    const addBtn = document.querySelector('#addBtn');
    const deleteBtn = document.querySelector('#deleteBtn');
    const inputField = document.querySelector('#content');

    addBtn.addEventListener('click', addFunc);
    deleteBtn.addEventListener('click', deleteFunc);
    inputField.addEventListener('keyup', e => e.keyCode === 13 && addFunc());
    this.todos();
  },

  todos() {
    const myUl = document.querySelector('#myUL');
    
    myUl.addEventListener('click', e => {
      const target = e.target;
      if(target.nodeType === 1 && target.tagName === 'LI') {
        target.classList.toggle('checked');
      }
    })
    
  }
}

export default todolist;