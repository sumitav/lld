class DatabaseConnection {
    constructor() {
        if (DatabaseConnection.instance) {
            return DatabaseConnection.instance;
        }

        DatabaseConnection.instance = this;
    }
}

// Usage example
const dbConnection1 = new DatabaseConnection();
const dbConnection2 = new DatabaseConnection();

console.log(dbConnection1 === dbConnection2); // Output: true