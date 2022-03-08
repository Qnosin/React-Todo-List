import Search from "./Searchinput";
import Element from './Element';
import { useState } from "react";
const Todo = () => {
    const [task,setTask] = useState([]);
    return ( 
        <div className="body">
            <div className="add">
                <Search setTask={setTask}></Search>
            </div>
            <div className="list-place">
                    <Element setTask={setTask} list={task}></Element>
            </div>
        </div>
     );
}
 
export default Todo;