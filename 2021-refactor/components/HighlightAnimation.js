/* Triggered by FullpageLocking.js section change */
import classNames from 'classnames';
import { useActiveSection } from 'context/FullpageLockingContext';
import styles from 'styles/components/highlight-animation.module.scss';

const Highlight = ({ children, sectionIndex, color }) => {
  const { activeIndex } = useActiveSection();
  const { props: { children: text = '' } = {}, type: ElementType } =
    children || {};

  if (!text || !ElementType) {
    console.error(
      'Please wrap the <Highlight> component around an element tag and text.'
    );
    return null;
  }

  const words = text.split(' ');

  return (
    <ElementType
      className={classNames(styles.wrapper, styles[color], {
        [styles.animate]: sectionIndex === activeIndex,
      })}
    >
      {words.map((word, i) => (
        <span key={word + i} className={styles.word}>
          {word}
          &nbsp;
        </span>
      ))}
    </ElementType>
  );
};

export default Highlight;
