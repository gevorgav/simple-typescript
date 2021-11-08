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


const source = of(1, 2, 3, 4, 5);

const switched = source.pipe(switchMap(x => of(x+2, x+3)));

switched.subscribe( x => console.log(`New value ${x}`));

/*const numbers = of(1, 2, 3).pipe(
    tap(value => {
        console.log(++value)
    }),
    map((x) => x * x)
);

numbers.subscribe(console.log);


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

