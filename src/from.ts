// Importamos los observables de la librería ReactiveX
import { from, Observer, of } from 'rxjs';

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

const observerFrom$ = from('abcdefgh');
const observerOf$ = of('abcdefgh');

observerFrom$.subscribe(observerCfg); 
// Response: a, Response: b, Response: c, Response: d, Response: e, Response: f, Response: g, Response: h
// Emite cada elemento dentro del argumento

observerOf$.subscribe(observerCfg); 
// Response: abcdefgh
// Emite el argumento
