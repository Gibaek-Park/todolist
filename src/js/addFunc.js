import { inputField } from './inputField';

const addFunc = () => {
  const myUl = document.querySelector('#myUL');

  const text = inputField.getInputFieldText();

  if( text !== '' ) {
    inputField.resetInputFieldText();

    const li = document.createElement('li');
    li.innerHTML = text;
    myUl.appendChild(li);
    inputField.value = '';
  }
};

export default addFunc;