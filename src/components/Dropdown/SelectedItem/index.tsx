import React from 'react';
import Icon from '../../Icon';

import SelectItemStyle from './SelectedItem.module.css';

interface SelectedItemProps {
  title: string;
  itemId: number;
  removeSelection: (item: number) => void;
}

const SelectedItem: React.FC<SelectedItemProps> = ({
  title,
  itemId,
  removeSelection,
}) => {
  return (
    <div className={SelectItemStyle.select}>
      <span>{title}</span>
      <div
        className={SelectItemStyle.selectIcon}
        onClick={() => removeSelection(itemId)}>
        <Icon name="cancel" width="7.5" height="7.5" />
      </div>
    </div>
  );
};

export default SelectedItem;
