import { useNavigate } from "react-router-dom";

const oopsQuestions = [
  {
    question: "What is Object-Oriented Programming?",
    answer:
      "Object-Oriented Programming (OOP) is a programming paradigm based on the concept of 'objects', which are instances of classes. It helps organize code using real-world entities like objects, classes, inheritance, and polymorphism to promote reusability and modularity."
  },
  {
    question: "What are the four main pillars of OOP?",
    answer:
      "The four pillars of OOP are:\n1. **Encapsulation** – Binding data and methods.\n2. **Abstraction** – Hiding internal details.\n3. **Inheritance** – Acquiring properties from another class.\n4. **Polymorphism** – Ability to take many forms (method overloading/overriding)."
  },
  {
    question: "What is a class and an object?",
    answer:
      "A **class** is a blueprint or template for creating objects. It defines properties (attributes) and behaviors (methods).\nAn **object** is an instance of a class, created in memory, which holds actual values."
  },
  {
    question: "What is encapsulation?",
    answer:
      "Encapsulation is the mechanism of wrapping data and methods into a single unit (class) and restricting direct access using access modifiers. This promotes data hiding and internal security."
  },
  {
    question: "What is abstraction?",
    answer:
      "Abstraction means showing only essential features and hiding internal details. It helps reduce complexity. For example, a user interacts with a car using steering and pedals without knowing how the engine works."
  },
  {
    question: "What is inheritance?",
    answer:
      "Inheritance allows a class (child) to acquire properties and behaviors from another class (parent), promoting code reuse. For example, a Dog class can inherit from Animal class."
  },
  {
    question: "What is polymorphism?",
    answer:
      "Polymorphism allows a single interface to represent different forms. There are two types:\n- **Compile-time** (method overloading)\n- **Run-time** (method overriding)\nIt enables flexibility and dynamic behavior."
  },
  {
    question: "What is method overloading?",
    answer:
      "Method overloading means defining multiple methods in the same class with the same name but different parameter lists (type or number). It allows the same method to behave differently based on input."
  },
  {
    question: "What is method overriding?",
    answer:
      "Method overriding allows a subclass to provide a specific implementation of a method that is already defined in its superclass. It supports dynamic polymorphism and is resolved at runtime."
  },
  {
    question: "What is a constructor?",
    answer:
      "A constructor is a special method used to initialize objects. It has the same name as the class and is called automatically when an object is created. It can be parameterized or default (no args)."
  },
  {
    question: "What is the difference between constructor and method?",
    answer:
      "Constructors initialize objects and are invoked automatically during object creation. Methods perform actions and are called explicitly. Constructors have no return type, unlike methods."
  },
  {
    question: "What is the difference between static and non-static methods?",
    answer:
      "Static methods belong to the class and can be called without creating an object. Non-static methods belong to objects and can access instance variables. Static methods cannot access 'this'."
  },
  {
    question: "What is the 'this' keyword?",
    answer:
      "`this` is a reference variable that refers to the current object of the class. It is commonly used to resolve naming conflicts between instance variables and method parameters."
  },
  {
    question: "What is the 'super' keyword?",
    answer:
      "`super` refers to the immediate parent class. It is used to access parent class methods, constructors, or variables that are overridden or hidden in the subclass."
  },
  {
    question: "What is the difference between abstraction and encapsulation?",
    answer:
      "Abstraction hides complexity by exposing only essential features to the user, while encapsulation hides internal data by restricting access and combining related data and methods together in a class."
  },
  {
    question: "What is an abstract class?",
    answer:
      "An abstract class is a class that cannot be instantiated directly. It can contain abstract methods (without a body) and non-abstract methods. It is used as a base class to enforce a contract for subclasses."
  },
  {
    question: "What is an interface?",
    answer:
      "An interface is a pure abstraction. It defines a contract of methods without implementation. Classes can implement multiple interfaces, making it useful for multiple inheritance and loose coupling."
  },
  {
    question: "What is multiple inheritance?",
    answer:
      "Multiple inheritance allows a class to inherit from more than one class. It can cause ambiguity (diamond problem), which is resolved using interfaces in languages like Java and virtual inheritance in C++."
  },
  {
    question: "What is dynamic dispatch?",
    answer:
      "Dynamic dispatch (also known as runtime polymorphism) is a mechanism where the call to an overridden method is resolved at runtime based on the object’s actual class, not the reference type."
  },
  {
    question: "What is cohesion in OOP?",
    answer:
      "Cohesion refers to how closely related and focused the responsibilities of a class are. High cohesion means the class does one thing well, making it easier to maintain and understand."
  },
  {
    question: "What is coupling?",
    answer:
      "Coupling refers to the degree of dependency between modules. Low coupling is desirable as it reduces interdependence, making systems easier to change and scale."
  },
  {
    question: "What is object slicing?",
    answer:
      "Object slicing occurs when an object of a derived class is assigned to a base class object, and the derived part is 'sliced off', resulting in loss of extra information."
  },
  {
    question: "What is a virtual function?",
    answer:
      "A virtual function is a member function in the base class that you can override in a derived class. It supports runtime polymorphism, mainly used in C++."
  },
  {
    question: "What is the difference between shallow and deep copy?",
    answer:
      "Shallow copy copies the reference (memory address) of objects, not the actual object. Deep copy duplicates everything, including nested objects, to create an entirely independent copy."
  },
  {
    question: "What is an immutable object?",
    answer:
      "An immutable object is one whose state cannot be modified after it is created. In Java, `String` is an example of an immutable class. Immutability improves security and thread safety."
  },
  {
    question: "How is memory allocated in OOP?",
    answer:
      "Objects are typically allocated on the heap at runtime. Class definitions and static members are stored in code or data segments. Stack is used for method calls and local variables."
  },
  {
    question: "What is the SOLID principle?",
    answer:
      "SOLID is an acronym for 5 design principles:\nS: Single Responsibility\nO: Open-Closed\nL: Liskov Substitution\nI: Interface Segregation\nD: Dependency Inversion\nThese help create scalable, maintainable OOP systems."
  },
  {
    question: "What is the difference between aggregation and composition?",
    answer:
      "Both are types of association. Aggregation is a 'has-a' relationship where the child can exist independently of the parent. Composition implies a strong ownership – if the parent is destroyed, so is the child."
  },
  {
    question: "What is the difference between instanceof and typecasting?",
    answer:
      "`instanceof` checks if an object is of a certain class or subclass. Typecasting explicitly converts one type to another and may throw exceptions if incompatible."
  },
  {
    question: "What is object cloning?",
    answer:
      "Object cloning is the process of creating an exact copy of an object. In Java, it’s done using `clone()` method from the `Cloneable` interface. Deep cloning involves duplicating nested objects as well."
  },
];

const Oops = () => {
       const navigate = useNavigate();
  return (
    <div className="min-h-screen px-6 py-10 bg-[#F8F3D9] text-[#504B38]">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate("/resources")}
          className="mb-6 px-4 py-2 bg-[#B9B28A] text-white rounded hover:bg-[#A09C6D] transition"
        >
          ← Back
        </button>
        <h1 className="text-3xl font-bold mb-8 text-center">🧱 Object Oriented Programming Language Interview Questions</h1>
        <div className="space-y-6">
          {oopsQuestions.map((item, index) => (
            <div
              key={index}
              className="bg-[#EBE5C2] border-2 border-[#E5DFB9] rounded-xl shadow p-5"
            >
              <h3 className="font-semibold mb-2">
                <span className="text-[#B9B28A]">Q{index + 1}.</span> {item.question}
              </h3>
              <p className="text-[#504B38]/80">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Oops