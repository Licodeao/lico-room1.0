import styled from "styled-components";

export const EntirePaginationWrapper = styled.div`
  display: flex;
  justify-content: center;

  .info {
    display: flex;
    flex-direction: column;
    align-items: center;

    .MuiPaginationItem-page {
      margin: 0 10px;

      &:hover {
        text-decoration: underline;
      }
    }

    .MuiPaginationItem-icon {
      font-size: 24px;
    }

    .MuiPaginationItem-page.Mui-selected {
      background-color: #222;
      color: #fff;
    }

    .desc {
      color: #222;
      margin-top: 16px;
    }
  }
`