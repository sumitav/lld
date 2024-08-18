// Product interface
abstract class Product {
    abstract operation(): string;
}

// Concrete products
class ConcreteProduct1 extends Product {
    operation(): string {
        return "ConcreteProduct1";
    }
}

class ConcreteProduct2 extends Product {
    operation(): string {
        return "ConcreteProduct2";
    }
}