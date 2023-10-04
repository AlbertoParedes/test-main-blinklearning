import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { getTestAnswers, getTestPossibleResponses } from '../utils/fakeapi';
import { useTests } from '../contexts/TestContext';
import Answer from '../components/Answer';
import Button from '../components/Button';
import { styled } from 'styled-components';
import Response from '../components/Response';
import { possibleResponses } from '../utils/utils';
import '../css/Test.scss';

function Test() {
  const testAnswers = getTestAnswers();
  const testPossibleResponses = getTestPossibleResponses();
  const { test, updateTest } = useTests();
  const [responses, setResponses] = useState(test?.responses ?? {});
  const [responseSelected, setResponseSelected] = useState(null);
  const responsesElm = useRef(null);
  const answerEls = useRef({});
  const responseEls = useRef({});

  const navigate = useNavigate();

  const onDragStart = (responseId) => setResponseSelected(responseId);

  const onDragEnd = () => setResponseSelected(null);

  const drop = (ev, answerId) => {
    ev.preventDefault();
    if (!responses?.[answerId]) {
      const answerElement = answerEls.current?.[answerId];
      const responseElement = responseEls.current?.[responseSelected];
      answerElement?.appendChild(responseElement);
      setResponses({ ...responses, [answerId]: responseSelected });
    }
  };

  const saveResponses = () => {
    updateTest({ done: true, responses });
    navigate(`/`);
  };

  const resetResponses = () => {
    testPossibleResponses.forEach((responseId) => {
      responsesElm.current.appendChild(responseEls?.current?.[responseId]);
    });
    setResponses({});
    updateTest({ done: false, responses: {} });
  };

  const isAnswersValid = useCallback(() => testAnswers.every(({ answerId }) => !!responses?.[answerId]), [testAnswers, responses]);

  const setResponsesElements = useCallback(() => {
    testAnswers.forEach(({ answerId }) => {
      const answerElement = answerEls.current?.[answerId];
      const responseElement = responseEls.current?.[responses?.[answerId]];
      answerElement?.appendChild(responseElement);
    });
  }, [testAnswers, responses]);

  useEffect(() => {
    test?.done && setResponsesElements();
  }, [test?.done, setResponsesElements]);

  return (
    <div className="test">
      <Header />
      <div className="content test-wrapper">
        {testAnswers.map(({ answerId, answerTitle }) => (
          <Answer key={answerId} ref={(element) => (answerEls.current[answerId] = element)} {...{ answerId, answerTitle, drop }} ignoreValidation />
        ))}
      </div>
      <div className="bottom-bar exercise-resources">
        <p className="exercise-title">1 - Arrastra cada figura a su posición y pulsa "GUARDAR" cuando hayas terminado.</p>
        <div className="exercise-content">
          <div className="exercise-responses">
            <ResponsesContainer ref={responsesElm}>
              {Object.values(possibleResponses).map(({ responseId, icon }) => (
                <Response ref={(element) => (responseEls.current[responseId] = element)} {...{ responseId, icon, onDragStart, onDragEnd }} draggable />
              ))}
            </ResponsesContainer>
          </div>
          <ExerciseActions>
            <Button text="Reiniciar" onClick={resetResponses} secondary />
            <Button text="Guardar" onClick={saveResponses} disabled={!isAnswersValid()} />
          </ExerciseActions>
        </div>
      </div>
    </div>
  );
}

export default Test;

const ExerciseActions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 2rem;
`;

const ResponsesContainer = styled.div`
  display: flex;
  gap: 2rem;
`;
