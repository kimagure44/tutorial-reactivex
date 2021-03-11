import { from } from 'rxjs';
import { distinct } from 'rxjs/operators';
interface idata {
  id: number,
  name: string,
  age: number
}

const data: idata[] = [
  { id: 0, name: 'a', age: 10, },
  { id: 1, name: 'a', age: 20, },
  { id: 2, name: 'b', age: 30, },
  { id: 3, name: 'c', age: 40, },
  { id: 4, name: 'c', age: 50, },
];

const obs$ = from(data).pipe(
  distinct((data:idata) => data.name)
)
obs$.subscribe({
  next: (data) => {
    console.log(data);
    /*
      {id: 0, name: "a", age: 10}
      {id: 2, name: "b", age: 30}
      {id: 3, name: "c", age: 40}
    */
  },
  error: (err) => {
    console.log('ERR', err);
  },
  complete: () => {
    console.log('END');
  }
});
