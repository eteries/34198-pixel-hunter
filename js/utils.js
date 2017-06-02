// Проверяет есть ли нажатый радио-баттон в блоке с общем именем
const isRadioChecked = (name) => {
  let checked = false;

  Array.from(name).forEach((radio) => {
    if (radio.checked === true) {
      checked = true;
    }
  });

  return checked;
};

export default isRadioChecked;
