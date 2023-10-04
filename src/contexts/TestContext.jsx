import { createContext, useMemo, useState, useContext, useCallback } from 'react';

const initialState = {
  done: false,
  responses: {}
};

const TestsContext = createContext();

export const TestProvider = ({ children }) => {
  const [test, setTest] = useState(initialState);

  const updateTest = useCallback((payload) => setTest(payload), []);

  const contextValue = useMemo(
    () => ({
      test,
      updateTest
    }),
    [test, updateTest]
  );

  return <TestsContext.Provider value={contextValue}>{children}</TestsContext.Provider>;
};

export const useTests = () => useContext(TestsContext);
