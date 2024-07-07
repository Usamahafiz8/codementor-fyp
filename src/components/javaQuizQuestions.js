// javaQuizQuestions.js

const javaQuizQuestions = [
    {
      id: 1,
      question: "What is the output of the following Java code snippet?\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        int x = 5;\n        System.out.println(x++ + ++x);\n    }\n}\n```",
      options: ["10", "11", "12", "13"],
      correctAnswer: "12"
    },
    {
      id: 2,
      question: "Which of the following is not a valid Java identifier?",
      options: ["$variableName", "myVariableName", "2ndVariable", "_variableName"],
      correctAnswer: "2ndVariable"
    },
    {
      id: 3,
      question: "What is the default value of a boolean variable in Java?",
      options: ["true", "false", "null", "0"],
      correctAnswer: "false"
    },
    {
      id: 4,
      question: "Which keyword is used to prevent method overriding in Java?",
      options: ["static", "final", "private", "abstract"],
      correctAnswer: "final"
    },
    {
      id: 5,
      question: "What is the result of 10 % 3 in Java?",
      options: ["0", "1", "2", "3"],
      correctAnswer: "1"
    },
    {
      id: 6,
      question: "Which collection class allows null as a key in Java?",
      options: ["HashMap", "TreeMap", "LinkedHashMap", "Hashtable"],
      correctAnswer: "HashMap"
    },
    {
      id: 7,
      question: "What is the purpose of a static block in Java?",
      options: ["To initialize non-static variables", "To initialize static variables", "To define static methods", "To define constructors"],
      correctAnswer: "To initialize static variables"
    },
    {
      id: 8,
      question: "Which access modifier allows a class to be accessible only within the same package?",
      options: ["private", "protected", "default", "public"],
      correctAnswer: "default"
    },
    {
      id: 9,
      question: "What is the output of the following code?\n\n```java\npublic class Test {\n    public static void main(String[] args) {\n        int[] arr = new int[5];\n        System.out.println(arr[0]);\n    }\n}\n```",
      options: ["0", "null", "undefined", "Error"],
      correctAnswer: "0"
    },
    {
      id: 10,
      question: "Which exception is thrown by Java Virtual Machine (JVM) when an application tries to divide a number by zero?",
      options: ["ArithmeticException", "NullPointerException", "IndexOutOfBoundsException", "NumberFormatException"],
      correctAnswer: "ArithmeticException"
    },
    {
      id: 11,
      question: "What is the superclass of all exception classes in Java?",
      options: ["RuntimeException", "Exception", "Throwable", "Error"],
      correctAnswer: "Throwable"
    },
    {
      id: 12,
      question: "Which Java keyword is used to define a class that cannot be instantiated and can only have static members?",
      options: ["static", "final", "abstract", "enum"],
      correctAnswer: "abstract"
    },
    {
      id: 13,
      question: "What is the output of the following code?\n\n```java\npublic class Test {\n    public static void main(String[] args) {\n        String s1 = \"Hello\";\n        String s2 = new String(\"Hello\");\n        System.out.println(s1 == s2);\n    }\n}\n```",
      options: ["true", "false", "Compilation Error", "Runtime Error"],
      correctAnswer: "false"
    },
    {
      id: 14,
      question: "Which Java keyword is used to define a variable that can hold a reference to any object?",
      options: ["var", "object", "dynamic", "final"],
      correctAnswer: "var"
    },
    {
      id: 15,
      question: "What is the purpose of the 'transient' keyword in Java?",
      options: ["To define transient variables", "To specify that a variable is not serialized during serialization", "To define variables that cannot be changed", "To specify that a variable is serialized during serialization"],
      correctAnswer: "To specify that a variable is not serialized during serialization"
    },
    {
      id: 16,
      question: "What is the output of the following code?\n\n```java\npublic class Test {\n    public static void main(String[] args) {\n        String str = \"Hello\";\n        System.out.println(str.substring(0, 2));\n    }\n}\n```",
      options: ["He", "Hel", "H", "ello"],
      correctAnswer: "He"
    },
    {
      id: 17,
      question: "What is the output of the following code?\n\n```java\npublic class Test {\n    public static void main(String[] args) {\n        int x = 10;\n        if (x == 10) {\n            System.out.println(\"x is 10\");\n        } else {\n            System.out.println(\"x is not 10\");\n        }\n    }\n}\n```",
      options: ["x is 10", "x is not 10", "Compilation Error", "Runtime Error"],
      correctAnswer: "x is 10"
    },
    {
      id: 18,
      question: "What is the purpose of the 'super' keyword in Java?",
      options: ["To call a method from the superclass", "To access superclass fields", "To invoke superclass constructor", "To override superclass methods"],
      correctAnswer: "To call a method from the superclass"
    },
    {
      id: 19,
      question: "Which operator is used to allocate memory to an object in Java?",
      options: ["new", "malloc", "alloc", "create"],
      correctAnswer: "new"
    },
    {
      id: 20,
      question: "What is the default value of an array of integers in Java?",
      options: ["0", "null", "undefined", "Error"],
      correctAnswer: "0"
    },
    {
      id: 21,
      question: "What is the purpose of the 'instanceof' operator in Java?",
      options: ["To check if an object is of a particular class type", "To cast an object to a specific class type", "To compare two objects for equality", "To initialize an object"],
      correctAnswer: "To check if an object is of a particular class type"
    },
    {
      id: 22,
      question: "Which of the following statements is true about abstract classes in Java?",
      options: ["An abstract class cannot have constructors", "An abstract class can be instantiated", "An abstract class must implement all its methods", "An abstract class cannot have static methods"],
      correctAnswer: "An abstract class cannot be instantiated"
    },
    {
      id: 23,
      question: "What is the purpose of the 'volatile' keyword in Java?",
      options: ["To define volatile variables", "To specify that a variable is not serialized during serialization", "To define variables that cannot be changed", "To ensure visibility of variables across threads"],
      correctAnswer: "To ensure visibility of variables across threads"
    },
    {
      id: 24,
      question: "What is the output of the following code?\n\n```java\npublic class Test {\n    public static void main(String[] args) {\n        int x = 5;\n        int result = x > 2 ? x < 4 ? 10 : 8 : 7;\n        System.out.println(result);\n    }\n}\n```",
      options: ["5", "8", "10", "7"],
      correctAnswer: "8"
    },
    {
      id: 25,
      question: "Which statement is true about the 'this' keyword in Java?",
      options: ["It can be used to refer to the current class instance", "It is used to create objects", "It can be used to call static methods", "It is used to invoke constructors"],
      correctAnswer: "It can be used to refer to the current class instance"
    },
    {
      id: 26,
      question: "What is the result of 'Hello'.substring(2, 4) in Java?",
      options: ["H", "el", "ll", "lo"],
      correctAnswer: "ll"
    },
    {
      id: 27,
      question: "What is the purpose of the 'break' statement in Java?",
      options: ["To exit a loop or switch statement", "To skip the current iteration of a loop", "To restart a loop from the beginning", "To throw an exception"],
      correctAnswer: "To exit a loop or switch statement"
    },
    {
      id: 28,
      question: "Which statement is true about the 'static' keyword in Java?",
      options: ["It can be used with variables, methods, and blocks", "It is used to create objects", "It can only be used in abstract classes", "It allows for method overloading"],
      correctAnswer: "It can be used with variables, methods, and blocks"
    },
    {
      id: 29,
      question: "What is the output of the following code?\n\n```java\npublic class Test {\n    public static void main(String[] args) {\n        int x = 10;\n        while (x > 0) {\n            System.out.println(x);\n            x -= 3;\n        }\n    }\n}\n```",
      options: ["10 7 4 1", "10 6 3", "10 7 4", "Compilation Error"],
      correctAnswer: "10 7 4 1"
    },
    {
      id: 30,
      question: "Which exception is thrown when an application attempts to use an object reference that has the null value?",
      options: ["ArithmeticException", "NullPointerException", "IndexOutOfBoundsException", "NumberFormatException"],
      correctAnswer: "NullPointerException"
    },
    {
      id: 31,
      question: "What is the purpose of the 'throw' statement in Java?",
      options: ["To throw an exception manually", "To catch an exception", "To define custom exception classes", "To exit a loop or switch statement"],
      correctAnswer: "To throw an exception manually"
    },
    {
      id: 32,
      question: "Which statement is true about Java interfaces?",
      options: ["An interface can contain constructors", "A class can implement multiple interfaces", "An interface can extend multiple classes", "An interface can have static methods"],
      correctAnswer: "A class can implement multiple interfaces"
    },
    {
      id: 33,
      question: "What is the output of the following code?\n\n```java\npublic class Test {\n    public static void main(String[] args) {\n        int x = 5;\n        if (x == 5) {\n            int x = 10;\n            System.out.println(x);\n        }\n    }\n}\n```",
      options: ["5", "10", "Compilation Error", "Runtime Error"],
      correctAnswer: "Compilation Error"
    },
    {
      id: 34,
      question: "What is the purpose of the 'continue' statement in Java?",
      options: ["To exit a loop or switch statement", "To skip the current iteration of a loop", "To restart a loop from the beginning", "To throw an exception"],
      correctAnswer: "To skip the current iteration of a loop"
    },
    {
      id: 35,
      question: "Which statement is true about Java packages?",
      options: ["A package can only contain class definitions", "Packages are used for grouping related classes and interfaces", "A class can belong to multiple packages", "Packages are optional in Java"],
      correctAnswer: "Packages are used for grouping related classes and interfaces"
    },
    {
      id: 36,
      question: "What is the output of the following code?\n\n```java\npublic class Test {\n    public static void main(String[] args) {\n        int x = 5;\n        do {\n            System.out.println(x);\n            x -= 2;\n        } while (x > 0);\n    }\n}\n```",
      options: ["5 3 1", "5 2", "5 3", "Compilation Error"],
      correctAnswer: "5 3 1"
    },
    {
      id: 37,
      question: "What is the output of the following code?\n\n```java\npublic class Test {\n    public static void main(String[] args) {\n        int x = 5;\n        for (int i = 0; i < x; i++) {\n            System.out.print(i + \" \");\n        }\n    }\n}\n```",
      options: ["0 1 2 3 4", "1 2 3 4 5", "0 1 2 3", "Compilation Error"],
      correctAnswer: "0 1 2 3 4"
    },
    {
      id: 38,
      question: "What is the result of 5 + 7 / 2 in Java?",
      options: ["5.5", "8.5", "6", "12"],
      correctAnswer: "8"
    },
    {
      id: 39,
      question: "Which statement is true about Java constructors?",
      options: ["A constructor can return a value", "A constructor can have a return type", "A constructor is called when an object is created", "A class can have multiple constructors with the same parameter types"],
      correctAnswer: "A constructor is called when an object is created"
    },
    {
      id: 40,
      question: "What is the purpose of the 'default' keyword in a Java switch statement?",
      options: ["To execute the default case", "To break the switch statement", "To specify the default value for a variable", "To define a default constructor"],
      correctAnswer: "To execute the default case"
    },
    {
      id: 41,
      question: "What is the output of the following code?\n\n```java\npublic class Test {\n    public static void main(String[] args) {\n        String str1 = \"Hello\";\n        String str2 = new String(\"Hello\");\n        System.out.println(str1.equals(str2));\n    }\n}\n```",
      options: ["true", "false", "Compilation Error", "Runtime Error"],
      correctAnswer: "true"
    },
    {
      id: 42,
      question: "Which statement is true about Java threads?",
      options: ["Threads are used for defining new data types", "A thread can be created by extending the Thread class", "A thread cannot share data with other threads", "Threads are used for defining interfaces"],
      correctAnswer: "A thread can be created by extending the Thread class"
    },
    {
      id: 43,
      question: "What is the output of the following code?\n\n```java\npublic class Test {\n    public static void main(String[] args) {\n        int x = 5;\n        switch (x) {\n            case 5:\n                System.out.println(\"Five\");\n                break;\n            case 6:\n                System.out.println(\"Six\");\n                break;\n            default:\n                System.out.println(\"Default\");\n        }\n    }\n}\n```",
      options: ["Five", "Six", "Default", "Compilation Error"],
      correctAnswer: "Five"
    },
    {
      id: 44,
      question: "What is the purpose of the 'this' keyword in Java constructors?",
      options: ["To refer to the current class instance", "To create a new object", "To call another constructor from the same class", "To initialize instance variables"],
      correctAnswer: "To refer to the current class instance"
    },
    {
      id: 45,
      question: "Which statement is true about Java enums?",
      options: ["Enums can have constructors", "Enums cannot implement interfaces", "Enums cannot have instance variables", "Enums are implicitly final"],
      correctAnswer: "Enums are implicitly final"
    },
    {
      id: 46,
      question: "What is the output of the following code?\n\n```java\npublic class Test {\n    public static void main(String[] args) {\n        int x = 5;\n        int y = x++;\n        System.out.println(y);\n    }\n}\n```",
      options: ["5", "6", "Compilation Error", "Runtime Error"],
      correctAnswer: "5"
    },
    {
      id: 47,
      question: "What is the purpose of the 'finally' block in Java exception handling?",
      options: ["To catch exceptions", "To specify code that always executes", "To re-throw exceptions", "To handle multiple exceptions"],
      correctAnswer: "To specify code that always executes"
    },
    {
      id: 48,
      question: "Which statement is true about Java garbage collection?",
      options: ["Garbage collection can be forced using System.gc()", "Garbage collection guarantees to reclaim unused objects immediately", "Garbage collection is handled by the JVM automatically", "Garbage collection can only be performed manually"],
      correctAnswer: "Garbage collection is handled by the JVM automatically"
    },
    {
      id: 49,
      question: "What is the output of the following code?\n\n```java\npublic class Test {\n    public static void main(String[] args) {\n        int x = 5;\n        int result = 0;\n        while (x > 0) {\n            result += x;\n            x--;\n        }\n        System.out.println(result);\n    }\n}\n```",
      options: ["15", "10", "5", "Compilation Error"],
      correctAnswer: "15"
    },
    {
      id: 50,
      question: "What is the purpose of the 'static' keyword in Java?",
      options: ["To create an object of a class", "To define a class that cannot be instantiated", "To access variables and methods without creating an object", "To specify that a variable is not serialized during serialization"],
      correctAnswer: "To access variables and methods without creating an object"
    }
  ];
  
  export default javaQuizQuestions;
  