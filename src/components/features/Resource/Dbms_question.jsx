
import { useNavigate } from 'react-router-dom';

const dbmsQuestions = [
  {
    question: "What is DBMS?",
    answer:
      "DBMS (Database Management System) is software that allows users to define, create, maintain, and control access to databases. It acts as an interface between the user and the database, making data management easier and more efficient."
  },
  {
    question: "What is the difference between DBMS and RDBMS?",
    answer:
      "DBMS stores data as files, and there's no relation between tables. RDBMS stores data in related tables and enforces relationships through keys (primary and foreign). RDBMS supports normalization, integrity constraints, and is widely used in real-world applications."
  },
  {
    question: "What is normalization? Why is it important?",
    answer:
      "Normalization is the process of organizing data to reduce redundancy and improve data integrity. It breaks large tables into smaller, related ones and eliminates anomalies during insert, update, or delete operations."
  },
  {
    question: "Explain different normal forms.",
    answer:
      "1NF: No repeating groups; atomic values.\n2NF: 1NF + No partial dependency.\n3NF: 2NF + No transitive dependency.\nBCNF: Every determinant is a candidate key.\nEach form aims to reduce redundancy and improve consistency."
  },
  {
    question: "What is a primary key?",
    answer:
      "A primary key is a column or group of columns that uniquely identifies each row in a table. It cannot be NULL and must contain unique values."
  },
  {
    question: "What is a foreign key?",
    answer:
      "A foreign key is a column in one table that refers to the primary key in another table. It is used to maintain referential integrity between two related tables."
  },
  {
    question: "What is a candidate key?",
    answer:
      "A candidate key is a set of attributes that can uniquely identify a tuple in a table. There can be multiple candidate keys, and one of them becomes the primary key."
  },
  {
    question: "What is a composite key?",
    answer:
      "A composite key is a combination of two or more columns used together to uniquely identify a record when no single column is sufficient."
  },
  {
    question: "What is SQL?",
    answer:
      "SQL (Structured Query Language) is a standard language used to manage and manipulate databases. It includes commands for data query, data manipulation (DML), data definition (DDL), and data control (DCL)."
  },
  {
    question: "What is the difference between DDL and DML?",
    answer:
      "DDL (Data Definition Language) includes commands like CREATE, ALTER, DROP to define structure.\nDML (Data Manipulation Language) includes SELECT, INSERT, UPDATE, DELETE to manage the data itself."
  },
  {
    question: "What is a transaction in DBMS?",
    answer:
      "A transaction is a sequence of operations performed as a single logical unit of work. It must satisfy ACID properties (Atomicity, Consistency, Isolation, Durability) to ensure data correctness."
  },
  {
    question: "Explain ACID properties.",
    answer:
      "Atomicity: All or nothing.\nConsistency: Maintain database rules.\nIsolation: Transactions work independently.\nDurability: Changes remain after commit, even on failure."
  },
  {
    question: "What is indexing?",
    answer:
      "Indexing is a technique to speed up data retrieval. It creates a data structure (index) that allows faster searching, similar to a book’s index."
  },
  {
    question: "What is the difference between clustered and non-clustered index?",
    answer:
      "Clustered index determines the physical order of data (only one per table). Non-clustered index is separate from data and stores a pointer to actual rows (multiple allowed)."
  },
  {
    question: "What is a view?",
    answer:
      "A view is a virtual table based on the result of an SQL query. It does not store data itself but provides a way to simplify complex queries or restrict access to specific data."
  },
  {
    question: "What is a trigger?",
    answer:
      "A trigger is a stored procedure that automatically runs when a specific event occurs in the database, such as insert, update, or delete."
  },
  {
    question: "What are joins? Name different types.",
    answer:
      "Joins combine rows from two or more tables based on a related column. Types: INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN, SELF JOIN, CROSS JOIN."
  },
  {
    question: "What is an ER model?",
    answer:
      "The ER (Entity-Relationship) model is a high-level conceptual data model that describes data as entities (things) and relationships among them using ER diagrams."
  },
  {
    question: "What is a subquery?",
    answer:
      "A subquery is a query inside another query. It helps in complex filtering or comparison. It can be used with SELECT, INSERT, UPDATE, DELETE."
  },
  {
    question: "What is denormalization?",
    answer:
      "Denormalization is the process of combining tables to reduce joins and improve read performance, at the cost of some redundancy."
  },
  {
    question: "What is the difference between WHERE and HAVING?",
    answer:
      "WHERE filters rows before grouping. HAVING filters groups after GROUP BY is applied. WHERE cannot use aggregates like COUNT(), but HAVING can."
  },
  {
    question: "What is a schema?",
    answer:
      "A schema is the overall logical structure of a database, defining how tables, views, relationships, and other elements are organized."
  },
  {
    question: "What is a stored procedure?",
    answer:
      "A stored procedure is a precompiled collection of SQL statements stored in the database. It allows reusability, improves performance, and supports logic with IF/ELSE, loops, etc."
  },
  {
    question: "What is a deadlock?",
    answer:
      "A deadlock occurs when two or more transactions wait indefinitely for each other to release resources. It leads to a standstill. DBMS detects and resolves deadlocks using timeouts or wait-for graphs."
  },
  {
    question: "What is the difference between delete, truncate, and drop?",
    answer:
      "DELETE removes specific rows and can be rolled back. TRUNCATE removes all rows quickly, cannot be rolled back. DROP deletes the entire table structure and data permanently."
  },
  {
    question: "What are aggregate functions in SQL?",
    answer:
      "Aggregate functions operate on sets of values and return a single result. Examples: COUNT(), SUM(), AVG(), MAX(), MIN()."
  },
  {
    question: "What is a cursor?",
    answer:
      "A cursor allows row-by-row processing of query results. It is useful for complex logic that cannot be done in a set-based operation."
  },
  {
    question: "What is referential integrity?",
    answer:
      "Referential integrity ensures that a foreign key value always refers to a valid row in the parent table, preventing orphan records and maintaining consistency."
  },
  {
    question: "What is a surrogate key?",
    answer:
      "A surrogate key is an artificial, system-generated key (like an auto-increment number) used when a natural primary key is not suitable."
  },
  {
    question: "What is the difference between UNION and UNION ALL?",
    answer:
      "UNION combines results and removes duplicates. UNION ALL combines results including duplicates. UNION is slower due to duplicate checks."
  },
];

const Dbms_question = () => {
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
        <h1 className="text-3xl font-bold mb-8 text-center">🗄️ Database Management System Interview Questions</h1>
        <div className="space-y-6">
          {dbmsQuestions.map((item, index) => (
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

export default Dbms_question