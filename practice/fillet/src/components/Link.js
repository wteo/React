import './Link.css'; 

function Link (props) {

    const link = props.name;

    return (
        <p>{link}</p>
    );
}

export default Link;