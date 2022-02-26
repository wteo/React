function Form () {
    return (
        <form>
            <label for="comment">Comment(s)</label>
            <br/>
            <textarea name="comment" maxLength="500" rows="5" cols = "40"/>
            <br/>
            <input type="submit" value="Submit"/>
        </form>
    );
}

export default Form;