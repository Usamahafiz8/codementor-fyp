import React from "react";
import { Link } from "react-router-dom";
import "./PersonalizedLearningPaths.css";

// Define the structured Java learning path
const javaLearningPath = [
  {
    id: 1,
    level: "Easy",
    title: "Introduction to Java",
    description: "Learn the basics of Java programming language.",
    steps: [
      {
        title: "History of Java",
        detail: "Explore the origins and evolution of Java.",
        code: "// Java was created by James Gosling at Sun Microsystems"
      },
      {
        title: "Installation and Setup",
        detail: "Set up the Java Development Kit (JDK) and Integrated Development Environment (IDE).",
        code: "// Check Java version\n// java -version"
      },
      {
        title: "Hello World Program",
        detail: "Write and run your first Java program.",
        code: `public class HelloWorld {\n  public static void main(String[] args) {\n    System.out.println("Hello, World!");\n  }\n}`
      }
    ]
  },
  {
    id: 2,
    level: "Intermediate",
    title: "Intermediate Java Concepts",
    description: "Build upon your basic Java knowledge with more advanced concepts.",
    steps: [
      {
        title: "Basic Syntax and Structure",
        detail: "Understand the basic structure and syntax of a Java program.",
        code: `public class Main {\n  public static void main(String[] args) {\n    // Single line comment\n    System.out.println("Basic Syntax");\n  }\n}`
      },
      {
        title: "Variables and Data Types",
        detail: "Learn about variables, data types, and how to use them.",
        code: `int number = 5;\nString text = "Hello";\nSystem.out.println(number + " " + text);`
      },
      {
        title: "Control Flow Statements",
        detail: "Master conditional statements and loops in Java.",
        code: `int num = 10;\nif (num > 0) {\n  System.out.println("Positive number");\n}`
      }
    ]
  },
  {
    id: 3,
    level: "Advanced",
    title: "Advanced Java Topics",
    description: "Explore advanced topics and features in Java programming.",
    steps: [
      {
        title: "Object-Oriented Programming (OOP)",
        detail: "Understand the principles of OOP and its implementation in Java.",
        code: `class Car {\n  private String brand;\n\n  public Car(String brand) {\n    this.brand = brand;\n  }\n\n  public void displayInfo() {\n    System.out.println("Brand: " + brand);\n  }\n}`
      },
      {
        title: "Exception Handling",
        detail: "Learn how to handle exceptions and errors in Java applications.",
        code: `try {\n  // code that may throw an exception\n} catch (Exception e) {\n  System.out.println("An error occurred.");\n}`
      },
      {
        title: "Collections Framework",
        detail: "Explore Java's built-in data structures like ArrayList and HashMap.",
        code: `List<String> list = new ArrayList<>();\nlist.add("Java");\nSystem.out.println(list.get(0));`
      }
    ]
  }
];


const PersonalizedLearningPaths = () => {
  return (
    <div className="container flex flex-col gap-5">
      <h1 className="text-center text-white mb-4 display-4">
        Personalized Learning Paths
      </h1>
      <div className="row">
        {javaLearningPath.map((path) => (
          <div key={path.id} className="">
            <div className="card h-100 shadow-sm">
              <div className="card-header bg-primary text-white">
                <h5 className="card-title mb-0">{path.title}</h5>
              </div>
              <div className="card-body">
                <p className="card-text">{path.description}</p>
                <ul className="list-group list-group-flush">
                  {path.steps.map((step, index) => (
                    <li key={index} className="list-group-item">
                      <i className="bi bi-check-circle-fill text-success"></i>{" "}
                      <strong>{step.title}</strong>: {step.detail}
                      <pre className="bg-light p-2 mt-2">{step.code}</pre>
                    </li>
                  ))}
                </ul>
                {/* <Link to={/learning-paths/${path.id}} className="btn btn-primary mt-3 w-100">Explore Path</Link> */}
              </div>
              <div className="card-footer">
                <small className="text-muted">Updated 2024</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalizedLearningPaths;
