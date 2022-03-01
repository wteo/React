import './Footer.css';
import Link from './Link.js';

function Footer (props) {

    return (
        <footer>
            <div className="footer">
                <Link name={props.link.footerIntLink[0]}/>
                <Link name={props.link.footerIntLink[1]}/>
                <Link name={props.link.footerIntLink[2]}/>
                <Link name={props.link.footerIntLink[3]}/>
                <Link name={props.link.footerIntLink[4]}/>
                <Link name={props.link.footerIntLink[5]}/>
                <Link name={props.link.footerIntLink[6]}/>
                <Link name={props.link.footerIntLink[7]}/>
                <Link name={props.link.footerIntLink[8]} className="lastFooter"/>
            </div>
            <div className="footer">
                <Link name={props.link.footerExtLink[0]}/>
                <Link name={props.link.footerExtLink[1]}/>
                <Link name={props.link.footerExtLink[2]}/>
                <Link name={props.link.footerExtLink[3]} className="lastFooter"/>
            </div>
            <br/>
            <div>
                <p>Copyright © 2022</p>
            </div>
        </footer>
    );
}

export default Footer;