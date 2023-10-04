import { Link } from 'react-router-dom';
import { useTests } from '../contexts/TestContext';
import '../css/Home.scss';

function Home() {
  const { test } = useTests();

  return (
    <div className="home">
      <div className="home-logo">
        <img className="logo" alt="Blinklearning logo" src="assets/img/logo.png" />
      </div>
      <div className="home-buttons">
        <Link className="button" to={`/test`} disabled={test?.done}>
          Realizar prueba
        </Link>
        <Link className="button" to={`/results`} disabled={!test?.done}>
          Ver resultados
        </Link>
      </div>
    </div>
  );
}

export default Home;
