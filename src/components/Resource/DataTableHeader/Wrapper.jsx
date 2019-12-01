import styled from 'styled-components';

const Wrapper = styled.div`
  .data-table-header {
    display: flex;
    direction: row;
    justify-content: space-between;
    position: relative;
    align-items: center;
    align-content: stretch;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    margin-bottom: 16px;
    font-size: 1.4rem;
    .data-table-results {
      flex-grow: 2;
      p {
        margin-bottom: 0;
      }
    }
    .page-size-options {
      padding: 0 8px;
      label.ds-c-label {
        display: inline-block;
        margin: 0 5px 0 0;
        font-size: 1.4rem;
      }
      select.ds-c-field {
        display: inline-block;
        width: 150px;
      }
    }
    select.page-size-select {
      border: 1px solid ${props => props.theme.grayLight};
      height: 3.4rem;
      background-color: #ffffff;
    }
    .adv_options__modal  {
      z-index: 5000 !important;
    }
    .column-labels {
      background: #eeeeee;
      font-weight: 700;
      padding: 16px 24px;
    }
    .data-table-density {
      padding: 0 8px;
      display: flex;
      align-items: center;
      button {
        padding: 6px;
        border: 1px solid ${props => props.theme.grayLight};
        background: white;
        &:first-of-type {
          margin-left: 8px;
        }
      }
    }
    .density-buttons {
      button:first-of-type {
        border-radius: 6px 0 0 6px;
      }
      button:last-of-type {
        border-radius: 0 6px 6px 0;
      }
    }
    .data-table-adv-options {
      button {
        position: relative;
        background: #ffffff;
        border-radius: 6px;
        border: 1px solid ${props => props.theme.grayLight};
        padding: 8px 16px;
        display: inline-block;
      }
    }
    .data-table-fullscreen {
      padding: 0 8px;
      button {
        border: none;
        background: none;
      }
    }
  }
`;

export default Wrapper;
