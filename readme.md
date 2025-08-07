# 💬 Chatsito - Documentation

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=flat&logo=sass&logoColor=white)

-**Preview**
<img src="https://github.com/YisusDU/ebac-m39/blob/main/assets/preview-chatsito.webp" alt="general-preview">

## 🧩 Main Components

### Component Matrix

| Component           | File           | Key Elements                    |
|---------------------|----------------|---------------------------------|
| **HTML Structure**  | `index.html`   | `messageContainer`, `mainForm` |
| **Chat Logic**      | `js/scripts.js`| `validateInput()`, `addQuestion()` |
| **Visual Styles**   | `css/main.css` | Grid, Flexbox, Media Queries    |
| **Assets**          | `assets/`      | SVG icons, logo                 |

### Interaction Flow

1. The user sends a message via `mainForm`
2. `validateInput()` processes the text
3. The system looks for a match in the `responses` object
4. `addQuestion()` and `addResponse()` update the DOM
5. CSS animations provide visual feedback

## 📂 File Structure
```
chatsito/
├── index.html # Main entry point
├── js/
│ └── scripts.js # Main chat logic
├── css/
│ ├── main.css # Compiled styles
│ └── _layout.scss # Layout partial
└── assets/ # Visual resources
├── icons/
└── logo.svg
```


## 🔑 System Identifiers

| Concept           | Implementation          | Location             |
|-------------------|--------------------------|----------------------|
| Chat Input        | `<input type="text">`    | `index.html#L40`     |
| Message Area      | `#messageContainer`      | `index.html#L28`     |
| User Messages     | Class `.right`           | `main.css#L97-110`   |
| Bot Responses     | Class `.left`            | `main.css#L111-124`  |
| Response Logic    | `responses` object       | `scripts.js#L23-87`  |

## 💻 Key Code Snippets

**HTML Structure** (`index.html`):

```html
<div id="chat-interface">
  <div id="messageContainer"></div>
  <form id="mainForm">
    <input type="text" id="userInput" autocomplete="off">
    <button type="submit">Send</button>
  </form>
</div>
```
Chat Logic (js/scripts.js):
```

// Bot knowledge base
const responses = {
  greeting: ["Hi!", "How are you?"],
  help: ["I can help you with..."],
  default: ["I didn't understand that"]
};

function processMessage(input) {
  // Pattern matching logic
}
```
Styles (css/_layout.scss):
```

#messageContainer {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  overflow-y: auto;
}

.message {
  &-user {
    align-self: flex-end;
    background: #007bff;
  }

  &-bot {
    align-self: flex-start;
    background: #e9ecef;
  }
}
```
🚀 Quick Start
```
git clone https://github.com/your-username/chatsito.git
cd chatsito
```
## Open index.html in your browser

### 🌟 Key Features

- ✅ **Responsive conversational interface**
- ✅ **Easily extensible rule-based system**
- ✅ **Real-time input validation**
- ✅ **Smooth CSS animations**
- ✅ **Light/Dark theme support**

>[!Note]
>You can check the detailed documentation <a href="https://deepwiki.com/YisusDU/ebac-m39">-here-</a>
