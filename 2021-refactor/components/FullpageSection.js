import classNames from 'classnames';
import { useActiveSection } from 'context/FullpageLockingContext';
import styles from 'styles/components/fullpage-section.module.scss';

export default function FullpageSection({ children, index }) {
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
