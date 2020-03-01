export const inputField = (function () {
  const inputField = document.querySelector('#content');

  return {
    getInputFieldText: function () {
      return inputField.value;
    },
    resetInputFieldText: function () {
      inputField.value = '';
    }
  }
})()