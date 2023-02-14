import styled from "styled-components";

export const ScrollViewWrapper = styled.div`
  position: relative;
  padding: 8px 0;

  .slot {
    overflow: hidden;

    .scroll {
      display: flex;
      white-space: nowrap;
      transition: transform 300ms ease;
    }
  }

  .control {
    position: absolute;
    z-index: 9;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    text-align: center;
    border: 2px solid #fff;
    background: #fff;
    box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, .14);
    cursor: pointer;

    &.left {
      left: 0;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    &.right {
      right: 0;
      top: 50%;
      transform: translate(50%, -50%);
    }
  }
`