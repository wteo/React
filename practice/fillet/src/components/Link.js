import './Link.css'; 

function Link (props) {

    const link = props.name;

    return (
        <p className="link">{link}</p>
    );
}

export default Link;