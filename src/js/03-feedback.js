import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const input = document.querySelector('.feedback-form input[type="email"]');
const textarea = document.querySelector('.feedback-form textarea');

const STORAGE_KEY = 'feedback-form-state';
const formData = {};
loadingPage();

feedbackForm.addEventListener('submit', onFormSubmit);
feedbackForm.addEventListener('input', throttle(onFormInput, 500));

function onFormSubmit(e) {
  e.preventDefault();
  console.log('This form has been submitted');
  e.target.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onFormInput(e) {
  formData[e.target.name] = e.target.value;

  const JSONformData = JSON.stringify(formData);
  console.log(JSONformData);
  localStorage.setItem(STORAGE_KEY, JSONformData);
}

function loadingPage() {
  const savedMsg = localStorage.getItem(STORAGE_KEY);
  if (savedMsg) {
    console.log(savedMsg);
    const JSONsavedMsg = JSON.parse(savedMsg);
    console.log(JSONsavedMsg);
    textarea.value = JSONsavedMsg.message;
    input.value = JSONsavedMsg.email;
  }
}
