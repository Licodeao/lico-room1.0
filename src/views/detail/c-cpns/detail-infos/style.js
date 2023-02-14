import styled from "styled-components";

export const DetailInfoWrapper = styled.div`
  padding: 40px 60px;

  .title {
    font-size: 24px;
    font-weight: 800;
    color: rgb(72, 72, 72);
    margin-bottom: 40px;
  }

  .review {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid rgba(235, 235, 235);

    .top {
      display: flex;
      align-items: center;
      flex-direction: row;

      img {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        margin-right: 20px;
      }

      .info {
        display: flex;
        flex-direction: column;
        color: rgb(72, 72, 72);

        .name {
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 5px;
        }

        .date {
          font-size: 14px;
          font-weight: 400;
        }
      }
    }

    .bottom {
      font-size: 16px;
      font-weight: 400;
      padding: 25px 0;
      color: rgb(72, 72, 72);
    }
  }

  .tip {
    text-align: center;
    padding-top: 20px;
  }
`