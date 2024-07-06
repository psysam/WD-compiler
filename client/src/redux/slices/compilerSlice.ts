import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/react";

export interface compilerSliceStateType {
  fullCode: {
    html: string;
    css: string;
    javascript: string;
  };

  currentLanguage: "html" | "css" | "javascript";
  isOwner: false;
}

const initialState: compilerSliceStateType = {
  fullCode: {
    html: `
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do List</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>To-Do List</h1>
        <div class="input-container">
            <input type="text" id="taskInput" placeholder="Enter a new task">
            <button id="addTaskBtn">Add Task</button>
        </div>
        <ul id="taskList"></ul>
    </div>
    <script src="script.js"></script>
</body>
</html>

    `,
    css: `body {
        font-family: Arial, sans-serif;
        background-color: #f4f4f4;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
    }
    
    .container {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        width: 300px;
        text-align: center;
    }
    
    h1 {
        margin-bottom: 20px;
    }
    
    .input-container {
        display: flex;
        justify-content: space-between;
    }
    
    #taskInput {
        width: 70%;
        padding: 5px;
    }
    
    #addTaskBtn {
        width: 25%;
        padding: 5px;
        background-color: #28a745;
        color: white;
        border: none;
        cursor: pointer;
        border-radius: 4px;
    }
    
    #addTaskBtn:hover {
        background-color: #218838;
    }
    
    #taskList {
        list-style: none;
        padding: 0;
    }
    
    .task {
        background: #f9f9f9;
        padding: 10px;
        border-bottom: 1px solid #ddd;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .task.completed {
        text-decoration: line-through;
        color: #999;
    }
    
    .deleteBtn {
        background: #dc3545;
        color: white;
        border: none;
        cursor: pointer;
        border-radius: 4px;
        padding: 5px 8px;
    }
    
    .deleteBtn:hover {
        background: #c82333;
    }
    `,
    javascript: `document.getElementById('addTaskBtn').addEventListener('click', function() {
        let taskInput = document.getElementById('taskInput');
        let taskText = taskInput.value.trim();
        
        if (taskText !== "") {
            addTask(taskText);
            taskInput.value = "";
        }
    });
    
    function addTask(taskText) {
        let taskList = document.getElementById('taskList');
        let taskItem = document.createElement('li');
        taskItem.className = 'task';
        
        let taskContent = document.createElement('span');
        taskContent.textContent = taskText;
        taskItem.appendChild(taskContent);
        
        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'deleteBtn';
        deleteBtn.addEventListener('click', function() {
            taskList.removeChild(taskItem);
        });
        
        taskItem.appendChild(deleteBtn);
        
        taskItem.addEventListener('click', function() {
            taskItem.classList.toggle('completed');
        });
        
        taskList.appendChild(taskItem);
    }
    `,
  },
  currentLanguage: "html",
  isOwner: false,
};

const compilerSlice = createSlice({
  name: "compilerSlice",
  initialState,
  reducers: {
    updateCurrentLanguage: (
      state,
      action: PayloadAction<compilerSliceStateType["currentLanguage"]>
    ) => {
      state.currentLanguage = action.payload;
    },
    updateCodeValue: (state, action: PayloadAction<string>) => {
      state.fullCode[state.currentLanguage] = action.payload;
    },
    updateIsOwner:(state, action:PayloadAction<boolean>)=>{
      state.isOwner = action.payload
    },
    updateFullCode: (
      state,
      action: PayloadAction<compilerSliceStateType["fullCode"]>
    ) => {
      state.fullCode = action.payload;
    },
  },
});

export default compilerSlice.reducer;
export const { updateCurrentLanguage, updateCodeValue, updateFullCode, updateIsOwner } =
  compilerSlice.actions;
