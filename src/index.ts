import { fromEvent, Observer } from 'rxjs';

const keyboardCallback: Observer<any> = {
  next: response => {
    const source = response.target.dataset.source;
    const updateModels = document.querySelectorAll(`[data-model="${source}"]`);
    updateModels.forEach(item => {
      const hasHTML = ['DIV'].includes(item.tagName);
      item[hasHTML ? 'innerHTML' : 'value'] = response.target.value;
    });
  },
  error: err => {},
  complete: () => {}
};

const keyboardEvent = document.querySelectorAll('[data-reactive="keyup"]');
const keyboardEvent$ = fromEvent<KeyboardEvent>(keyboardEvent, 'keyup');

keyboardEvent$.subscribe(keyboardCallback);