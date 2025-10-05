import styled from "styled-components";
import { FaMapMarkedAlt, FaUserFriends, FaPuzzlePiece } from "react-icons/fa";

const Section = styled.section`
  padding: 32px 0;
  text-align: center;
`;
const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
  @media (min-width: 768px) {
    max-width: 90vw;
  }
`;
const Title = styled.h2`
  font-size: 24px;
  color: #22e6ff;
  margin: 0 0 22px;
  text-shadow: 0 0 12px rgba(34, 230, 255, 0.45);
  @media (min-width: 768px) {
    font-size: 28px;
  }
`;
const Grid = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;
const Card = styled.article`
  background: linear-gradient(180deg, #0c1320, #0b101a);
  border: 1px solid rgba(124, 246, 255, 0.18);
  border-radius: 12px;
  padding: 18px;
  box-shadow: 0 0 18px rgba(34, 230, 255, 0.08), 0 10px 24px rgba(0, 0, 0, 0.35);
  @media (min-width: 768px) {
    width: 100%;
  }
`;
const Head = styled.header`
  display: flex;
  text-align: center;
  justify-content: center;
  gap: 12px;
  argin-bottom: 10px;
  svg {
    width: 26px;
    height: 26px;
    color: #ff57c3;
    filter: drop-shadow(0 0 6px rgba(255, 87, 195, 0.5));
  }
`;
const H3 = styled.h3`
  margin: 0;
  color: #eaf8ff;
  font-weight: 800;
`;
const P = styled.p`
  margin: 6px 0 10px;
  color: #a7b7c7;
  line-height: 1.45;
  @media (min-width: 768px) {
    font-size: 18px;
  }
`;
const List = styled.ul`
  margin: 0 0 14px;
  padding-left: 18px;
  color: #c7d6e5;
  line-height: 1.4;
  @media (min-width: 768px) {
    font-size: 18px;
  }
  li {
    margin: 4px 0;
  }
  text-align: left;
`;

const Modes = () => {
  return (
    <Section id="modos">
      <Container>
        <Title>Modos de juego</Title>
        <Grid>
          <Card>
            <Head>
              <FaMapMarkedAlt />
              <H3>Modo Historia</H3>
            </Head>
            <P>
              Mapa por mundos (15 niveles c/u). 10 aciertos para pasar; 3
              bidones (vidas).
            </P>
            <List>
              <li>Energía por intento (se regenera/monedas/anuncio)</li>
              <li>Recompensas: moneda x nivel, cofre con skins x mundo</li>
              <li>
                Comodines: 🧯 eliminar opción · 🔄 cambiar ecuación · 🚀 doble
              </li>
            </List>
          </Card>

          <Card>
            <Head>
              <FaUserFriends />
              <H3>Multijugador</H3>
            </Head>
            <P>
              Crear/Unirse/Invitar. Dificultad, privacidad y partidas
              personalizadas.
            </P>
            <List>
              <li>Gana quien acierta 10 primero; error = 1–2s + solución</li>
              <li>
                {
                  "Parámetros: operaciones, opciones (2–4), términos (2–4), X (1–2), objetivo (>, <, =)"
                }
              </li>
              <li>Ranking y competitivo</li>
            </List>
          </Card>

          <Card>
            <Head>
              <FaPuzzlePiece />
              <H3>Práctica Libre</H3>
            </Head>
            <P>
              Minijuegos: Libre multijugador y Modo infinito con escalado de
              dificultad.
            </P>
            <List>
              <li>Sumas/Restas, Básicas (+−×÷), Mayor/Menor</li>
              <li>Combinados, Fracciones, Por tiempo</li>
            </List>
          </Card>
        </Grid>
      </Container>
    </Section>
  );
};

export default Modes;
