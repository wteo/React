import './Navigator.css';
import Link from './Link.js';

function Navigator(props) {

    return (
        <div>
            <Link name={props.link.navigatorLink[0]}/>
            <Link name={props.link.navigatorLink[1]}/>
            <Link name={props.link.navigatorLink[2]}/>
            <Link name={props.link.navigatorLink[3]}/>
            <Link name={props.link.navigatorLink[4]}/>
            <Link name={props.link.navigatorLink[5]}/>
            <Link name={props.link.navigatorLink[6]}/>
            <Link name={props.link.navigatorLink[7]}/>
        </div>
    );
}

export default Navigator;