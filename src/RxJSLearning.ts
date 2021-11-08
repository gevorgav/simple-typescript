/**
 * @author Hovhannes Mirzoyan
 */
import {filter, map, Observable, of, tap} from "rxjs";
import {debounceTime, takeUntil, throttleTime} from 'rxjs/operators';


let a = 87;

const foo = new Observable<number>(subscriber => {

    subscriber.next(16);
    subscriber.next(47);
    subscriber.next(47);
    subscriber.next(51);
    subscriber.next(100);
    subscriber.complete();

});

const filteredObservable = foo.pipe(filter(ev => {
    return ev % 5 === 0;
}));

//filteredObservable.subscribe(console.log);

const source = of(1, 2, 3, 4, 5);


const result = source.pipe(throttleTime(0));

result.subscribe(x => console.log(x));
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

