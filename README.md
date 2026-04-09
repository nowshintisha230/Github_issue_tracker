# 📝 GitHub Issue Tracker

## 📌 Project Overview
**GitHub Issue Tracker** is a responsive web application built with **HTML, CSS, and JavaScript**.  
Users can manage issues efficiently by adding new issues, viewing all available issues, deleting unnecessary issues, and tracking statistics like total created, total selected, and total deleted issues.  

This project demonstrates **vanilla JS frontend development**, responsive design, and interactive UI without using any frameworks.

---

## 📸 Screenshot
<img width="1908" height="915" alt="Screenshot 2026-04-09 102637" src="https://github.com/user-attachments/assets/3f777ee8-99f1-4d18-8e80-029639fe3eca" />
<img width="1871" height="910" alt="Screenshot 2026-04-09 102656" src="https://github.com/user-attachments/assets/52f565f0-7582-488c-b6f9-3c5f4a38cc28" />


---

## 🛠️ Technologies Used
- HTML5  
- CSS3  
- JavaScript (ES6)  
- Font Awesome (icons)  
- Local Storage (for saving issues)  

---

## ✨ Main Features
- **Add / Delete Issues:** Easily add new issues and remove unwanted issues.  
- **View All Issues:** Display all active issues in a clean interface.  
- **Issue Statistics:** Track total created, total selected, and total deleted issues.  
- **Responsive Design:** Works smoothly on mobile, tablet, and desktop.  
- **Interactive UI:** Buttons, notifications, and dynamic DOM updates using JavaScript.  

---

## 📦 Dependencies
This project uses only vanilla JS and CSS. Optional dependencies:
- Font Awesome (for icons)
- Google Fonts (for typography)

---

## 💻 How to Run Locally

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/github-issue-tracker.git
```

### 2️⃣ Navigate to the project folder
```bash
cd github-issue-tracker
```

### 3️⃣ Open `index.html` in a browser
Simply double click `index.html` or run a live server in VS Code.

Example using VS Code Live Server extension:

```bash
Right click index.html → Open with Live Server
```

---

## 🔗 Live Link & GitHub Repository
- 🌐 **Live Site:** https://nowshintisha230.github.io/Github_issue_tracker/
- 💻 **GitHub Repository:** https://github.com/nowshintisha230/github-issue-tracker

---

## 👩‍💻 Author
**Nafisa Nowshin Tisha**  
Frontend Developer | CSE Student | JavaScript & Web Development Enthusiast

## Some Basic Q&A

# Differance between let,var and const
- var – function-scoped, can be redeclared & updated, hoisted.  
- let – block-scoped, can be updated, cannot be redeclared in the same block.  
- const – block-scoped, cannot be updated or redeclared, must be initialized.

# Spread opeartor(...):Expands arrays or objects.  
 ## js example:
const arr1 = [1,2,3]; 
const arr2 = [...arr1,4,5]; // [1,2,3,4,5]  

# Differance between map(),filter(),and foreach():
**map()** – Transforms each element and returns a new array.  
**filter()** – Returns a new array with elements that pass a condition.  
**forEach()** – Executes a function on each element, does not return a new array.

# Arrow function:  A shorter way to write functions using `=>`. 
## js example:
const add = (a, b) => a + b; // same as function add(a, b) { return a + b; }

# Template Literals – Strings using backticks `` ` `` that can embed variables or expressions.    
## js example:
const name = "Tisha";
const greeting = `Hello, ${name}!`; // "Hello, Tisha!"
const sum = `2 + 3 = ${2 + 3}`;    // "2 + 3 = 5"
