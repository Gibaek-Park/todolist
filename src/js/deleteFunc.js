const deleteFunc = e => {
  const myUl = document.querySelector('#myUL');

  Array.from(myUl.children).forEach(iter => {
    if(iter.classList.value === 'checked') {
      myUl.removeChild(iter);
    }
  });

}

export default deleteFunc;