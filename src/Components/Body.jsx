import { useState } from "react";

import OutputArea from "./TextArea";

function MainSection (){

    const [array, setArray] = useState([]);
    const [value, setvalue] = useState("");
    var [check, setCheck] = useState(false);

    var i = 0;
    var newArray = [];


    function handleChange (event){

    var targetValue = event.target.value;
    setvalue(targetValue);

    }

    function handleClick (){

        if (value === ""){
            alert("Enter your task!");
        }
        else {
            setArray((prevalue) => {
                return [...prevalue, value]
                
            })

            newArray[i] = array;
            i++;
    
            setvalue("");
            setCheck(true);
            
        }    
    }

    function ondelete (id){

        setArray(prevalue => {
            return prevalue.filter((arrayItem, index) => {

                if (array.length == 1 ){
                    setCheck(false);
                }

                return (index !== id)    
        });
    })
    
}


    function onEdit(id){

        var x = prompt("Edit your task!");

        array[id] = x;
        setvalue(x);
        
    }
    
    

    function DeleteAll(id){

        if (array == ""){
            alert("List is already Empty!");
        }

        setArray(prevalue => {
            return prevalue.filter((arrayItem, index) => {

                return;
            })
        })

        setCheck(false);

    }


    return (

        <div className="MainDiv" >
            <div className="headingDiv">
                <h1>Todo List</h1>
            </div>

            <div className="InputDiv">
                <input value={value} type={"text"} placeholder="Enter your task" className="taskInput" onChange={handleChange}></input>
                
                <button type={"submit"} className="addButton" onClick={handleClick} >Add</button>
            </div>

            {check ? 
                array.map((arrayItems,index) => {
                        return <OutputArea value={arrayItems} id={index} key ={index} remove={ondelete} modify={onEdit} />
                }) :
                <div className="ImageDiv">
                    <img src = "./Images/todolist.svg" width={"50%"}></img>
                </div>
        }

        <button type={"button"} onClick={DeleteAll} className="DelButton">Delete All</button>

        </div>

    );

}


export default MainSection;