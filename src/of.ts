// Importamos los observables de la librería ReactiveX
import { Observer, of } from 'rxjs';

const observerCfg: Observer<any> = {
  next: response => {
    let res = null
    res = typeof response === 'object' || Array.isArray(response) ? JSON.stringify(response) : response;
    if (typeof response === 'function') {
      res();
    }
    console.log(`Response: ${res}`);
  },
  error: err => {
    console.log(`Error: ${err}`);
  },
  complete: () => {
    console.log(`Finalizado`);
  }
};

const obsNumber$ = of(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
const obsString$ = of('a', 'b', 'c', 'name', 'age');
const obsArray$ = of([1, 2, true, 'a'], ['a', 'b'], [true, false]);
const obsObject$ = of({ a: 1, b: 2 },{ a: { b: { c: 1} } });
const obsFunc$ = of(() => alert('1'), () => alert('2'));

obsNumber$.subscribe(observerCfg);
obsString$.subscribe(observerCfg);
obsArray$.subscribe(observerCfg);
obsObject$.subscribe(observerCfg);
obsFunc$.subscribe(observerCfg);