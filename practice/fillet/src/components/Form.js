import React, {useState} from 'react'; 

function Form () {

    const [enteredComment, setComment] = useState("");

    const keyPressHandler = (event) => {
        if (event.key === "Enter") {
            setComment(event.target.value);   
        }
    };

    return (
        <form>
            <label for="comment">Comment(s)</label>
            <br/>
            <textarea onKeyPress={keyPressHandler} name="comment" maxLength="500" rows="5" cols = "40"/>
            <br/>
            <input type="submit" value="Submit"/>
            <br/>
            <br/>
            <p>{enteredComment}</p>
        </form>
    );
}

export default Form;