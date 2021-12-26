/* Triggered by FullpageLocking.js section change */
import classNames from 'classnames';
import { useActiveSection } from 'context/FullpageLockingContext';
import styles from 'styles/components/highlight-animation.module.scss';

const Highlight = ({ children, sectionIndex, color }) => {
  const { activeIndex } = useActiveSection();

  return (
    <div className={classNames(styles.wrapper, styles[color], { [styles.animate]: sectionIndex === activeIndex })}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Highlight;