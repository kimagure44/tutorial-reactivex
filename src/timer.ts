// Importamos los observables de la librería ReactiveX
import {  Observer, timer } from 'rxjs';

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

const date = new Date();
const timer$ = timer(2000);  // Espera 2 segundos y emite un valor
const timerInterval$ = timer(2000, 500);  // Espera 2 segundos y emite un valor cada 0.5 seg.
const alarm$ = timer(date);  // Emite en una fecha determinada

timer$.subscribe(observerCfg);
timerInterval$.subscribe(observerCfg);
alarm$.subscribe(observerCfg);