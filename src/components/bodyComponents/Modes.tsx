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
  text-align: left;
  span{
    color: #22e6ff;
    text-shadow: 0 0 12px rgba(34, 230, 255, 0.45);
    &.rosa{
      color: #ff57c3;
      text-shadow: 0 0 6px rgba(255, 87, 195, 0.5);
    }
  }
  @media (min-width: 768px) {
    font-size: 18px;
  }
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
              Enfrentá <span>desafíos matemáticos</span> en distintos <span>mundos</span> y <span>niveles</span>, cada uno con operaciones más complejas y menos tiempo para pensar.<br/><br/>
              Tenés tres <span>bidones de nafta</span>: si errás una ecuación o se te acaba el tiempo, perdés uno.<br/><br/>
              Ganá <span>monedas</span>, abrí cofres y desbloqueá <span>skins</span>, nitros y <span>mejoras</span> mientras dominás los números y <span className="rosa">dejás tu huella</span> en la pista.<br/>
            </P>
          </Card>

          <Card>
            <Head>
              <FaUserFriends />
              <H3>Multijugador</H3>
            </Head>
            <P>
              Competí <span>en tiempo real</span> contra otros jugadores y probá quién tiene la mente más rápida.<br/><br/>
              Respondé las <span>mismas ecuaciones</span> que tu rival y hacé que tu auto avance con cada acierto.<br/><br/>
              Si errás, tu auto se <span>avería</span> y te va a tocar esperar, pero podés usar <span>comodines</span> para recuperar terreno.<br/><br/>
              Subí en el <span>ranking</span>, ganá <span>recompensas únicas</span> y demostrá que  <span className="rosa">no hay ecuación ni piloto que te frene.</span>
            </P>
          </Card>

          <Card>
            <Head>
              <FaPuzzlePiece />
              <H3>Práctica Libre</H3>
            </Head>
            <P>
            Entrená a <span>tu ritmo</span> en el modo práctica libre y mejorá tu velocidad mental sin competir con nadie.<br/><br/>
            Elegí la <span>dificultad</span>, el tipo de <span>operaciones</span> y jugá tantas veces como quieras para <span>perfeccionar</span> tus tiempos.<br/><br/>
            Ideal para calentar motores antes de una carrera o probar nuevas <span className="rosa">estrategias</span> sin presión.
          </P>
          </Card>
        </Grid>
      </Container>
    </Section>
  );
};

export default Modes;
