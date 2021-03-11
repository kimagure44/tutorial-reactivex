import { fromEvent } from 'rxjs';
import { take, pluck } from 'rxjs/operators';

const MAX_CHAR = 10;

const keyboard$ = fromEvent(document, 'keydown').pipe(
  take(MAX_CHAR),
  pluck('code')
);

const subscribe = keyboard$.subscribe({
  next: (data) => {
    console.log('TECLA...', data);
  },
  error: (err) => {
    console.log('ERR', err);
  },
  complete: () => {
    console.log('END');
  }
});