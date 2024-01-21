import { theme } from 'components/theme';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CatalogFrame = styled.div``;

export const CatalogWrapper = styled.div``;

export const CatalogList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 50px 28px;
  margin: 0 auto;
`;

export const CatalogItem = styled.li``;

export const LoadMoreBtn = styled(Link)`
margin: 100px 0;
display: block;
text-align:center;
  color: ${theme.colors.blue};
  font-size: 16px;
  font-weight: 500;
  text-decoration-line: underline;
  transition: color ${theme.transition};

  &:is(:hover, :focus) {
    color: ${theme.colors.darkblue};
  }
`;
