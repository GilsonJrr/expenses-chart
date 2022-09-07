import styled from "styled-components";

type HeaderProps = {
  balance?: boolean;
};

export const Container = styled.div`
  background-color: hsl(10, 79%, 65%);
  margin: 0 auto;
  border-radius: 10px;
  min-width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  box-sizing: border-box;
`;

export const BalanceContainer = styled.div``;

export const Text = styled.p<HeaderProps>`
  margin: 0;
  font-size: ${({ balance }) => (balance ? "18px" : "10px")};
  color: #ffffff;
  font-family: "DM Sans";
  font-weight: ${({ balance }) => (balance ? "700" : "400")};
  margin: 2px 0;
`;

export const Logo = styled.img`
  width: 12%;
`;
