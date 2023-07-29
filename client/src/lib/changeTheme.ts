import { MouseEvent } from 'react';

function changeTheme(event: MouseEvent, element: string): void {
  event.preventDefault();

  const array = ['', '']
  const elementFind = document.querySelector(element);
  
  if (elementFind) {
    const targetElement = event.target as HTMLElement;

    elementFind.classList.toggle('light');
    targetElement.innerHTML = array[elementFind.classList.contains('light') ? 0 : 1];
  }
}

export default changeTheme;