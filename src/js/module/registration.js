const form = document.querySelector('form');
const buttonGroup = document.querySelector('.registration__button-group');
const successBlock = document.querySelector('.registration__success');

const getButtonByIndex = index => buttonGroup.querySelector(`[data-page='${index}']`);

const getCurrentFieldset = () => form.querySelector('.registration__fieldset_active');

const getCurrentIndex = () => +getCurrentFieldset().dataset.tab;

const getCurrentInputFields = () => getCurrentFieldset().querySelectorAll('input');

const getCurrentButton = () => getCurrentFieldset().querySelector('button');

const getNextFieldset = () => {
  const currentTab = +getCurrentFieldset().dataset.tab;
  return form.querySelector(`[data-tab='${currentTab + 1}']`);
};

const getFieldsetByIndex = index => form.querySelector(`[data-tab='${index}']`);

form.addEventListener('input', () => {
  let toTurnOnButton = true;

  for (const input of getCurrentInputFields()) {
    if (!input.value) toTurnOnButton = false;
  }

  getCurrentButton().disabled = !toTurnOnButton;
  if (getCurrentIndex() < 3) {
    getButtonByIndex(getCurrentIndex() + 1).disabled = !toTurnOnButton;
  }
});

form.addEventListener('click', event => {
  const target = event.target;

  if (!target.classList.contains('registration__next-button')) return;

  getNextFieldset().classList.add('registration__fieldset_active');
  getCurrentFieldset().classList.remove('registration__fieldset_active');
});

form.addEventListener('submit', event => {
  event.preventDefault();
  buttonGroup.remove();
  successBlock.classList.add('registration__success_active');
  getCurrentFieldset().classList.remove('registration__fieldset_active');
});

buttonGroup.addEventListener('click', event => {
  const target = event.target;

  if (target.closest('button')) {
    getCurrentFieldset().classList.remove('registration__fieldset_active');
    getFieldsetByIndex(+target.dataset.page).classList.add('registration__fieldset_active');
  }
});
