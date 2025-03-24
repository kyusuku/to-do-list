# To-do List

To-do List is a browser-based web application created as part of my journey through The Odin Project curriculum. This is my eleventh project, and it focuses on building a dynamic and interactive to-do list application using HTML, CSS, and JavaScript. The app allows users to manage their tasks and courses, with features such as DOM manipulation, Webpack module bundling, and Web Storage API for persistence.

## How to Use

- 🏠 **Home:** Click on the "Home" icon to view all courses and todos.
- ➕ **Add Course:** Click on the "+" button to add a new course.
- ➕ **Add Todo:** Click on the "+" button to add a new to-do item.
- 📋 **Filter Todos:** Click on a course name to filter and display only the todos associated with that course.

## Try It Out

👉 You can view and interact with the To-do List here: [To-do List](https://kyusuku.github.io/to-do-list/)

## Features

- 🖥️ **User-Friendly Interface:** The app provides a simple, intuitive layout for easy navigation.
- 📜 **Dynamic Content:** The content of the page updates dynamically based on user interaction.
- 🖱️ **Clickable Buttons:** Users can click on buttons to add new courses and to-do items.
- 📋 **Todo Filtering:** Users can filter todos by course name by creating a new course and clicking it, which will display only the todos that have the same course name.
- 💾 **Persistent Storage:** The app uses Web Storage API to save and load data, ensuring that the to-do list is preserved across sessions.

## Technologies Used

- **HTML5:** Used for creating the structure of the to-do list application.
- **CSS3:** Provides styling for a visually pleasant and functional interface.
- **JavaScript:** Implements the dynamic content updates and DOM manipulation.
- **Webpack:** Used to bundle JavaScript modules for efficient loading and management.

## Project Structure

### Files and Directories

- 📄 `index.html`: The main HTML file containing the structure and layout of the to-do list application.
- 🎨 `styles.css`: The stylesheet that defines the layout and design of the page.
- 📜 `index.js`: The main JavaScript file that implements the dynamic content updates and navigation.
- 📜 `course.js`: JavaScript module for managing courses.
- 📜 `todo.js`: JavaScript module for managing to-do items.
- 📜 `delete.js`: JavaScript module for creating delete buttons.
- 📜 `edit.js`: JavaScript module for creating edit icons.
- 📜 `confirm.js`: JavaScript module for creating confirm buttons.
- 📄 `template.html`: The HTML template used for the page structure.
- 📁 `icons/`: Directory containing SVG icons used in the application.

## Learning Objectives

This project was built with the following objectives:

- 🏗 **HTML and CSS Layout:** Building the structure and styling of a to-do list application.
- 🎨 **JavaScript Functionality:** Adding interactivity and dynamic behavior, such as adding and editing courses and to-do items.
- 📊 **DOM Manipulation:** Using JavaScript to dynamically update the page content based on user interaction.
- 📦 **Webpack Integration:** Using Webpack to bundle JavaScript modules for efficient loading and management.
- 💾 **Web Storage API:** Implementing persistent storage to save and load data across sessions.

## Future Improvements

- 📱 **Mobile Optimization:** Making the page responsive for better usability on smaller screens.
- 🎨 **Enhanced Styles:** Adding custom styles or animations for a better user experience.
- 🗂️ **Additional Features:** Adding more features such as task prioritization, deadlines, and notifications.

## About The Odin Project

This project is part of The Odin Project, a hands-on web development curriculum that provides real-world learning experiences.

## Acknowledgments

Special thanks to The Odin Project for providing a structured and comprehensive curriculum. This project helped me improve my skills in JavaScript, DOM manipulation, and web development.

## Running the Code Locally

To run the code on your local computer, follow these steps:

1. **Clone the repository:**
   ```sh
   git clone https://github.com/kyusuku/to-do-list.git
   cd to-do-list

2. **Install dependencies:**
   ```sh
   npm install

3. **Run the development server:**
    ```sh
    npm run dev

4. **Build the project for production:**
    ```sh
    npm run build

5. **Open the application:** Open your browser and navigate to http://localhost:8080 to view the application.

Note that this project is optimized for desktop view only and utilizes Webpack bundler, while also integrated with Web Storage API so users can load back the page as long as they are on the same PC.