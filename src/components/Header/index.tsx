import React, { FC } from "react";

import { Container, BalanceContainer, Text, Logo } from "./styled";
import LogoIcon from "../../images/logo.svg";

type Props = {
  balance?: number;
};

const Header: FC<Props> = ({ balance }) => {
  return (
    <Container>
      <BalanceContainer>
        <Text>My balance</Text>
        <Text balance>${balance}</Text>
      </BalanceContainer>
      <Logo src={LogoIcon} />
    </Container>
  );
};

export default Header;
