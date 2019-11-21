import Head from 'next/head';
import NavBarCom from '../components/nav';
import HomePageJombotron from '../components/home_jumbotron';
import 'bootstrap/dist/css/bootstrap.css';
import '../style/global.css';

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
      <link href="https://fonts.googleapis.com/css?family=Vidaloka&display" rel="stylesheet" />
    </Head>

    <NavBarCom />

    <div className="container">
      <div className="row align-content-center" style={{ height: '90vh' }}>
        <div className="col-lg text-center">
          <HomePageJombotron />
        </div>
      </div>
    </div>
  </div>
);

export default Home;
