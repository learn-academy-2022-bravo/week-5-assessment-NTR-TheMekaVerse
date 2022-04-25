# ASSESSMENT 5: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is a hash in Ruby?

  Your answer: A hash is the way Ruby stores, identifies, and recalls a set of key-value pairs. When a hash is recalled there is a unique id followed by the keys created and their assigned values. The hash is also useful when needing to access a key-value pair for updating or deletion.

  Researched answer: A collection of unique key-value pairs that are stored similar to arrays, yet they are indexed by arbitrary keys. Creating a hash involves establishing a key, assigning it a value, separating multiple key-value pairs by commas, and enclosing the entire code in curly braces.



2. What is a gem?

  Your answer: A gem is a package library used with Ruby to establish certain functionality dependencies.

  Researched answer: A "gem" is a software package that contains a Ruby app or library, used to change Ruby functionality when building applications. Gems contain code (including tests and supporting utilities), documentation, and gemspec.



3. What is Ruby on Rails?

  Your answer: Ruby on Rails is the joining of an object-oriented programming language (Ruby) and a framework that allows for database management and the visual side of web development (Rails). 

  Researched answer: Rails is a full-stack, server-side framework that provides all tools needed to build web applications from front to back end.



4. What is a relational database? Are there other kinds of databases?

  Your answer: A relational database is a database model that has categorized data organized into tables, of which the tables have links between them based upon how the data they contain relates to one another. There are also non-relational databases.

  Researched answer: A relational database is one where the data is organized in tables that have relationships, or dependencies, with one another. SQL databases are relational. Non-relational databases exist and they are less structured, having datasets that are not clearly defined. Facebook messenger uses a non-relational or NoSQL database.



5. What are primary keys? Why are they important?

  Your answer: Primary keys are identifiers assigned to each instance of a database entry. Primary keys are important because they are unique ids, typically numbers, that make a database entry easily/quickly accessible.

  Researched answer: Primary keys are unique identifiers, typically a column or set of columns, in a relational database that are used to identify each record. A primary key cannot be duplicated or contain the value of null. They allow for easy/quick search, identification, and updating of specific data.



## Looking Ahead: Terms for Next Week
Research and define the following terms to the best of your ability.

1. RESTful routes:

  - REST = Representation State Transfer
  - Routes refers to the request-response cycle that occurs between system and server
  - RESTful routes is a set of standards for identifying the path between HTTP (get, post, patch, delete) and CRUD (create, read, update, destroy).
    

2. JSON:

  - JSON = JavaScript Object Notation
  - A lightweight, or plain text, version of JavaScript. JSON is a syntax that has the following rules: 
      1. Data must be written in name/value pairs
      2. Data is separated by commas
      3. Curly braces encase objects
      4. Squares brackets encase arrays


3. ERB:

  - ERB: Embedded Ruby
  - ERB allows for Ruby code to be added to any plain text file for the sake of flow control, making a template easy to write and maintain.

4. Params:

  - Short for "parameters", params in Ruby on Rails serves a purpose like that of parameters in other coding languages, they are placeholders within code that are passed information as an argument to execute according to what is being called on. In Rails, params are specifically passed to GET or POST requests.

      GET request --> params passed from browser to controller
      POST request --> params passed to the controller from a form

5. API:

  - API: Application Programming Interface
  - It is a medium used for communication between different programs/software.
