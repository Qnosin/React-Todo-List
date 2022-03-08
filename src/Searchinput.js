import { useState } from "react";
const Search = ({ setTask }) => {
    const [inputValue,setInputValue] = useState('');
    const [info,setInfo] = useState('');
    let [x,setX] = useState(0);
    const handleClick = ()=>{
        if (inputValue.length < 6){
            setInfo('Too Short or empty....')
            setTimeout(()=>{
                setInfo("");
            },2000)
        }else{
            setX(++x)
            const obj = {name : inputValue,key:x}
            setTask(task => [...task, obj]);
            setTimeout(()=>{
                setInputValue('');
            },500)
        };
    }
    return (
        <div className="search-box">
            <input autoComplete="off" type="text" name="add-text" onChange={(e)=>setInputValue(e.target.value)} value={inputValue}></input>
            <div className="addButton" onClick={handleClick}>+</div>
            <div className="info">{info}</div>
        </div>
      );
}
export default Search;