(function () {
  const mainContainer = document.querySelector(`main.central`);

  const templatesCollection = document.querySelectorAll(`template`);
  const templatesArr = Array.from(templatesCollection);

  let currentScreenNum = 0;

  const keyCodes = {
    LEFT: 37,
    RIGHT: 39
  };

  const screenNums = {
    WELCOME: 0
  };

  const showScreenByNumber = (number) => {
    if (Number.isInteger(number) && number < templatesArr.length) {
      mainContainer.innerHTML = ``;
      mainContainer.appendChild(templatesArr[number].content.cloneNode(true));
    }
  };

  const keyboardArrowsHandler = (event) => {
    if (!event.keyCode || !event.altKey) {
      return;
    }

    if (event.keyCode === keyCodes.LEFT) {
      event.preventDefault();
      switchScreenTo(`before`);
    }

    if (event.keyCode === keyCodes.RIGHT) {
      event.preventDefault();
      switchScreenTo(`next`);
    }
  };

  const switchScreenTo = (screen) => {
    let newScreenNum = null;

    switch (screen) {
      case `before`:
        newScreenNum = currentScreenNum - 1;
        break;
      case `next`:
        newScreenNum = currentScreenNum + 1;
        break;
      case `home`:
        newScreenNum = screenNums.WELCOME;
        break;
    }

    if (newScreenNum === currentScreenNum) {
      return;
    }

    if (newScreenNum !== null && templatesArr[newScreenNum]) {
      showScreenByNumber(newScreenNum);
      currentScreenNum = newScreenNum;
    }
  };

  document.addEventListener(`keydown`, keyboardArrowsHandler);

  showScreenByNumber(screenNums.WELCOME);
})();
