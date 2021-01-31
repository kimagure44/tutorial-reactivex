// Importamos los observables de la librería ReactiveX
import { Observable, Observer } from 'rxjs';

const getDate = () => new Intl.DateTimeFormat('default', {
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
}).format(new Date());

const observerOBJ: Observer<number> = {
  next: response => {
    console.log(`[${getDate()}] - response: ${response}`);
  },
  error: err => {
    console.log(`[${getDate()}] - error: ${err}`);
  },
  complete: () => {
    console.log(`[${getDate()}] - Finalizado`);
  }
};

const counter$ = new Observable<number>(subscriber => {
  let cont = 0;
  const count = setInterval(() => {
    console.log(`[${getDate()}] - setInterval: ${cont}`);
    subscriber.next(cont++);
  }, 1000);

  // Se ejecuta el método complete() antes de cancelar la suscripción, y en este momento dejaría de emitir
  setTimeout(() => {
    console.log(`[${getDate()}] - Ya no se emite, complete() setTimeout()`);
    subscriber.complete();
  }, 5000);
  
  /* 
    Este return es lo que devuelve nuestro observable cuando cancelemos la suscripción (unsubscribe()),
    ya que finaliza y ejecuta el método complete()
  */
  return (() => {
    // Aqui eliminamos el ID del método setInterval(), si no continuaría ejecutándose aunque ya no estemos suscritos
    clearInterval(count);
  })
});

const subscription = counter$.subscribe(observerOBJ);

setTimeout(() => {
  console.log(`[${getDate()}] - UNSUBSCRIBE`);
  subscription.unsubscribe();
}, 12000);
