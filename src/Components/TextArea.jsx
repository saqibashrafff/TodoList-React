
function OutputArea (props){

    function onHandleClick(){
        props.remove(props.id);
    }

    function EditClick(){
        props.modify(props.id);
    }

    return (
        <>
        <div className="textDiv">
            <p id="EditText" >{props.value}</p>
            <img src="./Images/trash-can-10415.svg" width={"4%"} className="icons" 
            onClick={onHandleClick}
            ></img>
            <img src="./Images/content-9810.svg" width={"4%"} className="icons" 
            onClick={EditClick}
            ></img> 
        </div>
        </>
    );
}

export default OutputArea;