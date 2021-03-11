import { from } from 'rxjs'; 
import { map } from 'rxjs/operators';

const arr = from([1, 2, 3, 4, 5]);

// [1, 2, 3, 4, 5] => 100, 200, 300, 400, 500
const obs$ = arr.pipe(map(data => data * 100));

obs$.subscribe(console.log);