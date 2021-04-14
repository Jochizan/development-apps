import { d, w } from './global/global.js';
import addingEvent from './adding_event.js';

const addList = (btn, todoList, task, input) => {
  const $btn = d.querySelector(btn);

  // button
  $btn.addEventListener('click', (e) => {
    if (e.target == $btn) {
      const $inputTask = d.querySelector(input);

      addingEvent(task, todoList, input);
      $inputTask.previousElementSibling.classList.remove('top');
    }
  });
};

const addListKeyEnter = (todoList, task, input) => {
  // keydown 'ENTER'
  w.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.target.value) {
      addingEvent(task, todoList, input);
    }
  });
};

export { addList, addListKeyEnter };
