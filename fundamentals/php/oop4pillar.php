use LoggerTrait;
use MyApp\Utils\Helper;

<?php
// 4 Pillars of OOP

// 1. Encapsulation: Wrapping data and methods into a single unit (class).
class EncapsulationExample
{
    private $data;

    public function setData($value)
    {
        $this->data = $value;
    }

    public function getData()
    {
        return $this->data;
    }
}

// 2. Inheritance: A class can inherit properties and methods from another class.
class ParentClass
{
    public function greet()
    {
        return "Hello from Parent!";
    }
}

class ChildClass extends ParentClass
{
    public function greetChild()
    {
        return "Hello from Child!";
    }
}

// 3. Polymorphism: Same method name, different implementations.
interface Shape
{
    public function area();
}

class Circle implements Shape
{
    private $radius;

    public function __construct($radius)
    {
        $this->radius = $radius;
    }

    public function area()
    {
        return pi() * $this->radius * $this->radius;
    }
}

class Rectangle implements Shape
{
    private $width, $height;

    public function __construct($width, $height)
    {
        $this->width = $width;
        $this->height = $height;
    }

    public function area()
    {
        return $this->width * $this->height;
    }
}

// 4. Abstraction: Hiding implementation details and showing only functionality.
abstract class Animal
{
    abstract public function sound();
}

class Dog extends Animal
{
    public function sound()
    {
        return "Bark";
    }
}

// Interface: Defines a contract for classes.
interface Logger
{
    public function log($message);
}

class FileLogger implements Logger
{
    public function log($message)
    {
        echo "Logging to file: $message";
    }
}

// Traits: Reusable methods for classes.
trait LoggerTrait
{
    public function log($message)
    {
        echo "Logging: $message";
    }
}

class Application {}

// Static Methods and Properties: Belong to the class, not instances.
class StaticExample
{
    public static $count = 0;

    public static function increment()
    {
        self::$count++;
    }
}

// Namespace: Organizes code into logical groups.
// namespace MyApp\Utils;

// class Helper
// {
//     public static function greet()
//     {
//         return "Hello from Helper!";
//     }
// }

// Iterable: Allows objects to be used in loops.
class MyCollection implements IteratorAggregate
{
    private $items = [];

    public function add($item)
    {
        $this->items[] = $item;
    }

    public function getIterator()
    {
        return new ArrayIterator($this->items);
    }
}

// Example Usage

$encapsulation = new EncapsulationExample();
$encapsulation->setData("Encapsulated Data");
echo $encapsulation->getData();

$circle = new Circle(5);
echo $circle->area();

$dog = new Dog();
echo $dog->sound();

$app = new Application();
// $app->log("This is a log message.");

StaticExample::increment();
echo StaticExample::$count;

// echo Helper::greet();

$collection = new MyCollection();
$collection->add("Item 1");
$collection->add("Item 2");
foreach ($collection as $item) {
    echo $item;
}
