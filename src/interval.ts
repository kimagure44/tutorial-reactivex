// Importamos los observables de la librería ReactiveX
import {  Observer, interval } from 'rxjs';

const observerCfg: Observer<any> = {
  next: response => {
    console.log('Response:', response);
  },
  error: err => {
    console.log(`Error: ${err}`);
  },
  complete: () => {
    console.log(`Finalizado`);
  }
};

const interval$ = interval(2000);

interval$.subscribe(observerCfg);