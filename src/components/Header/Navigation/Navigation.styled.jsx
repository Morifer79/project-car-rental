import { theme } from "components/theme";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledLogo = styled(NavLink)`
  display: flex;
  align-items: center;
  color: ${theme.colors.blue};
  font-weight: 900;
  scale: 1;
  transition: scale ${theme.transition};
  &:hover{
    scale: 1.1;
  }
`;

export const StyledLink = styled(NavLink)`
  padding: 14px 44px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.42;
  background: transparent;
  color: ${theme.colors.blue};
  border: 1px solid ${theme.colors.blue};
  border-radius: 12px;
  transition: background-color ${theme.transition};

  &:is(:hover, :focus, .active) {
    color: ${theme.colors.white};
    background-color: ${theme.colors.darkblue};
  }
`;
