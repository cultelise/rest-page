const content = document.getElementById('content'),
  pageTitle = document.createElement('div'),
  pageBody = document.createElement('div');
 
pageTitle.id = 'pageTitle';
pageTitle.textContent = 'Restaurant X';
pageBody.id = 'pageBody';


content.appendChild(pageTitle);
content.appendChild(pageBody);

export default content;