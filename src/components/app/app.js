import React from 'react';
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import TodoList from "../todo-list";
import ItemAddForm from "../item-add-form";
import './app.css';

class App extends React.Component {
    actions = {
        ALLL : 'ALLL',
        ACTIVE : 'ACTIVE',
        DONE : 'DONE'
    }
    maxId = 100;
    state = {
        todoData: [
            { label: 'Drink Coffee', done: false, important: false, id: 1 },
            { label: 'Make Awesome App', done: false, important: true, id: 2 },
            { label: 'Have a lunch', done: true, important: false, id: 3 }
        ],
        searchDefaultValue: '',
        filterButton: this.actions.DONE
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
    changeSearchDefaultValue = (value) => {
        this.setState(()=>{
            return {
                searchDefaultValue: value
            }
        })
    }
    changeFilterButton = (value) => {
        this.setState(()=>{
            return {
                filterButton: value
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
    filterTodoData(arr, value, filterButton) {
        let result = arr.filter((word) => word.label.toLowerCase().indexOf(value.toLowerCase()) !== -1);
        switch (filterButton) {
            case this.actions.ACTIVE:
                result = result.filter((item) => item.important === true);
                break;
            case this.actions.DONE:
                result = result.filter((item) => item.done === true);
                break;
            default:
                break;
        }
        return result;
    }

    render() {
        const doneCount = this.state.todoData
                            .filter((el)=>el.done).length;
        const todoCount = this.state.todoData.length - doneCount;
        const filterTodoData = this.filterTodoData(
            this.state.todoData,
            this.state.searchDefaultValue,
            this.state.filterButton);

        return (
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={doneCount} />
                <div className="top-panel d-flex">
                    <SearchPanel changeSearchDefaultValue={this.changeSearchDefaultValue}
                                 searchDefaultValue={this.state.searchDefaultValue}/>
                    <ItemStatusFilter actions={this.actions}
                                      changeFilterButton={this.changeFilterButton}
                                      filterButton = {this.state.filterButton}  />
                </div>

                <TodoList
                    todos={filterTodoData}
                    onDeleted={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                    searchDefaultValue={this.state.searchDefaultValue}/>
                <ItemAddForm
                    addItem={this.addItem}/>
            </div>
        )
    }
}




export default App;