<?php
// Object-Oriented Programming (OOP) in PHP

// 1. Defining a Class
class Person
{
    // Properties
    public $name;
    public $age;

    // Constructor
    public function __construct($name, $age)
    {
        $this->name = $name;
        $this->age = $age;
    }

    // Method
    public function introduce()
    {
        return "Hi, I'm {$this->name} and I'm {$this->age} years old.";
    }
}

// 2. Creating an Object
$person1 = new Person("Alice", 25);
echo $person1->introduce(); // Output: Hi, I'm Alice and I'm 25 years old.

// 3. Inheritance
class Employee extends Person
{
    public $jobTitle;

    public function __construct($name, $age, $jobTitle)
    {
        parent::__construct($name, $age); // Call parent constructor
        $this->jobTitle = $jobTitle;
    }

    public function introduce()
    {
        return parent::introduce() . " I work as a {$this->jobTitle}.";
    }
}

$employee1 = new Employee("Bob", 30, "Software Engineer");
echo $employee1->introduce(); // Output: Hi, I'm Bob and I'm 30 years old. I work as a Software Engineer.

// 4. Encapsulation
class BankAccount
{
    private $balance;

    public function __construct($initialBalance)
    {
        $this->balance = $initialBalance;
    }

    public function deposit($amount)
    {
        if ($amount > 0) {
            $this->balance += $amount;
        }
    }

    public function withdraw($amount)
    {
        if ($amount > 0 && $amount <= $this->balance) {
            $this->balance -= $amount;
        }
    }

    public function getBalance()
    {
        return $this->balance;
    }
}

$account = new BankAccount(1000);
$account->deposit(500);
$account->withdraw(300);
echo $account->getBalance(); // Output: 1200

// 5. Polymorphism
class Animal
{
    public function makeSound()
    {
        return "Some generic sound";
    }
}

class Dog extends Animal
{
    public function makeSound()
    {
        return "Bark";
    }
}

class Cat extends Animal
{
    public function makeSound()
    {
        return "Meow";
    }
}

$animals = [new Dog(), new Cat(), new Animal()];
foreach ($animals as $animal) {
    echo $animal->makeSound() . PHP_EOL;
    // Output:
    // Bark
    // Meow
    // Some generic sound
}

// 6. Abstraction
abstract class Shape
{
    abstract public function calculateArea();
}

class Circle extends Shape
{
    private $radius;

    public function __construct($radius)
    {
        $this->radius = $radius;
    }

    public function calculateArea()
    {
        return pi() * pow($this->radius, 2);
    }
}

class Rectangle extends Shape
{
    private $width;
    private $height;

    public function __construct($width, $height)
    {
        $this->width = $width;
        $this->height = $height;
    }

    public function calculateArea()
    {
        return $this->width * $this->height;
    }
}

$circle = new Circle(5);
$rectangle = new Rectangle(4, 6);
echo $circle->calculateArea(); // Output: 78.539816339745
echo $rectangle->calculateArea(); // Output: 24

// 7. Interfaces
interface Logger
{
    public function log($message);
}

class FileLogger implements Logger
{
    public function log($message)
    {
        file_put_contents('log.txt', $message . PHP_EOL, FILE_APPEND);
    }
}

class DatabaseLogger implements Logger
{
    public function log($message)
    {
        // Simulate logging to a database
        echo "Logging to database: $message";
    }
}

$logger = new FileLogger();
$logger->log("This is a log message.");
