import { useEffect } from 'react';
import classNames from 'classnames';
import { useActiveSection } from 'context/FullpageLockingContext';
import useStateRef from 'hooks/useStateRef';
import styles from 'styles/components/fullpage-container.module.scss';

const ANIMATION_DURATION = 750;

function FullpageSection({ children, index }) {
  const { activeIndex } = useActiveSection();
  
  return (
    <section
      className={classNames(styles.fp_section, {
        [styles.active]: activeIndex === index,
      })}
    >
      {children}
    </section>
  );
}

const FullpageLockingContainer = ({ children }) => {
  const SECTIONS = children.flat();
  const { activeIndex, onIndexChange } = useActiveSection();
  // Use refs to keep track of state because of event listener functions:
  const [activeIndexState, setActiveIndex, activeRef] = useStateRef(0);
  const [isAnimatingState, setIsAnimating, isAnimatingRef] = useStateRef(false);

  function goToPrevSlide() {
    const prevIndex = activeRef.current - 1;
    if (prevIndex > -1 && !isAnimatingRef.current) {
      goToSlide(prevIndex);
    }
  }

  function goToNextSlide() {
    const nextIndex = activeRef.current + 1;
    if (nextIndex < SECTIONS.length && !isAnimatingRef.current) {
      goToSlide(nextIndex);
    }
  }

  const goToSlide = (toSectionIdx) => {
    setIsAnimating(true);
    setActiveIndex(toSectionIdx);
  };

  const onSectionChangeEnd = () => {
    setTimeout(() => {
      setIsAnimating((prevState) => !prevState);
    }, ANIMATION_DURATION);
  };

  const handleScroll = (e) => {
    const delta = e.deltaY / 30 || -e.deltaY;
    if (delta < -1) goToPrevSlide();
    else if (delta > 1) goToNextSlide();
  };

  const handleKeydown = (e) => {
    e.preventDefault();
    const keyCodes = { UP: 38, DOWN: 40 };
    const pressedKey = e.keyCode;
    if (pressedKey === keyCodes.UP) goToPrevSlide();
    if (pressedKey === keyCodes.DOWN) goToNextSlide();
  };

  const handleMobileSwipe = (el) => {
    const swipe_det = {
      sX: 0,
      sY: 0,
      eX: 0,
      eY: 0,
    };
    const max_x = 30; // max x difference for vertical swipe
    const min_y = 50; // min y swipe for vertical swipe
    el.addEventListener(
      'touchstart',
      function(e) {
        const [t] = e.touches;
        swipe_det.sX = t.screenX;
        swipe_det.sY = t.screenY;
      },
      false
    );
    el.addEventListener(
      'touchmove',
      function(e) {
        const [t] = e.touches;
        swipe_det.eX = t.screenX;
        swipe_det.eY = t.screenY;
      },
      false
    );
    el.addEventListener(
      'touchend',
      function() {
        // vertical detection
        if (
          (swipe_det.eY - min_y > swipe_det.sY ||
            swipe_det.eY + min_y < swipe_det.sY) &&
          swipe_det.eX < swipe_det.sX + max_x &&
          swipe_det.sX > swipe_det.eX - max_x &&
          swipe_det.eY > 0
        ) {
          // if (swipe_det.eY > swipe_det.sY) direc = "down";
          // else direc = "up";
          if (swipe_det.eY > swipe_det.sY) goToPrevSlide();
          else goToNextSlide();
        }
        swipe_det.sX = 0;
        swipe_det.sY = 0;
        swipe_det.eX = 0;
        swipe_det.eY = 0;
      },
      false
    );
  };

  useEffect(() => {
    handleMobileSwipe(window);
    window.addEventListener('wheel', handleScroll, { passive: false });
    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('wheel', handleScroll, { passive: false });
      window.removeEventListener('keydown', handleKeydown);
    };
  }, []);

  useEffect(() => {
    if (isAnimatingRef.current) {
      onSectionChangeEnd();
    }
  }, [isAnimatingRef?.current]);

  useEffect(() => {
    onIndexChange(activeRef.current);
  }, [activeRef?.current]);

  return (
    <main id={styles.fp_container}>
      {SECTIONS.map((child, index) => {
        const { props: { id } = {} } = child;
        return (
          <FullpageSection key={id} index={index}>
            {child}
          </FullpageSection>
        );
      })}
    </main>
  );
};

export default FullpageLockingContainer;
