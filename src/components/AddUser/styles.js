import styled from 'styled-components';
import Modal from 'react-modal';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  input {
    font-size: 14px;
    padding: 10px;
    border-radius: 4px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
  }
  .buttons-container {
    display: flex;
    button {
      display: flex;
      flex: 1;
      justify-content: center;
      border-radius: 5px;
      padding: 10px;
      font-weight: bold;
      color: #fff;
      font-size: 12px;
      &:nth-child(2n) {
        border: 1px solid #ccc;
        color: #fff;
        background: #ccc;
        &:hover {
          background: #b2b2b2;
          color: #fff;
        }
      }
      &:nth-child(2n - 1) {
        margin-right: 15px;
        border: 1px solid #85c47c;
        color: #fff;
        background: #85c47c;
        &:hover {
          background: #5ea354;
          color: #fff;
        }
      }
    }
  }
`;
