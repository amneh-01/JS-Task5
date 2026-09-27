# JS-Task5 ....... (27/9) 


# 📝 Simple To-Do List App

A lightweight and responsive **To-Do List Application** built with pure HTML, CSS, and JavaScript. It helps users manage their daily tasks efficiently with local data persistence.

## 🚀 Features

* **Add Tasks:** Quickly add new tasks via the input field by clicking the **Add Task** button or pressing the **Enter** key.
* **Delete Tasks:** Remove completed tasks easily using the **Delete** button next to each task.
* **Local Storage Persistence:** All tasks are saved in the browser's `localStorage`, ensuring data is preserved even after refreshing or closing the page.
* **Input Validation:** Automatically trims extra whitespace to prevent adding empty tasks.
* **Clean & Simple UI:** Designed with a clean, minimal, and user-friendly interface using standard CSS.

---

## 🛠️ Built With

* **HTML5:** Semantic markup for page structure.
* **CSS3:** Basic styling and layout positioning .
* **JavaScript (ES6):** Dynamic DOM manipulation, Event Listeners, Arrow Functions, and LocalStorage integration.

---

## ⚙️ How It Works (JavaScript Logic)

* **Event Listeners & Arrow Functions:** Utilized `addEventListener` with modern ES6 **Arrow Functions** `() => {}` to handle button clicks and trigger task creation on pressing the **Enter** key.
* **Storage Handling:** Serializes the task array using `JSON.stringify()` to store in `localStorage` and `JSON.parse()` to retrieve items on page load.
* **Deleting Tasks:** Targets the specific task using array indexing/DOM manipulation and updates `localStorage` dynamically
