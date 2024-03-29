import styled from 'styled-components';

const Container = styled.div`
  color: ${({ theme }) => theme.color.gray};
  font-family: ${({ theme }) => theme.font.montserrat};
  width: 80%;
  max-width: 1200px;
  min-height: 600px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  ${({ theme }) => theme.tablet`
    width: 100%;
  `}
`;

const Content = styled.main`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  overflow: -moz-scrollbars-none; // firefox
  -ms-overflow-style: none; // IE +10

  &::-webkit-scrollbar {
    // chrome, safari, opera
    width: 0;
  }
`;

export default {
  Container,
  Content,
};
