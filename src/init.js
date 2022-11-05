const content = document.getElementById('content'), 
  divElements = [];

const listFactory = (type, listItemNumber) => {
  if (type === 'unordered'.toLowerCase()) {
    const unorderedList = document.createElement('ul');
    let counter = 0;
    while (counter < listItemNumber) {
      const listItem = document.createElement('li');
      listItem.id = `li${counter + 1}`;
      unorderedList.appendChild(listItem);
      counter++;
    } return unorderedList;
  } else {
      const orderedList = document.createElement('ol');
      let counter = 0;
      while (counter < listItemNumber) {
        const listItem = document.createElement('li');
        listItem.id = `li${counter + 1}`;
        orderedList.appendChild(listItem);
        counter++;
      } return orderedList;
    }
}

const divFactory = (div, parent, text, divClass = '', addList, type, num) => {
  const createdDiv = document.createElement('div');
  createdDiv.id = div;
  createdDiv.textContent = text;
  createdDiv.className = divClass;
  
  if (addList === 'yes' || addList === true) {
    let list = listFactory(type, num);
    createdDiv.appendChild(list);
  }
  

  return {name: div, parent, createdDiv}
}

const 
  pageTitle = divFactory('pageTitle', content, 'Restaurant Menu'),
  pageBody = divFactory('pageBody', content),
  leftBody = divFactory('leftBody', pageBody.createdDiv, undefined, 'pageBodySection'),
  rightBody = divFactory('rightBody', pageBody.createdDiv, undefined, 'pageBodySection'),
  leftTitle = divFactory('leftTitle', leftBody.createdDiv, 'Left Title'),
  rightTitle = divFactory('rightTitle', rightBody.createdDiv, 'Right Title'),
  leftListX = divFactory('leftList', leftBody.createdDiv, undefined, '', true, 'unordered', 5);

  console.log(leftListX)

const appendDiv = (...divObject) => {
  divObject.forEach(div => {
    const divElement = div.createdDiv;
    div.parent.appendChild(divElement);
    divElements.push(divElement);
  });
}


appendDiv(pageTitle, pageBody, leftBody, rightBody, leftTitle, rightTitle, leftListX);


