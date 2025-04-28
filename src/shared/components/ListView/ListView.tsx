import { memo, useCallback } from 'react';
import classnames from 'classnames';

import styles from './ListView.module.scss';

interface IProps {
  list: Array<string>;
  className?: string;
  onClick: (id: string) => void;
  activeElementName?: string;
}

export const ListView = memo(
  ({ list, className, onClick, activeElementName }: IProps) => {
    const handleListElementClick = useCallback((name: string) => {
      return () => {
        onClick?.(name);
      };
    }, []);

    return (
      <div className={classnames(styles.list, className)}>
        {list?.map((name, idx) => (
          <div
            className={classnames(styles.listItem, {
              [styles.activeElement]: activeElementName === name,
            })}
            key={`key-${name}-${idx}`}
            onClick={handleListElementClick(name)}
          >
            {name}
          </div>
        ))}
      </div>
    );
  }
);

ListView.displayName = 'ListViewComponent';
