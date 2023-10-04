import Header from '../components/Header';
import { getTestAnswers } from '../utils/fakeapi';
import Answer from '../components/Answer';
import { useTests } from '../contexts/TestContext';
import Response from '../components/Response';
import { possibleResponses } from '../utils/utils';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Test.scss';

function Results() {
  const { test } = useTests();
  const testAnswers = getTestAnswers();
  const navigate = useNavigate();

  useEffect(() => {
    !test?.done && navigate('/');
  }, [test?.done, navigate]);

  return (
    <div className="test">
      <Header />
      <div className="content test-wrapper">
        {testAnswers.map(
          ({ answerId, answerTitle, response }) =>
            test?.responses?.[answerId] && (
              <Answer key={answerId} isValid={response === test?.responses?.[answerId]} {...{ answerId, answerTitle }}>
                <Response icon={possibleResponses?.[test?.responses?.[answerId]]?.icon} />
              </Answer>
            )
        )}
      </div>
    </div>
  );
}

export default Results;
