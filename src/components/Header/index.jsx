import { useState } from 'react'
import * as S from './styles'

export const Header = () => {
  const [isActive, setIsActive] = useState(false);
  console.log(isActive);

  return (
    <S.Container>
      <S.LogoContainer>
        <S.Title>Pomodoro</S.Title>
      </S.LogoContainer>


      <S.ToggleContainer>
        {isActive ? (
          <S.LightModeIcon />
        ) : (
          <S.DarkModeIcon />
        )}

        <S.ButtonsheaderContainer isActive={isActive}
          onClick={() => setIsActive(!isActive)}
        >
          <S.ButtonTheme
            isActive={isActive}
            //onClick={() => setIsActive(!isActive)}
          />
        </S.ButtonsheaderContainer>
      </S.ToggleContainer>
    </S.Container>
  )
}

