# 🕒 React Digital Clock with Color Customization

A simple React app that displays a live digital clock and allows users to customize its background color via a dropdown menu. The selected color is passed from the parent to the child component using **props**.

---

## 🚀 Features

- ⏱️ Live digital clock that updates every second
- 🎨 Dropdown to select clock background color
- 🔁 Prop-based color passing to child component
- 💡 Uses React Hooks (`useState`, `useEffect`)
- 📦 Modular component structure for clean separation

---

## 🎨 Available Color Options

Users can select from the following background colors for the clock:

- `White`
- `Cadetblue`
- `Aqua`
- `Orange`

---

## 🧠 Concepts Demonstrated

- React Functional Components
- State management using `useState`
- Lifecycle behavior using `useEffect`
- Props passing between parent and child
- Inline styling and basic CSS
- Component folder organization

---

## 📁 Project Structure
react-digital-clock/
│
├── src/
│ ├── Components/
│ │ └── DigitalClock.js # Child component showing the clock
│ ├── css/
│ │ └── App.css # Basic styling for layout
│ ├── App.js # Main parent component
│ └── index.js # React DOM rendering
│
├── public/
│ └── index.html
│
├── assets/
│ └── screenshot.png # 📸 Screenshot of the application
│
└── README.md # ✅ You're here!


---

## 🖼️ Screenshot

![App Screenshot](./assets/screenshot.png)

---

## 🛠️ Getting Started

### 🔧 Installation & Running

1. **Clone the repository**
   ```bash
   git clone https://github.com/youknowankit/react-digital-clock.git
   cd react-digital-clock
