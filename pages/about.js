import NavBarCom from '../components/nav';
import AboutPageJombotron from '../components/about_jumbotron';
import 'bootstrap/dist/css/bootstrap.css';
import '../style/global.css';

const Home = () => (
  <div>

    <NavBarCom />

    <div className="container">
      <div className="row align-content-center" style={{ height: '90vh' }}>
        <div className="col-lg text-center">
          <AboutPageJombotron />
        </div>
      </div>
    </div>
  </div>
);

export default Home;
