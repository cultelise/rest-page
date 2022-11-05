const divElements = [];

const divFactory = (div, parent, text, divClass = '', addList, type, num, itemClass) => {
  const createdDiv = document.createElement('div');
  createdDiv.id = div;
  createdDiv.textContent = text;
  createdDiv.className = divClass;
  
  if (addList === 'yes' || addList === true) {
    let list = listFactory(type, num, itemClass);
    createdDiv.appendChild(list);
  }
  

  return {name: div, parent, createdDiv}
}

const
  content = divFactory('content', document.body),
  pageTitle = divFactory('pageTitle', content.createdDiv, 'Contact'),
  pageBody = divFactory('pageBody', content.createdDiv, "Hello");

const appendDiv = (...divObject) => {
  divObject.forEach(div => {
    const divElement = div.createdDiv;
    div.parent.appendChild(divElement);
    divElements.push(divElement);
  });
}

export const page = () => {appendDiv(content, pageTitle, pageBody)};