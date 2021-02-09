import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import TodoList from "../todo-list";
import './app.css'


const App = ()=> {
    const todoData = [
        {label: "Drink coffee", important: false, id: 1},
        {label: "Learn React", important: false, id: 2},
        {label: "Building React app", important: true, id: 3}
    ]

    const todoData2 = {
        toDo: 2, done: 3
    }
    return (
        <div className="todo-app">
            <AppHeader toDo={todoData2.toDo} done={todoData2.done}/>
            <div className="top-panel d-flex">
                <SearchPanel/>
                <ItemStatusFilter/>
            </div>

            <TodoList todos={todoData}/>
        </div>)
}

export default App;