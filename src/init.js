const content = document.getElementById('content'), 
  divElements = [];

const listFactory = (type, listItemNumber, className) => {
  let counter = 0;
  if (type === 'unordered'.toLowerCase()) {
    const unorderedList = document.createElement('ul');
    while (counter < listItemNumber) {
      const listItem = document.createElement('li');
      listItem.id = `li${counter + 1}`;
      listItem.className = className
      unorderedList.appendChild(listItem);
      counter++;
    } return unorderedList;
  } else {
      const orderedList = document.createElement('ol');
      while (counter < listItemNumber) {
        const listItem = document.createElement('li');
        listItem.id = `li${counter + 1}`;
        listItem.className = className;
        orderedList.appendChild(listItem);
        counter++;
      } return orderedList;
    }
}

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
  pageTitle = divFactory('pageTitle', content, 'Restaurant Menu'),
  pageBody = divFactory('pageBody', content),
  leftBody = divFactory('leftBody', pageBody.createdDiv, undefined, 'pageBodySection'),
  rightBody = divFactory('rightBody', pageBody.createdDiv, undefined, 'pageBodySection'),
  leftTitle = divFactory('leftTitle', leftBody.createdDiv, 'Appetizer'),
  rightTitle = divFactory('rightTitle', rightBody.createdDiv, 'Entree'),
  leftList = divFactory('leftList', leftBody.createdDiv, undefined, '', true, 'unordered', 5, 'leftListItems');

  console.log(leftList)

const appendDiv = (...divObject) => {
  divObject.forEach(div => {
    const divElement = div.createdDiv;
    div.parent.appendChild(divElement);
    divElements.push(divElement);
  });
}


appendDiv(pageTitle, pageBody, leftBody, rightBody, leftTitle, rightTitle, leftList);

