// Iterator class
class Iterator {
    constructor(collection) {
        this.collection = collection;
        this.index = 0;
    }

    hasNext() {
        return this.index < this.collection.length;
    }

    next() {
        return this.collection[this.index++];
    }
}

// Example usage
const collection = [1, 2, 3, 4, 5];
const iterator = new Iterator(collection);

while (iterator.hasNext()) {
    console.log(iterator.next());
}