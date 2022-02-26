import Header from './components/Header.js';
import Navigator from './components/Navigator.js';
import Summary from './components/Summary.js';
import Ingredients from './components/Ingredients.js';
import Method from './components/Method.js';
import Form from './components/Form.js';
import Footer from './components/Footer.js';
import Image from './components/images/logo.jpg';


function App () {
  return (
  <div>
    <section id="top">
      <Header/>
      <br/>
      <Navigator/>
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
    <Footer/>
  </div>
  );
}

export default App;