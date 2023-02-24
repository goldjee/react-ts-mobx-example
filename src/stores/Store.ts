import { makeAutoObservable, action } from 'mobx';
import Counter from '../engine/Counter';

class Store {
    counter: Counter;

    constructor() {
        this.counter = makeAutoObservable(new Counter());
        makeAutoObservable(this, {}, { autoBind: true });
    }

    increment(): void {
        this.counter.increment();
    }

    get counterValue(): number {
        return this.counter.value;
    }
}

export default Store;
