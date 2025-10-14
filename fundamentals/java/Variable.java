/*
 * Titile: Variable.java
 * Description: write description here
 * Author: Muhammad Khairul Bashar Sakib ( MKBS )
 * Date: 14/10/2025 18:56:07
 */

public class Variable {

        // Static (class) variable: shared by all instances
        static int staticCounter = 0;

        // Constant (compile-time constant if initialized with literal/expression of
        // literals)
        static final double PI = 3.141592653589793;

        // Instance (object) variable: each object gets its own copy
        int instanceCounter = 0;

        // Field modifiers often seen with variables
        transient String transientSecret = "top-secret"; // skipped by default Java serialization
        volatile int volatileFlag = 0; // hint for cross-thread visibility

        // Field used to demonstrate shadowing
        int x = 5;

        // Helper inner type to show default values on fields
        static class Defaults {
                // Primitives default to 0/false; references default to null
                byte b;
                short s;
                int i;
                long l;
                float f;
                double d;
                char c; // default '\u0000'
                boolean bool; // default false
                String ref; // default null

                void print() {
                        System.out.println("Default byte: " + b);
                        System.out.println("Default short: " + s);
                        System.out.println("Default int: " + i);
                        System.out.println("Default long: " + l);
                        System.out.println("Default float: " + f);
                        System.out.println("Default double: " + d);
                        System.out.println("Default char (as int code): " + (int) c);
                        System.out.println("Default boolean: " + bool);
                        System.out.println("Default reference: " + ref);
                }
        }

        // Varargs example: parameter is an array under the hood
        static int sum(int... nums) {
                int total = 0;
                for (int n : nums)
                        total += n;
                return total;
        }

        // Demonstrates variable shadowing (local shadows field)
        void shadowingDemo() {
                int x = 10; // shadows this.x
                System.out.println("Local x: " + x);
                System.out.println("Field x via this.x: " + this.x);
        }

        // Demonstrates static vs instance variables
        void tick() {
                instanceCounter++;
                staticCounter++;
        }

        public static void main(String[] args) {
                System.out.println("=== Declarations & Initialization ===");
                // Primitives
                byte by = 127;
                short sh = 32_767;
                int in = 2_147_483_647;
                long lo = 9_223_372_036_854_775_807L; // 'L' suffix for long literals

                float fl = 3.14f; // 'f' suffix for float
                double db = 2.718281828459045;

                char ch = 'Ω'; // 16-bit Unicode
                boolean ok = true;

                System.out.println("byte: " + by + ", short: " + sh + ", int: " + in + ", long: " + lo);
                System.out.println("float: " + fl + ", double: " + db);
                System.out.println("char: " + ch + ", boolean: " + ok);

                System.out.println("\n=== Numeric Literals & Bases ===");
                int million = 1_000_000; // underscores for readability
                int bin = 0b1010_1100; // binary literal
                int hex = 0xFF_EC_DE_5E; // hex literal
                double tau = 6.283_185_307_179_586;
                System.out.println("million: " + million + ", bin: " + bin + ", hex: " + hex + ", tau: " + tau);

                System.out.println("\n=== Widening, Narrowing & Overflow ===");
                int iFromByte = by; // widening (safe)
                byte bFromInt = (byte) 130; // narrowing (overflow/precision loss)
                System.out.println("iFromByte: " + iFromByte + ", bFromInt(130 -> byte): " + bFromInt);
                int a = 1_000_000;
                int b = 2_000;
                long risky = (long) a * b; // cast before multiply to avoid int overflow
                System.out.println("Safe multiply in long: " + risky);
                int promoted = 'A' + 1; // char promoted to int in arithmetic
                System.out.println("'A' + 1 = " + promoted + " (char code)");

                System.out.println("\n=== Reference Types, Strings, Arrays ===");
                String s = "hello";
                String t = s; // both reference the same String instance (Strings are immutable)
                int[] arr = { 1, 2, 3 };
                arr[1] = 42;
                System.out.println("String s: " + s + ", t: " + t);
                System.out.println("Array length: " + arr.length + ", contents: [" + arr[0] + ", " + arr[1] + ", "
                                + arr[2] + "]");
                final int[] constRef = { 9, 9, 9 }; // final reference cannot be reassigned, but contents can change
                constRef[0] = 1;
                System.out.println("final array contents: [" + constRef[0] + ", " + constRef[1] + ", " + constRef[2]
                                + "]");

                System.out.println("\n=== Autoboxing / Unboxing ===");
                Integer boxed = in; // autobox
                int unboxed = boxed; // unbox
                System.out.println("boxed: " + boxed + ", unboxed: " + unboxed);

                System.out.println("\n=== final (Constants) ===");
                final int DAYS_IN_WEEK = 7;
                // DAYS_IN_WEEK = 8; // error: cannot assign a value to final variable
                System.out.println("PI: " + PI + ", DAYS_IN_WEEK: " + DAYS_IN_WEEK);

                System.out.println("\n=== Default Values (Fields) vs Locals ===");
                Defaults defs = new Defaults();
                defs.print();
                // Local variables must be definitely assigned before use:
                // int uninitLocal; System.out.println(uninitLocal); // compile error

                System.out.println("\n=== Scope & Shadowing ===");
                VariableGuide guide = new VariableGuide();
                guide.shadowingDemo();
                {
                        int scoped = 123;
                        System.out.println("Block-scoped var: " + scoped);
                }
                // System.out.println(scoped); // out of scope here

                System.out.println("\n=== Static vs Instance Variables ===");
                VariableGuide g1 = new VariableGuide();
                VariableGuide g2 = new VariableGuide();
                g1.tick(); // instanceCounter(g1)=1, staticCounter=1
                g1.tick(); // instanceCounter(g1)=2, staticCounter=2
                g2.tick(); // instanceCounter(g2)=1, staticCounter=3
                System.out.println("g1.instanceCounter: " + g1.instanceCounter);
                System.out.println("g2.instanceCounter: " + g2.instanceCounter);
                System.out.println("VariableGuide.staticCounter: " + VariableGuide.staticCounter);

                System.out.println("\n=== Varargs (Parameters) ===");
                System.out.println("sum(1,2,3,4) = " + sum(1, 2, 3, 4));

                System.out.println("\n=== volatile & transient (demonstration only) ===");
                guide.volatileFlag = 1; // visible across threads sooner than non-volatile (not demonstrated here)
                guide.transientSecret = "hidden-in-serialization";
                System.out.println("volatileFlag set to: " + guide.volatileFlag);
                System.out.println("transientSecret (runtime): " + guide.transientSecret);

                System.out.println("\n=== Lambdas & Effectively final locals ===");
                final String prefix = "Value: "; // effectively final allows capture
                int captured = 42; // effectively final (no reassignment)
                Runnable r = () -> System.out.println(prefix + captured);
                r.run();

                System.out.println("\n=== Command-line args variable ===");
                System.out.println("args length: " + args.length);
                if (args.length > 0) {
                        System.out.println("first arg: " + args[0]);
                }

                System.out.println("\n=== Notes ===");
                System.out.println("- Use descriptive names; follow lowerCamelCase for variables.");
                System.out.println("- Initialize locals before first use.");
                System.out.println("- Prefer final for constants and to express intent.");
                System.out.println("- Beware of narrowing casts and overflow.");
                // Local variable type inference (Java 10+):
                // var n = 123; var text = "hi"; // 'var' is not a keyword in older Java
        }
}