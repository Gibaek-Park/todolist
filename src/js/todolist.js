import addFunc from './addFunc';

const todolist = {
  init() {
    const addBtn = document.querySelector('#addBtn');
    const inputField = document.querySelector('#content');

    addBtn.addEventListener('click', addFunc);
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

    myUl.addEventListener('dblclick', e => {
      const target = e.target;
      if (target.nodeType === 1 && target.tagName === 'LI') {
        target.parentNode.removeChild(target);
      }
    })
  }
}

export default todolist;