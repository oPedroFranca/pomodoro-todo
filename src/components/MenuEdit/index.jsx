import * as S from './styles';
import { useState, useEffect, useRef } from 'react';
import { IoTrashOutline, IoCheckmarkOutline } from 'react-icons/io5';
import { IoIosArrowForward } from "react-icons/io";

export const MenuEdit = ({ onStatusChange, onDeleteTask }) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [isStatusOptionsOpen, setIsStatusOptionsOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState(null);

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

  const handleStatusChange = (status) => {
    setSelectedStatus((prev) => {
      const newStatus = prev === status ? null : status;
      onStatusChange(newStatus);
      return newStatus;
    });
  };

  const DeleteTask = () => {
    onDeleteTask()
  };

  const dropdownRef = useRef(null);
  return (
    <S.Container ref={dropdownRef}>
      <S.MenuHamburguer size={20} onClick={toggleDropdown} />
      {isDropDownOpen && (
        <S.Dropdown>
          <S.Option className="status" onClick={toggleStatusOptions}>
            <IoIosArrowForward /> Status
            {isStatusOptionsOpen && (
              <S.StatusOptions>
                <S.PriorityButtonsContainer onClick={(e) => e.stopPropagation()}>
                  <S.Checkbox
                    checked={selectedStatus === 'High'}
                    onClick={() => handleStatusChange('High')}
                  >
                    {selectedStatus === 'High' && <IoCheckmarkOutline size={16} />}
                  </S.Checkbox> High
                </S.PriorityButtonsContainer>
                <S.PriorityButtonsContainer onClick={(e) => e.stopPropagation()}>
                  <S.Checkbox
                    checked={selectedStatus === 'Normal'}
                    onClick={() => handleStatusChange('Normal')}
                  >
                    {selectedStatus === 'Normal' && <IoCheckmarkOutline size={16} />}
                  </S.Checkbox> Normal
                </S.PriorityButtonsContainer>
                <S.PriorityButtonsContainer onClick={(e) => e.stopPropagation()}>
                  <S.Checkbox
                    checked={selectedStatus === 'Low'}
                    onClick={() => handleStatusChange('Low')}
                  >
                    {selectedStatus === 'Low' && <IoCheckmarkOutline size={16} />}
                  </S.Checkbox> Low
                </S.PriorityButtonsContainer>
              </S.StatusOptions>
            )}
          </S.Option>

          <S.Option onClick={DeleteTask} className="trash">
            <IoTrashOutline size={16} />
            <span>Delete</span>
          </S.Option>
        </S.Dropdown>
      )}
    </S.Container>
  );
};