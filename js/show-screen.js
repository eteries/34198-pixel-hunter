const mainContainer = document.querySelector(`main.central`);

const showScreen = (htmlFragment) => {
  mainContainer.innerHTML = ``;
  mainContainer.appendChild(htmlFragment);
};

export default showScreen;
