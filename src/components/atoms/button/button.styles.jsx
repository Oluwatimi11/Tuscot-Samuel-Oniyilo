import styled from "styled-components";
export const BaseButton = styled.button`
  min-width: 30px;
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "3rem"};
  color: #fff;
  background-color: ${({ backgroundColor }) => backgroundColor || "green"};
  border: 1px solid #fff;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  gap: 16px;
  &:hover {
    border: ${({ border }) => border || "none"};
    background-color: ${({ backgroundColor }) => backgroundColor || "blue"};
  }
`;
export const CurvedButton = styled(BaseButton)`
  border-radius: 6px;
`;
