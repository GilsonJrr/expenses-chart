import styled from "styled-components";

type HeaderProps = {
  height?: number[] | any;
  index?: number | any;
};

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 135px;
`;

export const Tag = styled.div`
  background-color: hsl(25, 47%, 15%);
  position: absolute;
  bottom: 100%;
  align-self: center;
  margin: 5px auto;
  border-radius: 5px;
  padding: 4px 5px;
  font-size: 10px;
  color: #ffffff;
  display: none;
  z-index: 2;
  font-family: "DM Sans";
`;

export const BarWrapper = styled.div`
  height: 100px;
  display: flex;
  align-items: flex-end;
`;

export const Bar = styled.div<HeaderProps>`
  position: relative;
  background-color: hsl(10, 79%, 65%);
  height: ${({ height, index }) => height[index]}%;
  max-height: 90%;
  width: 30px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  position: relative;
  margin-top: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  :hover {
    ${Tag} {
      display: block;
    }
    ${Bar} {
      background-color: hsl(186, 34%, 60%);
    }
  }
`;

export const Label = styled.p`
  margin: 5px 0 0 0;
  font-size: 10px;
  font-family: "DM Sans";
  color: hsl(28, 10%, 53%);
`;
