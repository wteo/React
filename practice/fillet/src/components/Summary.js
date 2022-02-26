import './Summary.css';
import Image from './images/fillet.jpg';

function Summary () {
    return (
    <div>
        <h2>Salmon fillets with caramelised onion and wilted greens</h2>
        <h6>Adam Liaw</h6>
        <div id="fillet"><img src={Image} alt="Salmon fillets with caramelised onion and wilted greens"/></div>
        <br/>
        <p>Fish cooks fast, so it makes a perfect quick dinner. Balance that with some slow-cooked caramelised onions and it won't look like something you've just thrown together at the last minute.</p>
    </div>
    );
}

export default Summary;