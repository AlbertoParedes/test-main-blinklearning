import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateTestResponses } from '../redux/testsSlice';
import { useNavigate } from 'react-router-dom';

import Header from '../components/header';
import { getTestAnswers, getTestPossibleResponses } from '../utils/fakeapi';

import '../css/Test.scss';

function Test() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [responses, setResponses] = useState(useSelector((state) => state.tests.test));
  
  const testAnswers = getTestAnswers();
  const testPossibleResponses = getTestPossibleResponses();

  const allowDrop = (ev) => {
    ev.preventDefault();
  }

  const drag = (ev) => {
    ev.dataTransfer.setData('text', ev.target.id);
  }

  const drop = (ev) => {
    ev.preventDefault();
    var data = ev.dataTransfer.getData('text');
    ev.target.appendChild(document.getElementById(data));
  
    const answer = ev.target.id;
    const userResponse = data;

    setResponses({ ...responses, [answer]: userResponse });
  }

  const saveResponses = () => {
    dispatch(updateTestResponses({ ...responses, done: true }));
    navigate(`/`);
  }

  const resetResponses = () => {
    testPossibleResponses.forEach(response => {
      document.getElementById('responses').appendChild(document.getElementById(response));
    });
    setResponses({ done: false });
  }

  const isAnswersValid = () => {
    let valid = true;

    testAnswers.forEach(answer => {
      if (!responses[answer.answerId])
        valid = false
    });

    return valid;
  }
  
  return (
    <div className='test'>
      <Header />
      <div className='content test-wrapper'>
        {testAnswers.map(answer => {
          return (
            <div className='answer'>
              <p className='answer-title'>{answer.answerTitle}</p>
              <div className='answer-placeholder' id={answer.answerId} onDrop={e => drop(e)} onDragOver={e => allowDrop(e)}></div>
            </div>
          )   
        })}
      </div>
      <div className='bottom-bar exercise-resources'>
        <p className='exercise-title'>1 - Arrastra cada figura a su posición y pulsa "GUARDAR" cuando hayas terminado.</p>
        <div className='exercise-content'>
          <div className="exercise-responses">
            <div id='responses' className="exercise-responses-options">
              <div id='rsp34459' className='response-option' draggable='true' onDragStart={e => drag(e)}>
                <svg width='104' height='104'>
                  <rect width='100' height='100' strokeWidth='0' fill='#4ec946' />
                </svg>
              </div>
              <div id='rsp37856' className='response-option' draggable='true' onDragStart={e => drag(e)}>
                <svg width='104' height='104'>
                  <ellipse cx="50" cy="50" rx="50" ry="30" strokeWidth='0' fill='#4ec946' />
                </svg>
              </div>
              <div id='rsp34564' className='response-option' draggable='true' onDragStart={e => drag(e)}>
                <svg width='104' height='104'>
                  <circle cx='52' cy='52' r='50' strokeWidth='0' fill='#4ec946' />
                </svg>
              </div>
              <div id='rsp37834' className='response-option' draggable='true' onDragStart={e => drag(e)}>
                <svg width='104' height='104'>
                  <polygon points='50,0 0,100 100,100' strokeWidth='0' fill='#4ec946' />
                </svg>
              </div>
              <div id='rsp37234' className='response-option' draggable='true' onDragStart={e => drag(e)}>
                <svg width='104' height='104'>
                  <rect x="0" y="20" width='100' height='60' strokeWidth='0' fill='#4ec946' />
                </svg>
              </div>
            </div>
          </div>
          <div className="exercise-actions">
            <div className='button secondary' href='#' onClick={() => resetResponses()}>Reiniciar</div>
            <div className='button' disabled={!isAnswersValid()} href='#' onClick={() => saveResponses()}>Guardar</div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Test;
