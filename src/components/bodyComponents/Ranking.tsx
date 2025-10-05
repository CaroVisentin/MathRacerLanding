// Ranking.jsx
import styled, { keyframes, css } from "styled-components";
import { useMemo } from "react";

const Section = styled.section`
  padding: 32px 0;
  color: #eaf8ff;
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  gap: 24px;
  grid-template-columns: 1fr 1.2fr;
  align-items: start;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

const Title = styled.h2`
  font-size: 26px;
  margin: 0 0 8px;
  color: #22e6ff;
  text-shadow: 0 0 12px rgba(34, 230, 255, 0.45);
  text-align: center;
  @media (min-width: 768px) {
    text-align: left;
    font-size: 30px;
  }
`;

const Subtitle = styled.p`
  margin: 0;
  color: #b5c6d6;
  text-align: center;
  @media (min-width: 768px) {
    text-align: left;
    font-size: 22px;
  }
`;

/* Marco neón con difuminado */
const glow = keyframes`
  0% { box-shadow: 0 0 10px rgba(34,230,255,.6), 0 0 24px rgba(255,87,195,.25); }
  100% { box-shadow: 0 0 14px rgba(34,230,255,.75), 0 0 34px rgba(255,87,195,.35); }
`;

const Board = styled.div`
  position: relative;
  background: rgba(12, 16, 28, 0.7);
  border: 2px solid #21e4ff;
  border-radius: 12px;
  padding: 14px;
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  animation: ${glow} 2.6s ease-in-out infinite alternate;

  &::before {
    content: "";
    position: absolute;
    inset: -6px;
    border-radius: 14px;
    border: 2px solid rgba(255, 87, 195, 0.65);
    filter: blur(6px);
    pointer-events: none;
  }
`;

const BoardHeader = styled.div`
  color: #21e4ff;
  font-size: 18px;
  letter-spacing: 0.06em;
  text-align: center;
  margin-bottom: 10px;
  text-shadow: 0 0 8px rgba(33, 228, 255, 0.8);
`;

const TableWrap = styled.div`
  max-height: 300px;
  overflow: auto;
  scrollbar-width: thin;
  scrollbar-color: #21e4ff transparent;
  &::-webkit-scrollbar {
    height: 6px;
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #21e4ff;
    border-radius: 10px;
  }
`;

type RowProps = { $top?: boolean };

const Row = styled.div<RowProps>`
  display: grid;
  grid-template-columns: 42px 1fr 90px;
  align-items: center;
  padding: 10px 12px;
  margin-bottom: 8px;
  border: 1px solid rgba(124, 246, 255, 0.18);
  border-radius: 10px;
  background: linear-gradient(180deg, #0d1220, #0b101a);

  ${({ $top }) =>
    $top &&
    css`
      border-color: #ff57c3;
      background: linear-gradient(
        180deg,
        rgba(255, 87, 195, 0.15),
        rgba(34, 230, 255, 0.08)
      );
      box-shadow: 0 0 10px rgba(255, 87, 195, 0.25);
    `}
`;

const Pos = styled.span`
  font-size: 12px;
  color: #ff57c3;
  text-align: center;
`;

const Name = styled.span`
  font-weight: 800;
  letter-spacing: 0.02em;
  color: #eaf8ff;
`;

const Time = styled.span`
  font-variant-numeric: tabular-nums;
  text-align: right;
  color: #8feaff;
`;

/* CTA opcional */
const CTA = styled.a`
  display: block;
  margin: 16px auto 0;
  padding: 10px 14px;
  border-radius: 8px;
  text-decoration: none;
  color: #071017;
  font-weight: 800;
  background: linear-gradient(180deg, #22e6ff, #12b0c4);
  border: 1px solid rgba(34, 230, 255, 0.55);
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
  text-align: center;
  width: fit-content;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(34, 230, 255, 0.8);
  }
`;

const dataEjemplo = [
  { name: "NICO", time: "1435" },
  { name: "CANI", time: "1254" },
  { name: "FRANCA", time: "987" },
  { name: "RONNY", time: "956" },
  { name: "CALHDD", time: "789" },
];

const Ranking = ({
  entries = dataEjemplo,
  title = "TOP Multijugador",
}) => {
  const rows = useMemo(() => entries.slice(0, 10), [entries]); // top 10

  return (
    <Section id="ranking">
      <Container>
        <div>
          <Title>Conocé a los más rápidos</Title>
          <Subtitle>¿Vas a quedarte mirando o vas a correr?</Subtitle>
        </div>

        <Board aria-label="Tabla de ranking">
          <BoardHeader>{title}</BoardHeader>
          <TableWrap role="list">
            {rows.map((r, i) => (
              <Row key={r.name + i} role="listitem" $top={i === 0}>
                <Pos>{i + 1}</Pos>
                <Name>{r.name}</Name>
                <Time>{r.time}</Time>
              </Row>
            ))}
          </TableWrap>
          <CTA href="#ranking-completo">Ver ranking completo</CTA>
        </Board>
      </Container>
    </Section>
  );
};

export default Ranking;
