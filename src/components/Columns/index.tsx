import React, { FC } from "react";

import { Container, Tag, Bar, Label, Wrapper, BarWrapper } from "./style";

type Option = {
  label: string;
  value: number;
};

type Props = {
  values?: Option[];
  heights?: number[];
};

const Columns: FC<Props> = ({ values, heights }) => {
  return (
    <Wrapper>
      {values?.map((items, index: number) => {
        return (
          <Container>
            <BarWrapper>
              <Bar height={heights} index={index + 1}>
                <Tag>${items.value}</Tag>
              </Bar>
            </BarWrapper>
            <Label>{items.label}</Label>
          </Container>
        );
      })}
    </Wrapper>
  );
};

export default Columns;
