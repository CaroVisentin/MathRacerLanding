import styled from "styled-components";
import { FaInstagram } from "react-icons/fa";

const Footer = styled.footer`
  background: radial-gradient(circle at top, #0b0f1a, #05060e);
  border-top: 1px solid rgba(34, 230, 255, 0.1);
  padding: 30px 0;
  text-align: center;
  color: #a7b7c7;
  font-size: 0.9rem;
  position: relative;
  overflow: hidden;
`;

const Glow = styled.div`
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  height: 250px;
  background: radial-gradient(circle, rgba(34, 230, 255, 0.12), transparent 70%);
  z-index: 0;
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Logo = styled.img`
  width: 80px;
  height: auto;
  filter: drop-shadow(0 0 10px rgba(34, 230, 255, 0.6));
`;

const Text = styled.p`
  margin: 0;
  color: #7e8b9a;
`;

const Socials = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 14px;

  a {
    color: #22e6ff;
    font-size: 1.5rem;
    transition: 0.2s ease;
    filter: drop-shadow(0 0 4px rgba(34, 230, 255, 0.5));

    &:hover {
      color: #ff57c3;
      transform: scale(1.1);
      filter: drop-shadow(0 0 8px rgba(255, 87, 195, 0.6));
    }
  }
`;

export default function AppFooter() {
  return (
    <Footer>
      <Glow />
      <Content>
        <Logo src="/images/Logotipo.png" alt="Math Racer logo" height={10}/>
        <Text>© 2025 Math Racer — Todos los derechos reservados</Text>
        <Socials>
          <a
            href="https://www.instagram.com/mathracer/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </Socials>
      </Content>
    </Footer>
  );
}
