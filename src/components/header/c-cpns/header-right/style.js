import styled from "styled-components";

export const HeaderRightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: ${props => props.theme.textColor.primaryColor};
  font-weight: 600;

  .btns {
    display: flex;
    align-items: center;
    box-sizing: content-box; 
    color: ${props => props.theme.isAlpha ? "#fff" : props.theme.textColor.primaryColor};

    .btn {
      height: 18px;
      line-height: 18px;
      padding: 12px 15px;
      cursor: pointer;
      border-radius: 22px;
      box-sizing: content-box; 

      &:hover {
        background-color: ${props => props.theme.isAlpha ? "rgba(255, 255, 255, .1)" : "#f5f5f5"};
      }
    }
  }

  .profile {
    position: relative;
    display: flex;
    width: 77px;
    height: 42px;
    margin-right: 24px;
    justify-content: space-evenly;
    align-items: center;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 25px;
    background-color: #fff;
    cursor: pointer;
    ${props => props.theme.mixin.boxShadow};

    .panel {
      position: absolute;
      top: 54px;
      right: 0;
      width: 240px;
      background-color: #fff;
      box-shadow: 0 0 6px rgba(0, 0, 0, .2);
      border-radius: 10px;

      .top, .bottom {
        padding: 10px 0;

        .item {
          height: 40px;
          line-height: 40px;
          padding: 0 16px;

          &:hover {
            background-color: #f5f5f5;
          }
        }
      }

      .top {
        border-bottom: 1px solid #ddd;
      }
    }
  }
`