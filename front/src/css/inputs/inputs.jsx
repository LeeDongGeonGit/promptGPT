import styled from "styled-components"

export const UnderscoreBox = styled.div`
border : none;
border-bottom : solid 1.5px #e0e0e0;
width : 100%;
font-weight: 500;
color: gray;
font-family: 'Noto Sans KR', sans-serif !important;
text-align : center;
 display: flex; 
`
export const UnderscoreInupt = styled.input`
text-align: center;
border: solid 0;
 flex: 1; 
width: 100%;
font-size: 16px;
margin-bottom: 5px;
background : white;
color : black;
 &:focus {
    outline: none; 
  }
`
