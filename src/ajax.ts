// Importamos los observables de la librería ReactiveX
import { Observer } from 'rxjs';
import { ajax } from 'rxjs/ajax';

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

const url = 'https://jsonplaceholder.typicode.com/users'; 
const ajax$ = ajax(url);
const subscription = ajax$.subscribe(observerCfg);