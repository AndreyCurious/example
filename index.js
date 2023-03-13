
window.addEventListener('load', () => {
const changeLng = () => {
  const lngs = document.querySelector('select');
  const state = {
    lng: 'ru',
  };

  lngs.addEventListener('change', (e) => {
    state.lng = e.target.value;
  })
  render(state);
};

const render = (state) => {
  const hello = document.querySelector('.hello');
  if (state.lng === 'rus') {
    hello.textContent = 'Привет'
  } else if(state.lng === 'eng') {
    hello.textContent = 'Hello'
  } else if(state.lng === 'ger') {
    hello.textContent = 'Hallo'
  } else if(state.lng === 'fr') {
    hello.textContent = 'Bonjour'
  }

};

changeLng();
});