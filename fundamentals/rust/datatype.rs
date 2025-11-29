use std::fmt::Display;

//! All about Rust datatypes — a compact tour with examples.
//!
//! Save as `datatype.rs` and run with `cargo run --bin datatype` (or `rustc datatype.rs && ./datatype`).
//!
//! This file demonstrates common scalar, compound, and advanced types, plus patterns and examples.


// A generic wrapper to show generics and trait bounds.
struct Wrapper<T>(T);
impl<T: Display> Wrapper<T> {
    fn show(&self) {
        println!("Wrapper contains: {}", self.0);
    }
}

// A simple (named) struct.
#[derive(Debug, Clone, Copy)]
struct Point {
    x: i32,
    y: i32,
}

// A tuple struct.
struct Color(i8, i8, i8);

// An enum with data.
enum Shape {
    Circle { radius: f64 },
    Rect { w: f64, h: f64 },
    Unit, // unit-like variant
}

// A union (unsafe access).
union IntOrFloat {
    i: u32,
    f: f32,
}

// Function that never returns (never type `!`) — not called.
#[allow(dead_code)]
fn never_returns() -> ! {
    panic!("This function never returns");
}

fn main() {
    println!("--- Scalars ---");
    // Integers (signed/unsigned, sized and pointer-sized)
    let a: i32 = -42;
    let b: u8 = 255;
    let isize_val: isize = 7;
    println!("i32: {}, u8: {}, isize: {}", a, b, isize_val);

    // Floats
    let x: f64 = 3.1415;
    let y: f32 = 2.718_f32;
    println!("f64: {}, f32: {}", x, y);

    // char (Unicode scalar value)
    let c: char = '𝕽';
    let heart = '💖';
    println!("chars: {} {}", c, heart);

    // bool
    let t: bool = true;
    println!("bool: {}", t);

    println!("\n--- Compound types ---");
    // Tuples
    let tup: (i32, f64, char) = (500, 6.4, 'z');
    let (i, f, ch) = tup; // destructure
    println!("tuple: {:?}, destructured: {} {} {}", tup, i, f, ch);

    // Arrays and slices
    let arr: [i32; 4] = [1, 2, 3, 4];
    let slice_full: &[i32] = &arr;
    let slice_mid: &[i32] = &arr[1..3];
    println!("array: {:?}, full slice: {:?}, middle slice: {:?}", arr, slice_full, slice_mid);

    // Vectors (heap-allocated growable arrays)
    let mut vec: Vec<i32> = Vec::new();
    vec.push(10);
    vec.push(20);
    println!("vec: {:?}", vec);

    // Strings: &str (borrowed) vs String (owned)
    let s_slice: &str = "hello &str";
    let mut s_string: String = String::from("hello String");
    s_string.push('!');
    println!("&str: {}, String: {}", s_slice, s_string);

    println!("\n--- Structs, Tuple Structs, Enums ---");
    let p = Point { x: 3, y: 4 };
    println!("Point: {:?}", p);

    let col = Color(255, 165, 0);
    println!("Color tuple struct: ({}, {}, {})", col.0, col.1, col.2);

    let s1 = Shape::Circle { radius: 2.5 };
    let s2 = Shape::Rect { w: 3.0, h: 4.0 };
    match s1 {
        Shape::Circle { radius } => println!("circle radius: {}", radius),
        Shape::Rect { w, h } => println!("rect {}x{}", w, h),
        Shape::Unit => println!("unit variant"),
    }

    println!("\n--- Option and Result ---");
    let maybe: Option<i32> = Some(7);
    println!("Option unwrap_or: {}", maybe.unwrap_or(0));

    // Parsing demonstrates Result<T, E>.
    let parsed: Result<i32, _> = "42".parse::<i32>();
    match parsed {
        Ok(n) => println!("parsed number: {}", n),
        Err(e) => println!("parse error: {}", e),
    }

    println!("\n--- References and Borrowing ---");
    let val = 100;
    let ref_val: &i32 = &val;
    println!("value: {}, by ref: {}", val, ref_val);

    let mut owned = String::from("owned");
    borrow_and_mutate(&mut owned);
    println!("after mutate: {}", owned);

    println!("\n--- Raw pointers (unsafe) ---");
    let num = 123u32;
    let r_const: *const u32 = &num as *const u32;
    let r_mut: *mut u32 = &num as *const u32 as *mut u32; // allowed but unsafe to use mut
    unsafe {
        // Dereferencing raw pointers is unsafe.
        println!("raw const ptr points to: {}", *r_const);
        // Don't mutate memory behind r_mut here (it's pointing at immutable `num`).
    }

    println!("\n--- Unions (unsafe) ---");
    let u = IntOrFloat { f: 3.14 };
    unsafe {
        // Access must be in unsafe block.
        println!("union as float: {}", u.f);
    }

    println!("\n--- Functions, function pointers, closures ---");
    fn add(a: i32, b: i32) -> i32 {
        a + b
    }
    let fn_ptr: fn(i32, i32) -> i32 = add;
    println!("fn_ptr(2,3) = {}", fn_ptr(2, 3));

    let closure = |x: i32| x + 1;
    println!("closure(5) = {}", closure(5));

    println!("\n--- Generics and trait objects ---");
    let w = Wrapper(99);
    w.show();

    // Trait object: Box<dyn Display>
    let boxed: Box<dyn Display> = Box::new(3.1415);
    println!("boxed display: {}", boxed);

    println!("\n--- Constants and statics ---");
    const MAX: u32 = 1000;
    static GREETING: &str = "hi static";
    println!("const MAX: {}, static: {}", MAX, GREETING);

    println!("\n--- Unit and never types ---");
    let unit: () = ();
    println!("unit is {:?}", unit);

    // never_returns(); // Uncommenting would panic and never return.

    println!("\n--- Sized vs unsized (trait objects, slices) ---");
    let arr2 = [1, 2, 3];
    let slice2: &[i32] = &arr2;
    let boxed_slice: Box<[i32]> = Vec::from(arr2).into_boxed_slice();
    println!("slice len: {}, boxed slice: {:?}", slice2.len(), boxed_slice);

    println!("\n--- End of datatype tour ---");
}

fn borrow_and_mutate(s: &mut String) {
    s.push_str(" (mutated)");
}