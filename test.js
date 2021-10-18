/**
 * @author Hovhannes Mirzoyan
 */

class Node {

    constructor(data,next = null) {
        this._next = next;
        this._data = data;
    }


    get data() {
        return this._data;
    }

    set data(value) {
        this._data = value;
    }

    get next() {
        return this._next;
    }

    set next(value) {
        this._next = value;
    }
}


class LinkedList {
    constructor() {
        this._size = 0;
        this._head = null;
    }

    add(node){
        if(this._head === null){
            this._head = node;
            this._size++;
            return true;
        }

        let ptr = this._head;
        while(ptr._next != null){
            ptr = ptr._next;
        }
        ptr._next = node;
        this._size++;
        return true;
    }

    [Symbol.iterator](){
        this._current = this._head;
        return this;
    }

    next(){

       while(this._current !== null){

          const state  = {};
           state.done = false;
           state.value = this._current.data;

           this._current = this._current._next;

           return state;
       }
       return {done: true}
    }

}

let num = 0;

const list = new LinkedList();

while(num < 10){
    list.add(new Node(++num));
}

/*let iterator = list[Symbol.iterator]();

console.log(iterator.next().value);
console.log(iterator.next().value);

function* gen() {
    // Передаём вопрос во внешний код и ожидаем ответа
    let result = yield "2 + 2 = ?"; // (*)

    console.log(result);
}

let generator = gen();

let question = generator.next().value; // <-- yield возвращает значение

generator.next(4);*/

new Promise(function(resolve, reject) {

    setTimeout(() => resolve(1), 1000); // (*)

}).then(function(result) { // (**)

    console.log(result); // 1
    return result * 2;

}).then(function(result) { // (***)

    console.log(result); // 2
    return result * 2;

}).then(function(result) {

    console.log(result); // 4
    return result * 2;

});