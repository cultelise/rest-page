const divElements = [];

const listFactory = (type, listItemNumber, className) => {
  let counter = 0;
  if (type === 'unordered'.toLowerCase()) {
    const unorderedList = document.createElement('ul');
    while (counter < listItemNumber) {
      const listItem = document.createElement('li');
      listItem.classList.add(`li${counter + 1}`),
      listItem.classList.add(className);
      unorderedList.appendChild(listItem);
      counter++;
    } return unorderedList;
  } else {
      const orderedList = document.createElement('ol');
      while (counter < listItemNumber) {
        const listItem = document.createElement('li');
        listItem.classList.add(`li${counter + 1}`),
        listItem.classList.add(className);
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

const addList = (div, list) => {
  div.createdDiv.appendChild(list);
};

const leftList1 = listFactory('unordered', 5, 'leftListItems'),
  rightList1 = listFactory('ordered', 6, 'rightListItems');

const 
  content = divFactory('content', document.body),
  pageTitle = divFactory('pageTitle', content.createdDiv, 'Restaurant Menu'),
  pageBody = divFactory('pageBody', content.createdDiv),
  leftBody = divFactory('leftBody', pageBody.createdDiv, undefined, 'pageBodySection'),
  rightBody = divFactory('rightBody', pageBody.createdDiv, undefined, 'pageBodySection'),
  leftTitle = divFactory('leftTitle', leftBody.createdDiv, 'Appetizer'),
  rightTitle = divFactory('rightTitle', rightBody.createdDiv, 'Entree'),
  leftList = divFactory('leftList', leftBody.createdDiv),
  rightList = divFactory('rightList', rightBody.createdDiv);


console.log(rightList.createdDiv)
addList(leftList, leftList1);
addList(rightList, rightList1);

const appendDiv = (...divObject) => {
  divObject.forEach(div => {
    const divElement = div.createdDiv;
    div.parent.appendChild(divElement);
    divElements.push(divElement);
  });
}


export const page = () => appendDiv(
  pageTitle, pageBody, leftBody, rightBody, leftTitle, rightTitle, leftList, rightList, content
  );


