import {page as page1} from './init';
import {page as page2} from './tab';
import './style.css';


const btn = document.createElement('button');
btn.addEventListener('click', () => {
  const content = document.getElementById('content');
  if (content !== null) {
    content.remove();
  }
  page1();
});

btn.textContent = 'Menu'
document.body.appendChild(btn)

const btn2 = document.createElement('button');
btn2.addEventListener('click', () => {
  const content = document.getElementById('content');
  if (content !== null) {
    content.remove();
  }
  page2();
});

btn2.textContent = 'Contact'
document.body.appendChild(btn2)
