**#Online Library System**

### **Overview**

This is a React-based Online Library System where users can browse books by categories, view book details, and add new books. Redux is used for state management, and React Router is implemented for navigation.

### **Features**

Home Page: Displays book categories and popular books.

Browse Books: Filter books by category and search by title or author.

Book Details: View book information including title, author, description, and rating.

Add Book: Form to add new books with validation, managed using Redux.

404 Page: Handles undefined routes with a navigation link to Home.

# VITE Project setup:

Command: 'npm create vite@latest' it creates a new project, here we can name for your project after that select required framework and libraries.
now run the cammand cd vite-project
next npm install
now run for the server npm run dev it creates default local URL will be shown
 This is how we can set up project now we can code for our project 

# Project Structure
/src
├── components
│   ├── Navbar.js
├── data
│   ├── books.js
├── pages
│   ├── Home.js
│   ├── BrowseBooks.js
│   ├── BookDetails.js
│   ├── AddBook.js
│   ├── NotFound.js
├── redux
│   ├── store.js
│   ├── booksSlice.js
├── App.js
└── index.js