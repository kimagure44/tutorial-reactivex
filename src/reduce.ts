import { from } from 'rxjs'; 
import { reduce } from 'rxjs/operators';

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

const obs$ = from([1, 2, 3, 4, 5, 6, 7]).pipe(reduce((acc, value) => acc + value, 0));

// 1 + 2 +3 + 4 + 5 + 6 + 7 => 28
obs$.subscribe(cfg); 