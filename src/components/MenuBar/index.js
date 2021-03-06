import React, { useState } from 'react';

import { HomeAlt as Home } from "@styled-icons/boxicons-regular";
import { SearchAlt2 as Search } from "@styled-icons/boxicons-regular";
import { UpArrowAlt as Arrow } from "styled-icons/boxicons-regular";
import { LightBulb as Light } from "@styled-icons/entypo/LightBulb";
import { Grid } from 'styled-icons/boxicons-solid'  
import { ThList as List } from 'styled-icons/typicons'
import getThemeColor from '../../utils/getThemeColor'

import * as S from './styles'
import { useEffect } from 'react';

const MenuBar = () => {
  const [theme, setTheme] = useState(null)
  const [display, setDisplay] = useState(null)

  const isDarkMode  = theme === 'dark'
  const isListMode = display === 'list'

  useEffect(() => {
    setTheme(window.__theme)
    setDisplay(window.__display)


    window.__onThemeChange = () => setTheme(window.__theme)
    window.__onDisplayChange = () => setDisplay(window.__display)
  },[])

  return(
    <S.MenuBarWrapper>
      <S.MenuBarGroup>
        <S.MenuBarLink cover direction="right" bg={getThemeColor()} duration={0.6} to="/" title="Voltar para Home">
          <S.MenuBarItem><Home /></S.MenuBarItem>
        </S.MenuBarLink>

        <S.MenuBarLink cover direction="right" bg={getThemeColor()} duration={0.6} to="/search/" title="Pesquisar">
          <S.MenuBarItem><Search /></S.MenuBarItem>
        </S.MenuBarLink>
      </S.MenuBarGroup>
      <S.MenuBarGroup>
        <S.MenuBarItem title="Mudar o tema" onClick={() => {
          window.__setPreferredTheme(isDarkMode ? 'light' : 'dark')
        }}
          className={theme}
        >
          <Light />
        </S.MenuBarItem>
        <S.MenuBarItem title="Mudar visualização" onClick={() => {
          window.__setPreferredDisplay(isListMode ? 'grid' : 'list')
        }}
        className="display"
        >
          {isListMode ? <Grid /> : <List />}
        </S.MenuBarItem>
        <S.MenuBarItem title="Ir para o Topo"><Arrow /></S.MenuBarItem>
      </S.MenuBarGroup>
    </S.MenuBarWrapper>
  )
}

export default MenuBar;