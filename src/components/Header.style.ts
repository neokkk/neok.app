import { Link } from 'gatsby';
import styled from 'styled-components';

const Container = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray}50;
  padding: 20px;
`;

const Logo = styled(Link)`
  color: ${({ theme }) => theme.color.gray};
  font-family: ${({ theme }) => theme.font.montserrat};
  font-size: 44px;
  font-weight: 800;
  letter-spacing: -1px;
  text-decoration: none;
  display: inline;

  &:hover {
    color: ${({ theme }) => theme.color.orange};
  }
`;

export default {
  Container,
  Logo,
};
