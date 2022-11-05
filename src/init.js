const content = document.getElementById('content'), 
  divElements = [];

const divObjector = (div, parent, text, divClass = '') => {
  const createdDiv = document.createElement('div');
  createdDiv.id = div;
  createdDiv.textContent = text;
  createdDiv.className = divClass;
  return {name: div, parent, createdDiv}
}

const pageTitle = divObjector('pageTitle', content, 'Restaurant Menu'),
  pageBody = divObjector('pageBody', content),
  leftBody = divObjector('leftBody', pageBody.createdDiv, undefined, 'pageBodySection'),
  rightBody = divObjector('rightBody', pageBody.createdDiv, undefined, 'pageBodySection');

const divMaker = (...divObject) => {
  divObject.forEach(div => {
    const divElement = div.createdDiv;
    div.parent.appendChild(divElement);
    divElements.push(divElement);
  });
}

const divGroup = divMaker(pageTitle, pageBody, leftBody, rightBody)
