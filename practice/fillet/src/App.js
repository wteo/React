import Header from './components/Header.js';
import Navigator from './components/Navigator.js';
import Summary from './components/Summary.js';
import Ingredients from './components/Ingredients.js';
import Method from './components/Method.js';
import Form from './components/Form.js';
import Footer from './components/Footer.js';
import Image from './components/images/logo.jpg';


function App () {

  const links = {
    navigatorLink       : ["Home", "Eat Out", "Good Food Guide", "Recipes", "Staying In", 
    "Drinks", "Travel", "Good Food Kitchen"],
    footerIntLink       : ["About us", "Contact us", "Newsletter", "Good Food Gift Card", 
    "Advertise with us", "Privacy statement", "Terms of use", "Sitemap", "Feedback"],
    footerExtLink       : ["The Sydney Morning Herald", "The Age", "Domain", "Home Price Guide"]
  };

  return (
  <div>
    <section id="top">
      <Header/>
      <br/>
      <Navigator link={links}/> 
    </section>
    <Summary/>
    <Ingredients/>
    <Method/>
    <br/>
    <br/>
    <Form/>
    <figure>
      <img src={Image} alt="Good Food logo" className="logo"/>
    </figure>
    <Footer link={links}/>
  </div>
  );
}

export default App;