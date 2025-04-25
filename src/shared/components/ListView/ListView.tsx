import { FC, memo, useCallback } from 'react';
import classnames from 'classnames';
import styles from './ListView.module.scss';

interface IProps {
  list: Array<{ name: string; id: string }>;
  className?: string;
  onClick: (id: string) => void;
}

export const ListView: FC<IProps> = memo(({ list, className, onClick }) => {
  const handleListElementClick = useCallback((id: string) => {
    return () => {
      onClick?.(id);
    };
  }, []);

  return (
    <div className={classnames(styles.list, className)}>
      {list?.map(({ name, id }) => (
        <div
          className={styles.listItem}
          key={id}
          onClick={handleListElementClick(id)}
        >
          {name}
        </div>
      ))}
    </div>
  );
});
