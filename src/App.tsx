import Header from "./components/Header";
import Home from "./Page/Home";

import { Container } from "./styled";

const WEEK_SPENDING = [
  { label: "mon", value: 15.32 },
  { label: "tue", value: 38.23 },
  { label: "wed", value: 52.36 },
  { label: "thu", value: 31.07 },
  { label: "fri", value: 20.01 },
  { label: "sat", value: 43.22 },
  { label: "sun", value: 30.04 },
];

function App() {
  const heights = [0];
  const monthValue = WEEK_SPENDING.reduce(
    (total, currentValue) => (total = total + currentValue.value),
    0
  );

  WEEK_SPENDING.forEach((item) => {
    const height = (item.value * 100) / (monthValue - monthValue / 1.5) + 10;
    heights.push(height);
  });

  return (
    <Container>
      <Header balance={921.48} />
      <Home
        values={WEEK_SPENDING}
        monthValue={monthValue.toFixed(2)}
        heights={heights}
      />
    </Container>
  );
}

export default App;
