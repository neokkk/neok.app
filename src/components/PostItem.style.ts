import styled from 'styled-components';

const Container = styled.article`
  font-family: ${({ theme }) => theme.font.spoqaHan};
  margin: 1rem 0;

  a {
    color: inherit;
    text-decoration: none;
    position: relative;
    z-index: 1;

    &:visited {
      color: inherit;
    }
  }
`;

const Date = styled.p`
  font-size: 0.8rem;
  opacity: 0.7;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  display: inline-block;
  position: relative;

  &::after {
    content: '';
    background-color: ${({ theme }) => theme.color.yellow};
    position: absolute;
    left: 0;
    bottom: 2px;
    width: 0;
    height: 10px;
    transition: all 0.4s ease-in-out;
    opacity: 0;
    z-index: -1;
  }

  &:hover {
    &::after {
      width: 100%;
      opacity: 1;
    }
  }
`;

const Tags = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 0 4px;

  li {
    list-style: none;
    text-decoration: none;
    display: inline;
    opacity: 0.8;
  }
`;

export default {
  Container,
  Date,
  Tags,
  Title,
};
