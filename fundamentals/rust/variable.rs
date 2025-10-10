fn main() {
    // Variables are immutable by default
    let x = 5;
    println!("The value of x is: {}", x);
    
    // Mutable variables
    let mut y = 10;
    println!("The value of y is: {}", y);
    y = 15;
    println!("The new value of y is: {}", y);
    
    // Variable shadowing
    let z = 20;
    let z = z + 5; // shadows the previous z
    let z = z * 2; // shadows again
    println!("The value of z is: {}", z);
    
    // Type annotations
    let a: i32 = 42;
    let b: f64 = 3.14;
    let c: bool = true;
    let d: char = 'R';
    
    println!("Integer: {}, Float: {}, Boolean: {}, Character: {}", a, b, c, d);
    
    // Constants
    const PI: f64 = 3.14159;
    println!("PI is: {}", PI);
    
    // Destructuring
    let (name, age) = ("Alice", 30);
    println!("{} is {} years old", name, age);
}