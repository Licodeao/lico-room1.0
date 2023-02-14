import styled from "styled-components";

export const HeaderLeftWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  color: ${props => props.theme.isAlpha ? "#fff" : props.theme.color.primaryColor};

  .logo {
    margin-left: 24px;
    cursor: pointer;
  }
`