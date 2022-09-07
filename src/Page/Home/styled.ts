import styled from "styled-components";

type HomeStyleProps = {
  bold?: boolean;
  main?: boolean;
  value?: boolean;
};

export const Container = styled.div`
  background-color: #ffffff;
  margin: 15px auto 0;
  border-radius: 10px;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  box-sizing: border-box;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: hsl(25, 47%, 15%);
  opacity: 0.3;
  margin: 15px 0;
`;

export const ContainerBottom = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 15px;
`;

export const ValueContainer = styled.div``;

export const Text = styled.p<HomeStyleProps>`
  margin: 0;
  font-size: ${({ main, value }) => (main ? "18px" : value ? "20px" : "10px")};
  font-family: "DM Sans";
  font-weight: ${({ bold }) => (bold ? "700" : "400")};
  color: hsl(25, 47%, 15%);
`;

export const LastMonthInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 4px;
`;
