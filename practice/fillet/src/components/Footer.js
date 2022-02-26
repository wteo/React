import './Footer.css';
import Link from './Link.js';

function Footer () {

    const links = {
        internal    : ["About us", "Contact us", "Newsletter", "Good Food Gift Card", 
        "Advertise with us", "Privacy statement", "Terms of use", "Sitemap", "Feedback"],
        external    : ["The Sydney Morning Herald", "The Age", "Domain", "Home Price Guide"]
    };

    return (
        <footer>
            <div className="footer">
                <Link name={links.internal[0]}/>
                <Link name={links.internal[1]}/>
                <Link name={links.internal[2]}/>
                <Link name={links.internal[3]}/>
                <Link name={links.internal[4]}/>
                <Link name={links.internal[5]}/>
                <Link name={links.internal[6]}/>
                <Link name={links.internal[7]}/>
                <Link name={links.internal[8]} className="lastFooter"/>
            </div>
            <div className="footer">
                <Link name={links.external[0]}/>
                <Link name={links.external[1]}/>
                <Link name={links.external[2]}/>
                <Link name={links.external[3]} className="lastFooter"/>
            </div>
            <br/>
            <div>
                <p>Copyright © 2022</p>
            </div>
        </footer>
    );
}

export default Footer;