import styled from "styled-components";

export const ButtonBarRoot = styled.div`
  display: flex;
  align-items: center;
`;

export interface ButtonBarLeftProps {
  center?: boolean;
}

export const ButtonBarLeft = styled.div<ButtonBarLeftProps>`
  display: flex;
  flex: ${props => (props.center ? "1 0 0" : "")};
  justify-content: flex-start;
  align-items: center;
  margin-right: ${props => (props.center ? "" : "auto")};
`;

export const ButtonBarCenter = styled.div`
  display: flex;
  align-items: center;
`;

export interface ButtonBarRightProps {
  center?: boolean;
}

export const ButtonBarRight = styled.div<ButtonBarRightProps>`
  display: flex;
  flex: ${props => (props.center ? "1 0 0" : "")};
  justify-content: flex-end;
  align-items: center;
  margin-left: ${props => (props.center ? "" : "auto")};
`;