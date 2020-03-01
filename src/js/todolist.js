import addFunc from './addFunc';

const todolist = {
  init() {
    const addBtn = document.querySelector('#addBtn');
    const inputField = document.querySelector('#content');

    addBtn.addEventListener('click', addFunc);
    inputField.addEventListener('keyup', e => e.keyCode === 13 && addFunc());
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