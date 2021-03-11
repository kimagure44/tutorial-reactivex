import { fromEvent } from 'rxjs'; 
import { pluck, tap } from 'rxjs/operators';

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

let text: string[] = [];
let word: string = '';
const obs$ = fromEvent<KeyboardEvent>(document, 'keydown');

obs$.pipe(
  tap(data => {
    console.log('Antes de "pluck", este operador lo usaremos para informar y saber que entra');
    console.log(data);
  }),
  pluck('key'),
  tap(data => {
      console.log('Despues de de "pluck", ahora vamos a guardar la información modificada');
      if (data === 'Enter') {
        text.push(word);
        word = '';
      } else {
        word += data;
      }
    })
).subscribe(cfg);