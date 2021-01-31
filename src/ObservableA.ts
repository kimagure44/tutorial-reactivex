// Importamos los observables de la librería ReactiveX
import { Observable, Observer } from 'rxjs';

  // Declaramos nuestro observador
  const observer$ = new Observable<string>(subscriber => {

  // Emitimos estos valores a nuestro suscriptor
  subscriber.next('1'); 
  subscriber.next('2');
  subscriber.next('3');
  subscriber.next('4');

  // Cuando usamos complete, ya deja de emitir
  subscriber.complete(); 

  // Esto ya no se emite
  subscriber.next('5');
  subscriber.next('6');
  subscriber.next('7');
});

// Nos suscribimos al observador
// $.subscribe(response, error, complete);
observer$.subscribe(response => console.log(response));