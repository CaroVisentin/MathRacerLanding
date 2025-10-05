import { Button } from "./Download";
import { Container } from "./styles";

const Banner = () => {
  return (
    <Container>
      <div className="bannerWeb">
        <h2 style={{ maxWidth: "100%", textAlign: "center", marginBottom: 0 }}>
          El único juego donde ganar es cuestión de números.
        </h2>
        <img
          src="images/autoBanner.png"
          alt="Math Racer"
          style={{ width: "100%", padding: "15% 5%" }}
        />
      </div>
      <Button
        href="https://math-racer-web-git-dev-carovisentins-projects.vercel.app/"
        $variant="secondary"
        target="_blank"
        rel="noopener noreferrer"
      >
        Jugar Ahora
      </Button>
    </Container>
  );
};

export default Banner;
