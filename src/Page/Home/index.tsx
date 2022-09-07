import { type } from "os";
import React, { FC } from "react";
import Columns from "../../components/Columns";

import {
  Container,
  Text,
  Line,
  ContainerBottom,
  ValueContainer,
  LastMonthInfoContainer,
} from "./styled";

type Option = {
  label: string;
  value: number;
};

type Props = {
  values?: Option[];
  monthValue?: string;
  heights?: number[];
};

const Home: FC<Props> = ({ values, monthValue, heights }) => {
  return (
    <Container>
      <Text main bold>
        Spending - Last {values?.length} days
      </Text>
      <Columns values={values} heights={heights} />
      <Line />
      <ContainerBottom>
        <ValueContainer>
          <Text>Total this month</Text>
          <Text value bold>
            ${monthValue}
          </Text>
        </ValueContainer>
        <LastMonthInfoContainer>
          <Text bold>+2.4%</Text>
          <Text>from last month</Text>
        </LastMonthInfoContainer>
      </ContainerBottom>
    </Container>
  );
};

export default Home;
