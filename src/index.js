import { AddBtn as addFunc } from './js/AddBtn';

const addBtn = document.querySelector('#addBtn');
const inputField = document.querySelector('#content');

addBtn.addEventListener('click', addFunc);
inputField.addEventListener('keyup', e => e.keyCode === 13 && addFunc());