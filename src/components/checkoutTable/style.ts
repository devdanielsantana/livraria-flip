import styled from 'styled-components';
import { theme } from '../../assets/themes/theme';

export const Container = styled.div`
  width: 960px;
  max-width: 100%;
`;

export const Table = styled.table`
  width: 960px;
  max-width: 100%;
  border-collapse: collapse;
`;

export const THeader = styled.thead`
  display: flex;
  justify-content: center;

  tr {
    display: flex;
    width: 100%;
    justify-content: center;
  }
  th {
    flex: 1;
    justify-content: space-between;
    align-items: center;

    border: 1px solid ${theme.colors.mediumContent};

    padding: 30px 30px;

    &:nth-child(odd),
    &:nth-child(odd) {
      flex: 2;
      padding: 30px 50px;
    }
  }
`;

export const TBody = styled.tbody`
  display: flex;
  justify-content: center;
  flex-direction: column;

  tr {
    display: flex;
    width: 100%;
    justify-content: center;
  }
  td {
    flex: 1;
    justify-content: center;
    align-items: center;

    text-align: center;

    padding: 25px 30px;

    border: 1px solid ${theme.colors.mediumContent};

    &:nth-child(odd),
    &:nth-child(odd) {
      flex: 2;
      padding: 25px 50px;
    }
  }
`;

export const TFooter = styled.tfoot`
  display: flex;
  justify-content: center;
  flex-direction: column;

  tr {
    display: flex;
    width: 100%;
    justify-content: center;
  }
  td,
  th {
    flex: 1;
    justify-content: center;
    align-items: center;

    text-align: center;

    padding: 30px 30px;

    border: 1px solid ${theme.colors.mediumContent};

    &:nth-child(odd),
    &:nth-child(odd) {
      flex: 2;
      padding: 30px 50px;
    }

    &:nth-child(1) {
      border-right: none;
    }
    &:nth-child(2) {
      border-left: none;
    }
  }
`;
