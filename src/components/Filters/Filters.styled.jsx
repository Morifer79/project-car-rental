import styled from 'styled-components';
import { Field, Form } from 'formik';
import { theme } from 'components/theme';
import arrow from 'images/chevron-down.svg';

export const StyledForm = styled(Form)`
  margin-top: ${theme.spacing(25)};
  margin-bottom: ${theme.spacing(25)};
  display: flex;
  justify-content: center;
  align-items: end;
  &:first-child {
    /* width: 220px; */
  }
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  color: ${theme.colors.labeltext};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;
`;

export const StyledInput = styled(Field)`
  margin-top: ${theme.spacing(4)};
  margin-right: ${theme.spacing(9)};
  padding: 14px 18px;
  border-radius: 14px;
  border: ${theme.colors.bginput};
  background: ${theme.colors.bginput};
  color: ${theme.colors.black};
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
  outline: none;
  width: 160px;

  & option {
    font-size: 16px;
    line-height: 1.25;
    color: ${theme.colors.droptext};
    background: ${theme.colors.white};
  }

  &.make {
    width: 224px;
  }
  &.rentalPrice {
    width: 125px;
  }

  &.make,
  &.price {
    cursor: pointer;
    appearance: none;
    overflow: hidden;
    background: right 14px center no-repeat url(${arrow}),
      ${theme.colors.bginput};
  }

  &.left {
    border-radius: 14px 0px 0px 14px;
    border-right: 1px solid rgba(138, 138, 137, 0.2);
    margin-right: 0;
  }
  &.right {
    border-radius: 0px 14px 14px 0px;
  }

  &:focus {
    caret-color: ${theme.colors.dark};
  }
`;

export const ButtonSearch = styled.button`
  padding: 14px 44px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.42;
  /* color: ${theme.colors.white}; */
  /* background: ${theme.colors.blue}; */
  border-radius: 12px;
  border: transparent;
  transition: background-color ${theme.transition};

  &:is(:hover, :focus) {
    background-color: ${theme.colors.darkblue};
    /* style={{ backgroundColor: isReset ? 'red' : 'blue', color: 'white' }} */
  }
`;

// export const ButtonReset = styled.button`
//   margin-left: ${theme.spacing(9)};
//   padding: 14px 44px;
//   font-size: 14px;
//   font-weight: 600;
//   line-height: 1.42;
//   color: ${theme.colors.blue};
//   background: transparent;
//   border-radius: 12px;
//   border: 1px solid ${theme.colors.blue};
//   transition: color ${theme.transition}, border-color ${theme.transition};

//   &:is(:hover, :focus) {
//     color: #fa8072;
//     border-color: #fa8072;
//   }
// `;