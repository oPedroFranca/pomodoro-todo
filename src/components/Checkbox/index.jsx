import * as S from './styles'
import { useState } from 'react'
import { IoCheckmarkSharp } from 'react-icons/io5'
export const Checkbox = ({ onChange }) => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
    if (onChange) {
      onChange();
    }
  };

  return (
    <S.Checkbox checked={checked} onClick={handleCheckboxChange}>
      {checked && <IoCheckmarkSharp size={18} color="#FFF" />}
    </S.Checkbox>
  );
};