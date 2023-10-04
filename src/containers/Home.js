import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import '../css/Home.scss';

function Home() {
  const testResponses = useSelector((state) => state.tests.test);

  return (
    <div className='home'>
      <div className="home-logo">
        <img className='logo' alt='Blinklearning logo' src='assets/img/logo.png' />
      </div>
      <div className="home-buttons">
        <Link className='button' to={`/test`} disabled={testResponses.done}>Realizar prueba</Link>
        <Link className='button' to={`/results`} disabled={!testResponses.done}>Ver resultados</Link>
      </div>
    </div>
  );
}

export default Home;
