import React, { useState } from 'react';

import { IItem } from '../../interfaces/Item';
import Icon from '../Icon';
import DropdownItem from './DropdownItem';
import SelectedItem from './SelectedItem';
import DropdownStyle from './Dropdown.module.css';

interface DropdownProps {
  items: Array<IItem>;
  multiSelect?: boolean;
  showIcon?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({
  items,
  multiSelect = false,
  showIcon = true,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [selection, setSelection] = useState<IItem[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  console.log(inputValue);

  const openToggle = (): void => setOpen(!open);

  const removeSelection = (itemId: number): void => {
    const filteredSelections = [...selection].filter(
      (current) => current.id !== itemId,
    );
    setSelection([...filteredSelections]);
  };

  function toggleSelect(item: IItem) {
    if (!selection.some((current) => current.id === item.id)) {
      if (!multiSelect) {
        setSelection([item]);
      } else if (multiSelect) {
        setSelection((prevState) => [...prevState, item]);
      }
    } else {
      removeSelection(item.id);
    }
  }

  const isSelected = (item: IItem): boolean => {
    console.log(selection.some((current) => current.id === item.id));

    return selection.some((current) => current.id === item.id);
  };

  return (
    <div className={DropdownStyle.dropdownWrapper}>
      <span className={DropdownStyle.dropdownTitle}>Язык</span>
      <div
        className={DropdownStyle.dropdown}
        onClick={() => !selection.length && openToggle()}>
        <div className={DropdownStyle.selectionList}>
          {selection.length ? (
            selection.map((item) => (
              <SelectedItem
                key={item.id}
                title={item.lang}
                itemId={item.id}
                removeSelection={removeSelection}
              />
            ))
          ) : (
            <span className={DropdownStyle.selectionListTitle}>
              Выберите язык из списка
            </span>
          )}
        </div>
        <div
          className={DropdownStyle.dropdownListInputIconArrow}
          onClick={openToggle}>
          <Icon
            className={
              !open ? DropdownStyle.dropdownListInputIconArrowRotate : ''
            }
            name="arrow"
            width="11"
            height="6"
          />
        </div>
      </div>
      {open && (
        <div className={DropdownStyle.dropdownList}>
          <div className={DropdownStyle.dropdownListInputWrapper}>
            <Icon
              className={DropdownStyle.dropdownListInputIconSearch}
              name="search"
              width="18"
              height="18"
            />
            <input
              type="text"
              className={DropdownStyle.dropdownListInput}
              placeholder="Поиск"
              value={inputValue}
              onChange={(e) => onChangeInput(e)}
            />
          </div>
          {items
            .filter((value) => {
              if (!inputValue.trim()) {
                return value;
              } else if (
                value.lang
                  .toLocaleLowerCase()
                  .includes(inputValue.toLocaleLowerCase())
              ) {
                return value;
              }
            })
            .map((item) => (
              <DropdownItem
                key={item.id}
                item={item}
                toggleSelect={toggleSelect}
                isSelected={isSelected}
                showIcon={showIcon}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
