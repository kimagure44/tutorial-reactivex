import { fromEvent, Observer } from 'rxjs'; 

const keyboardCallback: Observer<any> = { next: response => {
  // Obtenemos el modelo que necesitamos actualizar
  const source = response.target.dataset.source;
  
  // Buscamos todos los modelos que necesitamos actualizar 
  const updateModels = document.querySelectorAll(`[data-model="${source}"]`);
  
  // Empezamos a recorrer cada elemento y actualizamos su contenido 
  updateModels.forEach(item => {
    const hasHTML = ['DIV'].includes(item.tagName);
    item[hasHTML ? 'innerHTML' : 'value'] = response.target.value;
    }); 
  },
  error: err => {},
  complete: () => {} 
}; 

// Obtenemos todos los elementos que tenga el siguiente atributo 
const keyboardEvent = document.querySelectorAll('[data-reactive="keyup"]');
  
// Creamos un observable sobre los elementos anteriores
const keyboardEvent$ = fromEvent<KeyboardEvent>(keyboardEvent, 'keyup');
 
// Nos suscribimos, y se ejecuta cada vez que presionamos y soltamos una tecla 
keyboardEvent$.subscribe(keyboardCallback);