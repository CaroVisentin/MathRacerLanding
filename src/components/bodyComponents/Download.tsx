import styled, { css } from "styled-components";

const CTASection = styled.section`
  text-align: center;
  padding: 32px 20px;
  color: #e9f8ff;
`;

const Title = styled.h2`
  font-size: 2.2rem;
  color: #22e6ff;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 12px;
  text-shadow: 0 0 10px rgba(34, 230, 255, 0.5);
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: #b8f2ff;
  margin-bottom: 40px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

type ButtonVariant = "primary" | "secondary";
type ButtonProps = { $variant?: ButtonVariant };

export const Button = styled.a<ButtonProps>`
  display: inline-block;
  padding: 14px 28px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: 0.25s ease;

  ${({ $variant }) =>
    $variant === "secondary"
      ? css`
          /* Fucsia */
          background: linear-gradient(180deg, #ff57c3, #c4129a);
          color: #ffffff;
          border: 1px solid rgba(255, 87, 195, 0.55);
          box-shadow: 0 0 10px rgba(255, 87, 195, 0.6);
          &:hover {
            transform: scale(1.05);
            box-shadow: 0 0 20px rgba(255, 87, 195, 0.8);
          }
        `
      : css`
          /* Azul (por defecto) */
          background: linear-gradient(180deg, #22e6ff, #12b0c4);
          color: #071017;
          border: 1px solid rgba(34, 230, 255, 0.55);
          box-shadow: 0 0 10px rgba(34, 230, 255, 0.6);
          &:hover {
            transform: scale(1.05);
            box-shadow: 0 0 20px rgba(34, 230, 255, 0.8);
          }
        `}
`;

const Download = () => {
  return (
    <CTASection>
      <Title>¡Tu motor ya está encendido!</Title>
      <Subtitle>
        Elegí cómo querés jugar y poné tu mente a toda velocidad.
      </Subtitle>

      <ButtonGroup>
        <Button
          href="https://math-racer-web-git-dev-carovisentins-projects.vercel.app/"
          $variant="primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jugar Online
        </Button>

        <Button
          href="https://play.google.com/store/apps/details?id=com.mathracer"
          $variant="secondary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Descargar App
        </Button>
      </ButtonGroup>
    </CTASection>
  );
};

export default Download;
