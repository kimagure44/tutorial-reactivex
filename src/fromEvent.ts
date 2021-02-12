// Importamos los observables de la librería ReactiveX
import { Observer, fromEvent } from 'rxjs';

const observerCfg: Observer<any> = {
  next: response => {
    console.log('Response:');
    console.log(response?.key || response?.x || '');
  },
  error: err => {
    console.log(`Error: ${err}`);
  },
  complete: () => {
    console.log(`Finalizado`);
  }
};

const mouseEvent$ = fromEvent<MouseEvent>(document, 'click');
const keybEvent$ = fromEvent<KeyboardEvent>(document, 'keydown');

mouseEvent$.subscribe(observerCfg); // Response: 300 -> Coordenada X del evento mouse
keybEvent$.subscribe(observerCfg);  // Response: a -> key del evento keyboard