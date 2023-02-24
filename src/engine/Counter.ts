class Counter {
    value: number;

    constructor() {
        this.value = 0;
    }

    public increment(): void {
        this.value++;
    }
}

export default Counter;
