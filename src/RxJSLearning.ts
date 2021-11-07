/**
 * @author Hovhannes Mirzoyan
 */
import {filter, map, Observable, of, tap, from, combineLatestWith, switchMap} from "rxjs";

let a = 87;

const foo = new Observable<number>(subscriber => {

    subscriber.next(15);
    subscriber.next(45);
    subscriber.next(47);
    subscriber.next(51);
    subscriber.next(100);
    subscriber.complete();

});


const filteredObservable = foo.pipe(filter(ev => {
    return ev % 5 === 0;
}));


filteredObservable.subscribe(console.log);

//filteredObservable.subscribe(console.log);


const source = from([1, 2, 3, 4, 5]);

const numbers = of(17,18);


const zipped = source.pipe(combineLatestWith(numbers)); // foo 15,45...

console.log();


const switched = source.pipe(switchMap(value => of(value*3,value*4)));

console.log(switched);

zipped.subscribe({
    next(x) {
       console.log(x);
    }
});


/*const numbers = of(1, 2, 3).pipe(
    tap(value => {
        console.log(++value)
    }),
    map((x) => x * x)
);

numbers.subscribe(console.log);

const source = of(1, 2, 3, 4, 5)


source.pipe(
    tap(n => {
        if (n > 3) {
            throw new TypeError(`Value ${n} is greater than 3`)
        }
    })
).subscribe({
    next(x) {
            console.log('got value ' + x);
    },
    error(e) {
        console.log(e.name + ': ' + e.message);
    }
});*/

