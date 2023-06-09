import styled from 'styled-components'

export const ModalContainer = styled.div`
  .modal-pane {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.781);
    opacity: 0;
    visibility: hidden;
    transform: scale(1.1);
    z-index: 999;
  }
  .modal-pane .modal-content {
    position: relative;
    top: 50%;
    left: 50%;
    width: 600px;
    transform: translate(-50%, -50%);
    background: ${(props) => props.theme.palette.background.paper};
  }
  @media (max-width: 600px) {
    .modal-pane .modal-content {
      width: 100%;
    }
  }
  .modal-pane .modal-content .modal-header {
    padding: 10px 30px 0px 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .modal-pane .modal-content .modal-header h4 {
    color: #2c3f5e;
    font-size: 20px;
    letter-spacing: 0;
    line-height: 24px;
    margin: 0;
  }
  .modal-pane .modal-content img {
    width: 60px;
    background: #fff;
    position: absolute;
    padding: 5px;
    border-radius: 50%;
    top: -35px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    z-index: 1000;
  }
  .modal-pane .modal-content .modal-body {
    overflow: scroll;
    padding: 20px 30px;
    padding-top: 30px;
  }

  .modal-pane .modal-content .modal-body p {
    line-height: 25px;
    font-size: 15px;
    margin-bottom: 20px;
  }

  .bold {
    font-weight: bold;
  }

  .align-center {
    /* display: flex; */
    text-align: center;
    /* align-items: center; */
  }

  .modal-pane button {
    padding: 10px 20px;
    border: none;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    margin: 10px 5px;
  }

  button:focus {
    outline: none;
  }

  .button-primary {
    background: rgb(22, 158, 158);
    border: 1px solid rgb(22, 158, 158);
    color: #fff;
  }

  .button-secondary {
    border: 1px solid rgb(22, 158, 158);
    color: rgb(22, 158, 158);
    background: #fff;
  }

  body.show-modal {
    height: 100vh;
    overflow-y: hidden;
  }
  .show-modal {
    opacity: 1;
    visibility: visible;
    transform: scale(1);
    transition: all 0.3s;
  }
`
