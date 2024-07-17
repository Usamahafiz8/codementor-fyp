export const mockData = [
    {
        id: 1,
        title: "Java Arrays",
        description: "Learn about arrays in Java",
        detail: "Arrays in Java are used to store multiple values in a single variable. They are a fixed-size data structure that holds elements of the same data type. This tutorial covers how to declare, initialize, and access arrays.",
        codeExamples: `
        // Declaration and Initialization
        int[] numbers = new int[5];
        int[] moreNumbers = {1, 2, 3, 4, 5};

        // Accessing elements
        numbers[0] = 10;
        int firstNumber = moreNumbers[0];

        // Looping through arrays
        for(int i = 0; i < moreNumbers.length; i++) {
            System.out.println(moreNumbers[i]);
        }
        `,
        output: `
        1
        2
        3
        4
        5
        `
    },
    {
        id: 2,
        title: "Java Basics",
        description: "Introduction to Java",
        detail: "This tutorial introduces the basic concepts of Java, including syntax, data types, and basic operations. Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.",
        codeExamples: `
        // Basic Java Program
        public class HelloWorld {
            public static void main(String[] args) {
                System.out.println("Hello, World!");
            }
        }

        // Data types
        int number = 10;
        char letter = 'A';
        boolean flag = true;
        String message = "Welcome to Java";

        // Basic Operations
        int sum = number + 20;
        `,
        output: `
        Hello, World!
        `
    },
    {
        id: 3,
        title: "Java OOP Concepts",
        description: "Learn about Object-Oriented Programming in Java",
        detail: "Object-Oriented Programming (OOP) in Java focuses on using objects and classes. This tutorial covers key OOP principles like inheritance, encapsulation, and polymorphism.",
        codeExamples: `
        // Class and Object Example
        class Animal {
            String name;
            int age;

            void makeSound() {
                System.out.println("Animal sound");
            }
        }

        public class Dog extends Animal {
            void makeSound() {
                System.out.println("Bark");
            }

            public static void main(String[] args) {
                Dog dog = new Dog();
                dog.name = "Buddy";
                dog.age = 3;
                dog.makeSound();
            }
        }

        // Encapsulation Example
        class Person {
            private String name;
            private int age;

            public String getName() {
                return name;
            }

            public void setName(String name) {
                this.name = name;
            }

            public int getAge() {
                return age;
            }

            public void setAge(int age) {
                this.age = age;
            }
        }

        // Polymorphism Example
        class Shape {
            void draw() {
                System.out.println("Drawing Shape");
            }
        }

        class Circle extends Shape {
            void draw() {
                System.out.println("Drawing Circle");
            }
        }

        public class Main {
            public static void main(String[] args) {
                Shape shape = new Circle();
                shape.draw();
            }
        }
        `,
        output: `
        Bark
        Drawing Circle
        `
    },
    {
        id: 4,
        title: "Java Variables",
        description: "Learn about variables in Java",
        detail: "Variables in Java are used to store data. This tutorial explains how to declare, initialize, and use variables.",
        codeExamples: `
        // Declaration and Initialization
        int age = 25;
        String name = "John";
        boolean isStudent = true;

        // Using Variables
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Is Student: " + isStudent);
        `,
        output: `
        Name: John
        Age: 25
        Is Student: true
        `
    },
    {
        id: 5,
        title: "Java Control Flow",
        description: "Learn about control flow in Java",
        detail: "Control flow statements in Java determine the order in which statements are executed. This tutorial covers if-else, switch-case, loops, and more.",
        codeExamples: `
        // If-Else Statement
        int age = 18;
        if(age >= 18) {
            System.out.println("Adult");
        } else {
            System.out.println("Minor");
        }

        // Switch-Case Statement
        int day = 2;
        switch(day) {
            case 1:
                System.out.println("Monday");
                break;
            case 2:
                System.out.println("Tuesday");
                break;
            default:
                System.out.println("Other day");
        }

        // For Loop
        for(int i = 0; i < 5; i++) {
            System.out.println(i);
        }

        // While Loop
        int i = 0;
        while(i < 5) {
            System.out.println(i);
            i++;
        }
        `,
        output: `
        Adult
        Tuesday
        0
        1
        2
        3
        4
        0
        1
        2
        3
        4
        `
    },
    {
        id: 6,
        title: "Java Methods",
        description: "Learn about methods in Java",
        detail: "Methods in Java are blocks of code that perform a specific task. This tutorial explains how to declare, call, and use methods.",
        codeExamples: `
        // Method Declaration
        public class Calculator {
            // Method to add two numbers
            public int add(int a, int b) {
                return a + b;
            }

            public static void main(String[] args) {
                Calculator calculator = new Calculator();
                int sum = calculator.add(5, 10);
                System.out.println("Sum: " + sum);
            }
        }
        `,
        output: `
        Sum: 15
        `
    },
    {
        id: 7,
        title: "Java Classes and Objects",
        description: "Learn about classes and objects in Java",
        detail: "Classes and objects are the core of Java's OOP approach. This tutorial covers how to create and use classes and objects.",
        codeExamples: `
        // Class and Object Example
        class Car {
            String model;
            int year;

            void displayInfo() {
                System.out.println("Model: " + model);
                System.out.println("Year: " + year);
            }
        }

        public class Main {
            public static void main(String[] args) {
                Car car = new Car();
                car.model = "Tesla Model S";
                car.year = 2020;
                car.displayInfo();
            }
        }
        `,
        output: `
        Model: Tesla Model S
        Year: 2020
        `
    },
    {
        id: 8,
        title: "Java Inheritance",
        description: "Learn about inheritance in Java",
        detail: "Inheritance allows a class to inherit fields and methods from another class. This tutorial explains how inheritance works in Java.",
        codeExamples: `
        // Inheritance Example
        class Animal {
            void eat() {
                System.out.println("Eating...");
            }
        }

        class Dog extends Animal {
            void bark() {
                System.out.println("Barking...");
            }
        }

        public class Main {
            public static void main(String[] args) {
                Dog dog = new Dog();
                dog.eat();
                dog.bark();
            }
        }
        `,
        output: `
        Eating...
        Barking...
        `
    },
    {
        id: 9,
        title: "Java Polymorphism",
        description: "Learn about polymorphism in Java",
        detail: "Polymorphism in Java allows objects to be treated as instances of their parent class. This tutorial covers the concept and its implementation.",
        codeExamples: `
        // Polymorphism Example
        class Animal {
            void makeSound() {
                System.out.println("Animal sound");
            }
        }

        class Dog extends Animal {
            void makeSound() {
                System.out.println("Bark");
            }
        }

        class Cat extends Animal {
            void makeSound() {
                System.out.println("Meow");
            }
        }

        public class Main {
            public static void main(String[] args) {
                Animal myDog = new Dog();
                Animal myCat = new Cat();
                myDog.makeSound();
                myCat.makeSound();
            }
        }
        `,
        output: `
        Bark
        Meow
        `
    },
    {
        id: 10,
        title: "Java Interfaces",
        description: "Learn about interfaces in Java",
        detail: "Interfaces in Java are abstract types used to specify behavior. This tutorial explains how to define and implement interfaces.",
        codeExamples: `
        // Interface Example
        interface Animal {
            void eat();
            void makeSound();
        }
// Complete ID 10
        class Dog implements Animal {
            public void eat() {
                System.out.println("Dog is eating");
            }

            public void makeSound() {
                System.out.println("Bark");
            }
        }

        public class Main {
            public static void main(String[] args) {
                Dog dog = new Dog();
                dog.eat();
                dog.makeSound();
            }
        }
        `,
        output: `
        Dog is eating
        Bark
        `
    },
    {
        id: 11,
        title: "Java Abstract Classes",
        description: "Learn about abstract classes in Java",
        detail: "Abstract classes in Java cannot be instantiated and are used to declare common characteristics. This tutorial covers how to use abstract classes.",
        codeExamples: `
        // Abstract Class Example
        abstract class Animal {
            abstract void makeSound();

            void sleep() {
                System.out.println("Sleeping...");
            }
        }

        class Dog extends Animal {
            void makeSound() {
                System.out.println("Bark");
            }
        }

        public class Main {
            public static void main(String[] args) {
                Dog dog = new Dog();
                dog.makeSound();
                dog.sleep();
            }
        }
        `,
        output: `
        Bark
        Sleeping...
        `
    },
    {
        id: 12,
        title: "Java Exception Handling",
        description: "Learn about exception handling in Java",
        detail: "Exception handling in Java is used to handle runtime errors. This tutorial explains try-catch blocks, throw, throws, and custom exceptions.",
        codeExamples: `
        // Exception Handling Example
        public class Main {
            public static void main(String[] args) {
                try {
                    int divideByZero = 5 / 0;
                } catch (ArithmeticException e) {
                    System.out.println("Cannot divide by zero");
                } finally {
                    System.out.println("This is the finally block");
                }
            }
        }
        `,
        output: `
        Cannot divide by zero
        This is the finally block
        `
    },
    {
        id: 13,
        title: "Java File I/O",
        description: "Learn about file input/output in Java",
        detail: "File I/O in Java allows you to read from and write to files. This tutorial covers the basics of file handling using Java.",
        codeExamples: `
        // File I/O Example
        import java.io.File;
        import java.io.FileWriter;
        import java.io.IOException;

        public class Main {
            public static void main(String[] args) {
                try {
                    FileWriter writer = new FileWriter("output.txt");
                    writer.write("Hello, file!");
                    writer.close();

                    File file = new File("output.txt");
                    Scanner reader = new Scanner(file);
                    while (reader.hasNextLine()) {
                        String data = reader.nextLine();
                        System.out.println(data);
                    }
                    reader.close();
                } catch (IOException e) {
                    System.out.println("An error occurred.");
                    e.printStackTrace();
                }
            }
        }
        `,
        output: `
        Hello, file!
        `
    },
    {
        id: 14,
        title: "Java Collections Framework",
        description: "Learn about the collections framework in Java",
        detail: "The Java Collections Framework provides a set of classes and interfaces for managing groups of objects. This tutorial explains lists, sets, maps, and more.",
        codeExamples: `
        // Collections Framework Example
        import java.util.ArrayList;
        import java.util.HashMap;

        public class Main {
            public static void main(String[] args) {
                // List Example
                ArrayList<String> list = new ArrayList<>();
                list.add("Apple");
                list.add("Banana");
                list.add("Cherry");

                // Iterate over list
                for (String fruit : list) {
                    System.out.println(fruit);
                }

                // Map Example
                HashMap<String, Integer> map = new HashMap<>();
                map.put("Apple", 1);
                map.put("Banana", 2);
                map.put("Cherry", 3);

                // Iterate over map
                for (String key : map.keySet()) {
                    System.out.println("Key: " + key + ", Value: " + map.get(key));
                }
            }
        }
        `,
        output: `
        Apple
        Banana
        Cherry
        Key: Apple, Value: 1
        Key: Banana, Value: 2
        Key: Cherry, Value: 3
        `
    },
    {
        id: 15,
        title: "Java Generics",
        description: "Learn about generics in Java",
        detail: "Generics in Java allow you to write flexible and reusable code. This tutorial covers how to use generics with classes and methods.",
        codeExamples: `
        // Generics Example
        public class Box<T> {
            private T t;

            public void set(T t) {
                this.t = t;
            }

            public T get() {
                return t;
            }
        }

        public class Main {
            public static void main(String[] args) {
                Box<Integer> integerBox = new Box<>();
                integerBox.set(10);
                System.out.println("Integer Value: " + integerBox.get());

                Box<String> stringBox = new Box<>();
                stringBox.set("Hello Generics");
                System.out.println("String Value: " + stringBox.get());
            }
        }
        `,
        output: `
        Integer Value: 10
        String Value: Hello Generics
        `
    },
    {
        id: 16,
        title: "Java Lambda Expressions",
        description: "Learn about lambda expressions in Java",
        detail: "Lambda expressions in Java provide a clear and concise way to represent one method interface. This tutorial explains how to use lambda expressions.",
        codeExamples: `
        // Lambda Expressions Example
        import java.util.ArrayList;

        public class Main {
            public static void main(String[] args) {
                ArrayList<Integer> numbers = new ArrayList<>();
                numbers.add(5);
                numbers.add(9);
                numbers.add(8);
                numbers.add(1);

                numbers.forEach((n) -> {
                    System.out.println(n);
                });
            }
        }
        `,
        output: `
        5
        9
        8
        1
        `
    },
    {
        id: 17,
        title: "Java Streams API",
        description: "Learn about the streams API in Java",
        detail: "The Streams API in Java provides a functional approach to processing sequences of elements. This tutorial covers the basics of using streams.",
        codeExamples: `
        // Streams API Example
        import java.util.ArrayList;
        import java.util.List;
        import java.util.stream.Collectors;

        public class Main {
            public static void main(String[] args) {
                List<String> strings = new ArrayList<>();
                strings.add("abc");
                strings.add("");
                strings.add("bc");
                strings.add("efg");
                strings.add("abcd", " ", "12345");
                strings.add("");

                List<String> filtered = strings.stream()
                    .filter(string -> !string.isEmpty())
                    .collect(Collectors.toList());

                System.out.println(filtered);
            }
        }
        `,
        output: `
        [abc, bc, efg, abcd, 12345]
        `
    },
    {
        id: 18,
        title: "Java Multithreading",
        description: "Learn about multithreading in Java",
        detail: "Multithreading in Java allows concurrent execution of two or more threads. This tutorial explains how to create and manage threads.",
        codeExamples: `
        // Multithreading Example
        class Multithread extends Thread {
            public void run() {
                try {
                    System.out.println("Thread " + Thread.currentThread().getId() + " is running");
                } catch (Exception e) {
                    System.out.println("Exception is caught");
                }
            }
        }

        public class Main {
            public static void main(String[] args) {
                int n = 8; // Number of threads
                for (int i = 0; i < n; i++) {
                    Multithread object = new Multithread();
                    object.start();
                }
            }
        }
        `,
        output: `
        Thread 1 is running
        Thread 2 is running
        Thread 3 is running
        Thread 4 is running
        Thread 5 is running
        Thread 6 is running
        Thread 7 is running
        Thread 8 is running
        `
    },
    {
        id: 19,
        title: "Java Concurrency",
        description: "Learn about concurrency in Java",
        detail: "Concurrency in Java is the ability to run several programs or threads simultaneously. This tutorial covers synchronization, locks, and concurrent collections.",
        codeExamples: `
        // Concurrency Example
        import java.util.concurrent.locks.ReentrantLock;

        class SharedResource {
            private final ReentrantLock lock = new ReentrantLock();

            public void doWork() {
                lock.lock();
                try {
                    System.out.println(Thread.currentThread().getName() + " is working");
                } finally {
                    lock.unlock();
                }
            }
        }

        class Worker extends Thread {
            private final SharedResource resource;

            public Worker(SharedResource resource) {
                this.resource = resource;
            }

            public void run() {
                resource.doWork();
            }
        }

        public class Main {
            public static void main(String[] args) {
                SharedResource resource = new SharedResource();
                Worker t1 = new Worker(resource);
        Worker t2 = new Worker(resource);
        t1.start();
        t2.start();
            }
        }
        `,
        output: `
        Thread-0 is working
        Thread-1 is working
        `
    },
    {
        id: 20,
        title: "Java Networking",
        description: "Learn about networking in Java",
        detail: "Networking in Java allows you to connect to other computers to exchange data. This tutorial explains sockets, URLs, and network protocols.",
        codeExamples: `
        // Networking Example
        import java.io.*;
        import java.net.*;

        public class Main {
            public static void main(String[] args) {
                try {
                    Socket socket = new Socket("localhost", 8080);
                    PrintWriter out = new PrintWriter(socket.getOutputStream(), true);
                    BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));

                    out.println("Hello Server");
                    String response = in.readLine();
                    System.out.println("Server Response: " + response);

                    socket.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
        `,
        output: `
        Server Response: Hello Client
        `
    },
    {
        id: 21,
        title: "Java GUI Programming",
        description: "Learn about GUI programming in Java",
        detail: "GUI programming in Java involves creating graphical user interfaces. This tutorial covers the basics of using Java's GUI libraries.",
        codeExamples: `
        // GUI Programming Example
        import javax.swing.*;

        public class Main {
            public static void main(String[] args) {
                JFrame frame = new JFrame("My First GUI");
                frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
                frame.setSize(300, 300);

                JButton button = new JButton("Press");
                frame.getContentPane().add(button); // Adds Button to content pane of frame
                frame.setVisible(true);
            }
        }
        `,
        output: `
        // A GUI window with a button labeled "Press"
        `
    },
    {
        id: 22,
        title: "Java Swing",
        description: "Learn about Swing in Java",
        detail: "Swing in Java is a GUI toolkit for creating desktop applications. This tutorial explains how to create and manage Swing components.",
        codeExamples: `
        // Swing Example
        import javax.swing.*;
        import java.awt.event.ActionEvent;
        import java.awt.event.ActionListener;

        public class Main {
            public static void main(String[] args) {
                JFrame frame = new JFrame("Swing Example");
                JButton button = new JButton("Click Me");

                button.addActionListener(new ActionListener() {
                    public void actionPerformed(ActionEvent e) {
                        JOptionPane.showMessageDialog(null, "Button was clicked!");
                    }
                });

                frame.setSize(400, 400);
                frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
                frame.getContentPane().add(button);
                frame.setVisible(true);
            }
        }
        `,
        output: `
        // A GUI window with a button that shows a message dialog when clicked
        `
    },
    {
        id: 23,
        title: "JavaFX",
        description: "Learn about JavaFX",
        detail: "JavaFX is a software platform for creating rich internet applications. This tutorial covers the basics of using JavaFX for GUI development.",
        codeExamples: `
        // JavaFX Example
        import javafx.application.Application;
        import javafx.scene.Scene;
        import javafx.scene.control.Button;
        import javafx.scene.layout.StackPane;
        import javafx.stage.Stage;

        public class Main extends Application {
            @Override
            public void start(Stage primaryStage) {
                Button btn = new Button();
                btn.setText("Say 'Hello World'");
                btn.setOnAction(event -> System.out.println("Hello World"));

                StackPane root = new StackPane();
                root.getChildren().add(btn);

                Scene scene = new Scene(root, 300, 250);
                primaryStage.setTitle("JavaFX Example");
                primaryStage.setScene(scene);
                primaryStage.show();
            }

            public static void main(String[] args) {
                launch(args);
            }
        }
        `,
        output: `
        // A GUI window with a button that prints "Hello World" to the console when clicked
        `
    },
    {
        id: 24,
        title: "Java JDBC",
        description: "Learn about JDBC in Java",
        detail: "JDBC (Java Database Connectivity) allows Java applications to interact with databases. This tutorial explains how to use JDBC for database operations.",
        codeExamples: `
        // JDBC Example
        import java.sql.Connection;
        import java.sql.DriverManager;
        import java.sql.ResultSet;
        import java.sql.Statement;

        public class Main {
            public static void main(String[] args) {
                try {
                    Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/mydatabase", "root", "password");
                    Statement statement = connection.createStatement();
                    ResultSet resultSet = statement.executeQuery("SELECT * FROM users");

                    while (resultSet.next()) {
                        System.out.println("User: " + resultSet.getString("username"));
                    }

                    connection.close();
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        }
        `,
        output: `
        User: alice
        User: bob
        `
    },
    {
        id: 25,
        title: "Java Annotations",
        description: "Learn about annotations in Java",
        detail: "Annotations in Java provide metadata about the program. This tutorial explains how to use and create annotations.",
        codeExamples: `
        // Annotations Example
        import java.lang.annotation.*;

        @Retention(RetentionPolicy.RUNTIME)
        @Target(ElementType.METHOD)
        @interface MyAnnotation {
            String value();
        }

        public class Main {
            @MyAnnotation(value = "example")
            public void myMethod() {
                System.out.println("My Method");
            }

            public static void main(String[] args) {
                Main obj = new Main();
                obj.myMethod();

                MyAnnotation annotation = obj.getClass().getMethod("myMethod").getAnnotation(MyAnnotation.class);
                System.out.println("Annotation Value: " + annotation.value());
            }
        }
        `,
        output: `
        My Method
        Annotation Value: example
        `
    },
    {
        id: 26,
        title: "Java Reflection",
        description: "Learn about reflection in Java",
        detail: "Reflection in Java allows you to inspect and manipulate classes at runtime. This tutorial covers the basics of using reflection.",
        codeExamples: `
        // Reflection Example
        import java.lang.reflect.Method;

        public class Main {
            public static void main(String[] args) {
                try {
                    Class<?> cls = Class.forName("java.lang.String");
                    Method[] methods = cls.getDeclaredMethods();

                    for (Method method : methods) {
                        System.out.println(method.getName());
                    }
                } catch (ClassNotFoundException e) {
                    e.printStackTrace();
                }
            }
        }
        `,
        output: `
        // Prints all method names of the String class
        `
    },
    {
        id: 27,
        title: "Java Serialization",
        description: "Learn about serialization in Java",
        detail: "Serialization in Java is the process of converting an object into a byte stream. This tutorial explains how to serialize and deserialize objects.",
        codeExamples: `
        // Serialization Example
        import java.io.*;

        class Person implements Serializable {
            private static final long serialVersionUID = 1L;
            String name;
            int age;

            public Person(String name, int age) {
                this.name = name;
                this.age = age;
            }
        }

        public class Main {
            public static void main(String[] args) {
                Person person = new Person("Alice", 30);

                try {
                    // Serialization
                    FileOutputStream fileOut = new FileOutputStream("person.ser");
                    ObjectOutputStream out = new ObjectOutputStream(fileOut);
                    out.writeObject(person);
                    out.close();
                    fileOut.close();

                    // Deserialization
                    FileInputStream fileIn = new FileInputStream("person.ser");
                    ObjectInputStream in = new ObjectInputStream(fileIn);
                    Person deserializedPerson = (Person) in.readObject();
                    in.close();
                    fileIn.close();

                    System.out.println("Deserialized Person: " + deserializedPerson.name + ", " + deserializedPerson.age);
                } catch (IOException | ClassNotFoundException e) {
                    e.printStackTrace();
                }
            }
        }
        `,
        output: `
        Deserialized Person: Alice, 30
        `
    },
    {
        id: 28,
        title: "Java RMI",
        description: "Learn about Remote Method Invocation (RMI) in Java",
        detail: "RMI in Java allows objects to invoke methods on remote objects. This tutorial covers the basics of using RMI.",
        codeExamples: `
        // RMI Example
        import java.rmi.*;
        import java.rmi.registry.*;
        import java.rmi.server.*;

        // Remote Interface
        interface Hello extends Remote {
            String sayHello() throws RemoteException;
        }

        // Implementation of the Remote Interface
        public class HelloImpl extends UnicastRemoteObject implements Hello {
            public HelloImpl() throws RemoteException {}

            public String sayHello() {
                return "Hello, world!";
            }

            public static void main(String[] args) {
                try {
                    HelloImpl obj = new HelloImpl();
                    Naming.rebind("Hello", obj);
                    System.out.println("Hello bound in registry");
                } catch (Exception e) {
                    System.out.println("HelloImpl exception: " + e.getMessage());
                    e.printStackTrace();
                }
            }
        }

        // Client Program
        public class HelloClient {
            public static void main(String[] args) {
                try {
                    Hello obj = (Hello) Naming.lookup("//localhost/Hello");
                    System.out.println("Message from server: " + obj.sayHello());
                } catch (Exception e) {
                    System.out.println("HelloClient exception: " + e.getMessage());
                    e.printStackTrace();
                }
            }
        }
        `,
        output: `
        Hello bound in registry
        Message from server: Hello, world!
        `
    },
    {
        id: 29,
        title: "Java Design Patterns",
        description: "Learn about design patterns in Java",
        detail: "Design patterns in Java are standard solutions to common problems. This tutorial explains various design patterns and their implementation.",
        codeExamples: `
        // Singleton Pattern Example
        class Singleton {
            private static Singleton instance;

            private Singleton() {}

            public static Singleton getInstance() {
                if (instance == null) {
                    instance = new Singleton();
                }
                return instance;
            }
        }

        public class Main {
            public static void main(String[] args) {
                Singleton singleton1 = Singleton.getInstance();
                Singleton singleton2 = Singleton.getInstance();
                
                System.out.println(singleton1 == singleton2); // should print true
            }
        }
        `,
        output: `
        true
        `
    },
    {
        id: 30,
        title: "Java Best Practices",
        description: "Learn about best practices in Java",
        detail: "Best practices in Java help you write efficient and maintainable code. This tutorial covers coding standards, performance tips, and more.",
        codeExamples: `
        // Best Practices Example
        public class Main {
            // Use meaningful variable names
            private int userAge;

            // Follow naming conventions
            private static final int MAX_SIZE = 100;

            // DRY Principle: Avoid code duplication
            public void printMessage(String message) {
                System.out.println(message);
            }

            public static void main(String[] args) {
                Main main = new Main();
                main.userAge = 25;
                main.printMessage("Hello, Best Practices");
            }
        }
        `,
        output: `
        Hello, Best Practices
        `
    }
];