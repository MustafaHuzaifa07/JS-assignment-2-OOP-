// Person class
class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    displayInformation() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Gender: ${this.gender}`);
    }
}

// Create a Person object and display its information
const person = new Person("John Doe", 25, "Male");
person.displayInformation();

// Student class
class Student extends Person {
    constructor(name, age, gender, studentId) {
        super(name, age, gender);
        this.studentId = studentId;
    }

    displayInformation() {
        super.displayInformation();
        console.log(`Student ID: ${this.studentId}`);
    }
}

// Create a Student object and display its information
const student = new Student("Jane Smith", 20, "Female", "123456");
student.displayInformation();

// Teacher class
class Teacher extends Person {
    constructor(name, age, gender, subject) {
        super(name, age, gender);
        this.subject = subject;
    }

    displayInformation() {
        super.displayInformation();
        console.log(`Subject: ${this.subject}`);
    }
}

// Create a Teacher object and display its information
const teacher = new Teacher("Mr. Johnson", 35, "Male", "Mathematics");
teacher.displayInformation();

// Rectangle class
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height;
    }
}

// Create a Rectangle object and calculate its area
const rectangle = new Rectangle(5, 10);
console.log("Rectangle Area:", rectangle.calculateArea());

// Circle class
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    calculateArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

// Create a Circle object and calculate its area
const circle = new Circle(3);
console.log("Circle Area:", circle.calculateArea());

// Car class
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    displayInformation() {
        console.log(`Make: ${this.make}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
    }
}

// Create a Car object and display its information
const car = new Car("Toyota", "Camry", 2020);
car.displayInformation();

// Animal class
class Animal {
    constructor(species) {
        this.species = species;
    }

    displayInformation() {
        console.log(`Species: ${this.species}`);
    }
}

// Create an Animal object and display its information
const animal = new Animal("Lion");
animal.displayInformation();

// Dog class
class Dog extends Animal {
    constructor(species, breed) {
        super(species);
        this.breed = breed;
    }

    displayInformation() {
        super.displayInformation();
        console.log(`Breed: ${this.breed}`);
    }
}

// Create a Dog object and display its information
const dog = new Dog("Dog", "Labrador");
dog.displayInformation();

// BankAccount class
class BankAccount {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited: $${amount}`);
    }

    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log(`Withdrawn: $${amount}`);
        } else {
            console.log("Insufficient balance");
        }
    }
}

// Create a BankAccount object and perform deposit and withdrawal operations
const bankAccount = new BankAccount("123456789", 1000);
console.log("Initial Balance:", bankAccount.balance);
bankAccount.deposit(500);
console.log("Updated Balance:", bankAccount.balance);
bankAccount.withdraw(200);
console.log("Updated Balance:", bankAccount.balance);

// Employee class
class Employee {
    constructor(name, salary, hireDate) {
        this.name = name;
        this.salary = salary;
        this.hireDate = hireDate;
    }

    displayInformation() {
        console.log(`Name: ${this.name}`);
        console.log(`Salary: $${this.salary}`);
        console.log(`Hire Date: ${this.hireDate}`);
    }
}

// Create an Employee object and display its information
const employee = new Employee("John Doe", 50000, "01/01/2022");
employee.displayInformation();

// Book class
class Book {
    constructor(title, author, publicationYear) {
        this.title = title;
        this.author = author;
        this.publicationYear = publicationYear;
    }

    displayInformation() {
        console.log(`Title: ${this.title}`);
        console.log(`Author: ${this.author}`);
        console.log(`Publication Year: ${this.publicationYear}`);
    }
}

// Create a Book object and display its information
const book = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
book.displayInformation();

// Library class
class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    displayInformation() {
        console.log(`Library Name: ${this.name}`);
    }

    displayBooks() {
        console.log(`Books in ${this.name} Library:`);
        this.books.forEach((book) => {
            book.displayInformation();
        });
    }

    addBook(book) {
        this.books.push(book);
        console.log(`Book "${book.title}" added to the library.`);
    }
}

// Create a Library object, add books, and display its information
const library = new Library("Central Library");
library.displayInformation();

const book1 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
library.addBook(book1);

const book2 = new Book("1984", "George Orwell", 1949);
library.addBook(book2);

library.displayBooks();

// Product class
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    applyDiscount(discountPercentage) {
        const discountAmount = (this.price * discountPercentage) / 100;
        this.price -= discountAmount;
        console.log(`Discount applied: $${discountAmount}`);
    }

    displayPrice() {
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price}`);
    }
}

