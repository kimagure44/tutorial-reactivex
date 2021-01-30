// Importamos los observables de la librería ReactiveX
import { Observable } from 'rxjs';

// Declaramos nuestro observador
const observer$ = new Observable<string>(subscriber => {

  // Emitimos estos valores a nuestro suscriptor
  subscriber.next('1'); 
  subscriber.next('2');
  subscriber.next('3');
  subscriber.next('4');

  // Vamos a generar un error aleatorio y probar el callback err
  const error = Math.floor(Math.random() * 100);
  console.log(error < 50 ? `Error < 50.... ${error}` : 'Success');
  if (error < 50) {
    throw new Error(`Ocurrio el error.... ${error}`);
  }

  // Cuando usamos complete, ya deja de emitir
  subscriber.complete(); 

  // Esto ya no se emite
  subscriber.next('5');
  subscriber.next('6');
  subscriber.next('7');
});

// Nos suscribimos al observador
// $.subscribe(response, error, complete);
observer$.subscribe(response => console.log(response), err => console.error(err), () => console.log('Finalizado'));