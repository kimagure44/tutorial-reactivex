import { from } from 'rxjs'; 
import { mapTo } from 'rxjs/operators';


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
  
// Creamos nuestro observable desde un array gracias a 'from'
const data = from([1, 2, 3, 4, 5, 6, 7, 8, 9]);

const obs$ = data.pipe(mapTo('Valor leido'));

const subscribe = obs$.subscribe(cfg);

