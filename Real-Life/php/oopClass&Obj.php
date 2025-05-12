<?php
// A simple demonstration of class, object, constructor, destructor, access modifiers, and constants in PHP.

class Car
{
    // Constant
    const WHEELS = 4;

    // Properties with different access modifiers
    public $brand; // Public: accessible from anywhere
    private $engineStatus; // Private: accessible only within the class
    protected $fuelLevel; // Protected: accessible within the class and subclasses

    // Constructor: Automatically called when an object is created
    public function __construct($brand, $fuelLevel)
    {
        $this->brand = $brand;
        $this->fuelLevel = $fuelLevel;
        $this->engineStatus = false; // Engine is off initially
        echo "Car object for {$this->brand} created.\n";
    }

    // Public method to start the engine
    public function startEngine()
    {
        if ($this->fuelLevel > 0) {
            $this->engineStatus = true;
            echo "Engine started for {$this->brand}.\n";
        } else {
            echo "Cannot start engine. Fuel is empty.\n";
        }
    }

    // Destructor: Automatically called when the object is destroyed
    public function __destruct()
    {
        echo "Car object for {$this->brand} destroyed.\n";
    }
}

// Create an object of the Car class
$myCar = new Car("Toyota", 10);

// Accessing public property and method
echo "This car has " . Car::WHEELS . " wheels.\n"; // Accessing constant
$myCar->startEngine();

// Object will be destroyed at the end of the script, triggering the destructor
