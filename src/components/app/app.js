import React from 'react';
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import TodoList from "../todo-list";
import ItemAddForm from "../item-add-form";
import './app.css';

class App extends React.Component {
    maxId = 100;
    state = {
        todoData: [
            { label: 'Drink Coffee', done: false, important: false, id: 1 },
            { label: 'Make Awesome App', done: false, important: true, id: 2 },
            { label: 'Have a lunch', done: false, important: false, id: 3 }
        ]
    };

    createTodoItem(label){
        return { label: label, important: false, done: false, id: this.maxId++ }
    }

    deleteItem = (id)=> {
        this.setState(({todoData})=> {
            const idx = todoData.findIndex((el)=> el.id === id);
            return {
                todoData: [...todoData.slice(0, idx),
                           ...todoData.slice(idx + 1)]
            }
        })
    }
    addItem = (text) => {
        this.setState(({todoData})=>{
            return {
                todoData: [...todoData, this.createTodoItem(text)]
            }
        })
    }

    onToggleImportant = (id) => {
        this.setState(({todoData})=>{
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            }
        })
    }

    onToggleDone = (id) => {
        this.setState(({todoData})=>{
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            }
        })
    }
    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex((el)=> el.id === id);
        const oldItem = arr[idx];
        const newItem = {...oldItem, [propName]: !oldItem[propName]}
        return [...arr.slice(0, idx), newItem,
                ...arr.slice(idx + 1)]
    }

    render() {
        const doneCount = this.state.todoData
                            .filter((el)=>el.done).length;
        const todoCount = this.state.todoData.length - doneCount;

        return (
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={doneCount} />
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>

                <TodoList
                    todos={this.state.todoData}
                    onDeleted={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}/>
                <ItemAddForm
                    addItem={this.addItem}/>
            </div>
        )
    }
}




export default App;