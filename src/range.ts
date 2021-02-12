// Importamos los observables de la librería ReactiveX
import { asyncScheduler, Observer, range } from 'rxjs';

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

// Síncrono
console.log('IN RANGE A');
const rangeA$ = range(1, 20);  // 1,2,3....,20
const subscriptionA = rangeA$.subscribe(observerCfg);
console.log('OUT RANGE A');

// Síncrono
console.log('IN RANGE B');
const rangeB$ = range(20);  // 0,1,2....,19
const subscriptionB = rangeB$.subscribe(observerCfg);
console.log('OUT RANGE B');

// Forzamos asíncrono
console.log('IN RANGE C');
const rangeC$ = range(-10, 20, asyncScheduler);  // -10,-9,-8....,9
const subscriptionC = rangeC$.subscribe(observerCfg);
console.log('OUT RANGE C');