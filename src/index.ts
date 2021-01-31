// Importamos los observables de la librería ReactiveX
import { Observable, Observer } from 'rxjs';
import { clearInterval } from 'timers';

const getDate = () => new Intl.DateTimeFormat('default', {
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
}).format(new Date());

const observerOBJ: Observer<number> = {
  next: response => {
    console.log(`[${getDate()}] - response: ${response}`);
  },
  error: err => {
    console.log(`[${getDate()}] - error: ${err}`);
  },
  complete: () => {
    console.log(`[${getDate()}] - Finalizado`);
  }
};

const counter$ = new Observable<number>(subscriber => {
  const ID = setInterval(() => subscriber.next(Math.floor(Math.random() * 100)), 1000);
  return (() => {
    clearInterval(ID);
  })
});

const number1 = counter$.subscribe(observerOBJ);
const number2 = counter$.subscribe(observerOBJ);