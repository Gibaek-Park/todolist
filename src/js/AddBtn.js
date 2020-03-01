import { inputField } from './inputField';

export const AddBtn = () => {
  const myUl = document.querySelector('#myUL');

  const text = inputField.getInputFieldText();
  inputField.resetInputFieldText();

  const li = document.createElement('li');
  li.innerHTML = text;
  myUl.appendChild(li);
  inputField.value = '';
};