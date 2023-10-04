import { useSelector } from 'react-redux';

import Header from '../components/header';
import { getTestAnswers } from '../utils/fakeapi';

import '../css/Test.scss';

function Results() {
  const results = useSelector((state) => state.tests.test);

  const testAnswers = getTestAnswers();

  const possibleResponses = {
    rsp34459: (
      <div id='response_square' className='response-option'>
        <svg width='104' height='104'>
          <rect width='100' height='100' strokeWidth='0' fill='#4ec946' />
        </svg>
      </div>
    ),
    rsp37856: (
      <div className='response-option'>
        <svg width='104' height='104'>
          <ellipse cx="50" cy="50" rx="50" ry="30" strokeWidth='0' fill='#4ec946' />
        </svg>
      </div>
    ),
    rsp34564: (
      <div className='response-option'>
        <svg width='104' height='104'>
          <circle cx='52' cy='52' r='50' strokeWidth='0' fill='#4ec946' />
        </svg>
      </div>
    ),
    rsp37834: (
      <div className='response-option'>
        <svg width='104' height='104'>
          <polygon points='50,0 0,100 100,100' strokeWidth='0' fill='#4ec946' />
        </svg>
      </div>
    ),
    rsp37234: (
      <div className='response-option'>
        <svg width='104' height='104'>
          <rect x="0" y="20" width='100' height='60' strokeWidth='0' fill='#4ec946' />
        </svg>
      </div>
    )
  }

  const returnAnswer = (answer) => {
    if (!results[answer.answerId])
      return false;

    const response = results[answer.answerId];
    const isValid = answer.response === results[answer.answerId];

    return (
      <div key={answer.answerId} className={`answer ${isValid ? 'valid' : 'invalid'}`}>
        <p className='answer-title'>{answer.answerTitle}</p>
        <div className='answer-placeholder'>
          {possibleResponses[response]}
        </div>
      </div>
    )
  }

  return (
    <div className='test'>
      <Header />
      <div className='content test-wrapper'>
        {testAnswers.map(answer => {
          return returnAnswer(answer)
        })}
      </div>
    </div>
  );
}

export default Results;
