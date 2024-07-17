import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Documentation = () => {
  const resources = [
    {
      url: "https://docs.oracle.com/en/java/",
      description: "By visiting this link, you can access the official Oracle Java documentation for all versions of Java, including tutorials and guides."
    },
    {
      url: "https://docs.oracle.com/javase/8/docs/",
      description: "This link provides comprehensive documentation specifically for Java SE 8, including the API specification and language guides."
    },
    {
      url: "https://docs.oracle.com/en/java/javase/11/",
      description: "Detailed documentation for Java SE 11, covering new features and updates, can be found here."
    },
    {
      url: "https://docs.oracle.com/en/java/javase/17/",
      description: "The latest long-term support version of Java, with extensive documentation on new and existing features, is available at this link."
    },
    {
      url: "https://docs.oracle.com/javase/tutorial/",
      description: "This link leads to a series of practical guides and tutorials provided by Oracle for learning Java from the basics to advanced topics."
    },
    {
      url: "https://www.geeksforgeeks.org/java/",
      description: "GeeksforGeeks offers tutorials, examples, and explanations for a wide range of Java topics, suitable for beginners and advanced users."
    },
    {
      url: "https://www.baeldung.com/java-tutorials",
      description: "Baeldung provides in-depth articles and tutorials on Java programming, covering basic to advanced topics, frameworks, and best practices."
    },
    {
      url: "https://www.javacodegeeks.com/",
      description: "Java Code Geeks is a resource site with tutorials, articles, and news about Java and related technologies."
    },
    {
      url: "https://www.w3schools.com/java/",
      description: "W3Schools offers beginner-friendly tutorials that cover the fundamentals of Java programming."
    },
    {
      url: "https://www.tutorialspoint.com/java/index.htm",
      description: "TutorialsPoint provides comprehensive tutorials covering a wide range of Java topics, from basic syntax to advanced features."
    }
  ];

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-white">Java Resources</h1>
      <div className="list-group">
        {resources.map((resource, index) => (
          <a
            key={index}
            href={resource.url}
            className="list-group-item list-group-item-action"
            target="_blank"
            rel="noopener noreferrer"
          >
            {resource.description}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Documentation;