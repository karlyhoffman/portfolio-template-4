import { createContext, useContext, useState } from 'react';

const FullpageLockingContext = createContext(null);

const useActiveSection = () => {
  const [activeIndex, setActiveIndex] = useContext(FullpageLockingContext);
  
  const onIndexChange = (value) => {
    setActiveIndex(value);
  };

  return { activeIndex, onIndexChange };
};

const FullpageLockingProvider = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <FullpageLockingContext.Provider value={[activeIndex, setActiveIndex]}>
      {children}
    </FullpageLockingContext.Provider>
  );
};

export { FullpageLockingProvider, useActiveSection };
