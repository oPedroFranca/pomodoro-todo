import * as S from './styles';
import { useState, useEffect, useRef } from 'react';
import { IoTrashOutline } from 'react-icons/io5';
import { IoIosArrowForward } from "react-icons/io";

export const MenuEdit = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [isStatusOptionsOpen, setIsStatusOptionsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };

  const toggleStatusOptions = () => {
    setIsStatusOptionsOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropDownOpen(false);
      setIsStatusOptionsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <S.Container ref={dropdownRef}>
      <S.MenuHamburguer size={20} onClick={toggleDropdown} />
      {isDropDownOpen && (
        <S.Dropdown>
          <S.Option className="status" onClick={toggleStatusOptions}>
            <IoIosArrowForward /> Status
            {isStatusOptionsOpen && (
              <S.StatusOptions>
                <div>High</div>
                <div>Normal</div>
                <div>Low</div>
              </S.StatusOptions>
            )}
          </S.Option>
          <S.Option className="trash">
            <IoTrashOutline size={16} />
            <span>Delete</span>
          </S.Option>
        </S.Dropdown>
      )}
    </S.Container>
  );
};