// Create a Product object, apply a discount, and display the updated price
const product = new Product("Phone", 500);
product.displayPrice();
product.applyDiscount(10);
product.displayPrice();

// ShoppingCart class
class ShoppingCart {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
        console.log(`Product "${product.name}" added to the shopping cart.`);
    }

    removeProduct(product) {
        const index = this.products.indexOf(product);
        if (index !== -1) {
            this.products.splice(index, 1);
            console.log(`Product "${product.name}" removed from the shopping cart.`);
        } else {
            console.log(`Product "${product.name}" not found in the shopping cart.`);
        }
    }

    calculateTotalPrice() {
        let totalPrice = 0;
        this.products.forEach((product) => {
            totalPrice += product.price;
        });
        return totalPrice;
    }
}

// Create a ShoppingCart object, add and remove products, and display the total price
const shoppingCart = new ShoppingCart();

const product1 = new Product("Shirt", 20);
shoppingCart.addProduct(product1);

const product2 = new Product("Shoes", 50);
shoppingCart.addProduct(product2);

shoppingCart.removeProduct(product1);

console.log("Total Price:", shoppingCart.calculateTotalPrice());

// Timer class
class Timer {
    constructor(minutes, seconds) {
        this.minutes = minutes;
        this.seconds = seconds;
        this.intervalId = null;
    }

    startTimer() {
        console.log("Timer started.");
        this.intervalId = setInterval(() => {
            this.seconds++;
            if (this.seconds === 60) {
                this.seconds = 0;
                this.minutes++;
            }
        }, 1000);
    }

    stopTimer() {
        console.log("Timer stopped.");
        clearInterval(this.intervalId);
    }

    resetTimer() {
        console.log("Timer reset.");
        this.minutes = 0;
        this.seconds = 0;
    }

    displayTime() {
        console.log(`Elapsed Time: ${this.minutes} minutes ${this.seconds} seconds`);
    }
}

// Create a Timer object, start the timer, and display the elapsed time
const timer = new Timer(0, 0);
timer.startTimer();

setTimeout(() => {
    timer.displayTime();
    timer.stopTimer();
    timer.resetTimer();
    timer.displayTime();
}, 5000);

// Weather class
class Weather {
    constructor(temperature, humidity) {
        this.temperature = temperature;
        this.humidity = humidity;
    }

    displayWeatherConditions() {
        console.log(`Temperature: ${this.temperature}°C`);
        console.log(`Humidity: ${this.humidity}%`);
    }
}

// Create a Weather object and display the weather conditions
const weather = new Weather(25, 70);
weather.displayWeatherConditions();

// Game class
class Game {
    constructor(name) {
        this.name = name;
        this.players = [];
    }

    addPlayer(player) {
        this.players.push(player);
        console.log(`Player "${player}" added to the game.`);
    }

    removePlayer(player) {
        const index = this.players.indexOf(player);
        if (index !== -1) {
            this.players.splice(index, 1);
            console.log(`Player "${player}" removed from the game.`);
        } else {
            console.log(`Player "${player}" not found in the game.`);
        }
    }

    displayGameDetails() {
        console.log(`Game Name: ${this.name}`);
        console.log(`Number of Players: ${this.players.length}`);
    }
}

// Create a Game object, add and remove players, and display the game details
const game = new Game("Chess");
game.addPlayer("Player 1");
game.addPlayer("Player 2");
game.removePlayer("Player 3");
game.displayGameDetails();
