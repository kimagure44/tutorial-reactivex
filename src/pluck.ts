import { from } from 'rxjs'; 
import { pluck } from 'rxjs/operators';

(async () => {
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
  const urlPost = 'https://jsonplaceholder.typicode.com/posts';
  
  const response = await (await fetch(urlPost)).json();
  /*
   Estructura del objeto recibido:
   {
     userId,
     id,
     title,
     body
   }
  */
  
  // Creamos nuestro observable desde un array gracias a 'from'
  const data = from(response);

  //grab names
  const obs$ = data.pipe(pluck('title'));

  // Muestra solo el 'title'
  const subscribe = obs$.subscribe(cfg);

})();