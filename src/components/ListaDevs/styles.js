import styled from 'styled-components';

export const LeftBar = styled.div`
  width: 25%;
  background: rgba(255, 255, 255, 0.8);
  position: absolute;
  left: 2%;
  top: 3%;
  height: 94%;
  border-radius: 5px;
  z-index: 10;
  p {
    font-weight: bold;
    font-size: 14px;
    color: #000;
    text-align: center;
    padding: 15px 0;
  }
  ul {
    list-style: none;
    li {
      div {
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: center;
        padding: 15px;
        button {
          cursor: pointer;
          border: none;
        }
        img {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          margin-right: 15px;
        }
        .user-info {
          flex-direction: column;
          align-items: flex-start;
          padding: 0;
          h2 {
            padding: 0;
            margin: 0;
            font-size: 18px;
            font-weight: bold;
          }
          h3 {
            padding: 0;
            margin: 0;
            margin-top: 3px;
            font-size: 12px;
            color: #666;
          }
        }
        i {
          margin-left: 10px;
          font-size: 16px;
        }
        .remove {
          color: #f00;
        }
        .go-to-page {
          color: #333;
          font-weight: bold;
        }
      }
      button {
        background: transparent;
      }
    }
  }
`;
