const parseTemplate = (htmlString) => {
  const template = document.createElement(`template`);
  template.innerHTML = htmlString;
  return template.content;
};

export default parseTemplate;
