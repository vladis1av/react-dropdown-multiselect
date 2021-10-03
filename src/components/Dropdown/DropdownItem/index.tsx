import React from 'react';

import { IItem } from '../../../interfaces/Item';
import Icon from '../../Icon';
import DropdownItemStyle from './DropdownItem.module.css';

interface DropdownItemProps {
  item: IItem;
  showIcon?: boolean;
  toggleSelect: (item: IItem) => void;
  isSelected: (item: IItem) => boolean;
}

const DropdownItem: React.FC<DropdownItemProps> = ({
  item,
  toggleSelect,
  isSelected,
  showIcon,
}) => {
  return (
    <div className={DropdownItemStyle.item}>
      <label
        className={DropdownItemStyle.label}
        onMouseUp={() => toggleSelect(item)}>
        {showIcon && (
          <div className={DropdownItemStyle.iconLang}>
            <Icon name={item.icon} width="22" height="22" />
          </div>
        )}
        <span>{item.lang}</span>
        <input
          checked={isSelected(item)}
          className={DropdownItemStyle.checkbox}
          type="checkbox"
        />
        <span className={DropdownItemStyle.checkboxCustom}></span>
      </label>
    </div>
  );
};

export default DropdownItem;
