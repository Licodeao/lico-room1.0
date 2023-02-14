import styled from "styled-components";

export const IndicatorWrapper = styled.div`
  overflow: hidden;

  .content {
    position: relative;
    display: flex;
    transition: transform 250ms ease;

    > * {
      flex-shrink: 0;
    }
  }
`