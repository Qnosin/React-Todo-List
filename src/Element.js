import { useState } from "react";

const Element = (props) => {
    const handleClick = (id)=>{
        let arr = props.list.filter((elem)=>{
            return elem.key !== id;
        })
        props.setTask(arr);
    }
    const handleCheck = (e)=>{
        const text = e.target.parentElement.previousElementSibling.childNodes[0];
        text.classList.toggle('line');
    }
    sessionStorage.setItem('elements', JSON.stringify(props.list));
    return (
        props.list.length === 0 ? <h3 className="info__when__nothing">Nothing here right now add first todo!</h3> :  props.list.map((elem)=>{
            return(
            <div className="element" key={elem.key}>
                <div className="task"><span>{elem.name}</span></div>
                <div className="option">
                <div onClick={()=>handleClick(elem.key)} className="trash">&#x1F5D1;</div>
                <input onClick={(e)=>handleCheck(e)} type='checkbox' className="Check"></input>  
                </div>
          </div>
            )
        })
      );
}
 
export default Element;