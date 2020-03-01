import addFunc from './addFunc';

const todolist = {
  init() {
    const addBtn = document.querySelector('#addBtn');
    const inputField = document.querySelector('#content');

    addBtn.addEventListener('click', addFunc);
    inputField.addEventListener('keyup', e => e.keyCode === 13 && addFunc());
  }
}

export default todolist;