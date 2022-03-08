import React, {useState} from 'react'; 

function Form () {

    const [enteredComment, setComment] = useState("");

    const changeHandler = (event) => {
        setComment(event.target.value); 
    };

    const submitHandler = (event) => {
        event.preventDefault();
        setComment("");
    }

    return (
        <form onSubmit={submitHandler} >
            <label htmlFor="comment">Comment(s)</label>
            <br/>
            <textarea value={enteredComment} onChange={changeHandler} name="comment" maxLength="500" rows="5" cols = "40"/>
            <br/>
            <input 
            type="submit" 
            value="Submit"/>
            <br/>
            <br/>
            <p>{enteredComment}</p>
        </form>
    );
}

export default Form;