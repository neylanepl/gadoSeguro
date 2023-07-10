import styled, { css } from 'styled-components';

export const Input = styled.input`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: ${props => props.isWithIcon ? "11px 37px" : "6px 12px"};
    color: ${theme.colors.black};
    background: ${theme.colors.white};
    border: 1px solid #000000;
    border-radius: 5px;
    font-family: ${theme.fonts.family.default};
    font-size: 1rem;
  `}
`;

export const InputForm = styled.input`
  padding: 11px 37px;
  width: 382.71px;
  height: 44px;
  left: 529px;
  top: 293px;
  background: #FFFFFF;
  border: 1px solid #000000;
  border-radius: 5px;
`;