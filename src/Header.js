import React from 'react'

import styled from 'styled-components'


const HeaderDiv = styled.header`

border-bottom:1px solid white;


`

const HeaderH1 = styled.h1`

color:white;


`

function Header() {
  return (
    <HeaderDiv>

      <HeaderH1>Find Book</HeaderH1>



    </HeaderDiv>
  )
}

export default Header
