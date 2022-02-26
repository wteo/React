import './Navigator.css';
import Link from './Link.js';

function Navigator() {

    const links = ["Home", "Eat Out", "Good Food Guide", "Recipes", "Staying In", 
    "Drinks", "Travel", "Good Food Kitchen"];

    return (
        <div>
            <Link name={links[0]}/>
            <Link name={links[1]}/>
            <Link name={links[2]}/>
            <Link name={links[3]}/>
            <Link name={links[4]}/>
            <Link name={links[5]}/>
            <Link name={links[6]}/>
            <Link name={links[7]}/>
        </div>
    );
}

export default Navigator;