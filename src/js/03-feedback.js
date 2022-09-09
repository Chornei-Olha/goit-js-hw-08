// Отслеживай на форме событие input, и каждый раз записывай в локальное хранилище объект с полями email и message,
// в которых сохраняй текущие значения полей формы. Пусть ключом для хранилища будет строка "feedback-form-state".

// При загрузке страницы проверяй состояние хранилища, и если там есть сохраненные данные,
// заполняй ими поля формы. В противном случае поля должны быть пустыми.

// При сабмите формы очищай хранилище и поля формы, а также выводи объект с полями email, message и текущими их значениями в консоль.
// Сделай так, чтобы хранилище обновлялось не чаще чем раз в 500 миллисекунд. Для этого добавь в проект и используй библиотеку lodash.throttle.

import throttle from 'lodash.throttle';

const LOCALESTORAGE_KEY = 'feedback-form-state';

let formData = {};

const refs = {
  inputFormFeedback: document.querySelector('.feedback-form'),
  inputFormEmail: document.querySelector('[type="email"]'),
  inputFormMessage: document.querySelector('[name="message"]'),
  inputFormSubmitBtn: document.querySelector('[type="submit"]'),
};

dataFromLocalStorage();

refs.inputFormFeedback.addEventListener('input', throttle(onFormData, 500));
refs.inputFormFeedback.addEventListener('submit', onSubmitForm);

function onFormData(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(LOCALESTORAGE_KEY, JSON.stringify(formData));
}

function onSubmitForm(e) {
  console.log(formData);
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(LOCALESTORAGE_KEY);
  formData = {};
}

function dataFromLocalStorage() {
  const data = localStorage.getItem(LOCALESTORAGE_KEY);

  if (data) {
    formData = JSON.parse(data);
    refs.inputFormEmail.value = formData.email || '';
    refs.inputFormMessage.value = formData.message || '';
  }
}
