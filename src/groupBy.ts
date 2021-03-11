import { from } from 'rxjs'; 
import { groupBy, mergeMap, toArray } from 'rxjs/operators';

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
  
  interface dataResponse {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
  }
  // Estructura del objeto recibido: { postId, id, name, email, body } 
  const urlPost: string = 'https://jsonplaceholder.typicode.com/comments';
  const response: dataResponse[] = await (await fetch(urlPost)).json();
  const data = from(response);

  const obs$ = data.pipe(
    groupBy(values => values.postId),
    mergeMap(group => group.pipe(toArray()))
  ).subscribe(cfg);

})();