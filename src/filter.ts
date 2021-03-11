import { fromEvent } from 'rxjs'; 
import { filter } from 'rxjs/operators';


const cfg = {
  next: response => {
    console.log(response);
  },
  error: err => {
    console.log(`Error: ${err}`);
  },
  complete: () => {
    console.log(`Finalizado`);
  }
};

const keyboard = fromEvent<KeyboardEvent>(document, 'keydown');

// Filtramos para que solo emita el valor cuando la tecla pulsada se encuentre entre la 'a' y la 'z'
const obs$ = keyboard.pipe(filter(({keyCode}) => keyCode >= 65 && keyCode <= 90));

obs$.subscribe(cfg);