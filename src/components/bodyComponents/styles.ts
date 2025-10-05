import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
  @media (max-width: 1024px) {
    padding: 0 16px;
  }

  @media (max-width: 768px) {
    padding: 0 12px;
  }

  @media (min-width: 768px) {
    margin: 3% 5%;
    width: 90%;
    text-align: left;
    a {
      margin-bottom: 64px;
    }
    .bannerWeb{
      display: flex;
      justify-content: space-around;
      align-items: center;
      font-size: 40px;
      h2 {
        text-align: left!important;
      }
      img{
        width: 1000px!important;
        padding: 2%!important;
      }
      
    }
  }
`;

export const ButtonJugar = styled.a`
  display: inline-block;
  background-color: #ff36b9; /* Fucsia brillante */
  color: #ffffff;
  font-weight: 700;
  font-size: 15px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  text-decoration: none;

  padding: 12px 28px;
  border-radius: 8px;
  cursor: pointer;

  box-shadow: 0 0 10px rgba(225, 11, 162, 0.4);
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #ff36b9;
    box-shadow: 0 0 15px rgba(255, 54, 185, 0.6);
    transform: translateY(-2px);
  }

  &:active {
    background-color: #c0088a;
    transform: translateY(0);
    box-shadow: 0 0 6px rgba(192, 8, 138, 0.6);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 54, 185, 0.3);
  }
`;

export const NeonFrame = styled.div`
  background: rgba(10, 0, 25, 0.7); /* Fondo oscuro semitransparente */
  border: 2px solid #00fff2; /* Color neón cian */
  border-radius: 8px;
  padding: 16px;
  color: #c0088a;
  margin: 32px 0% 32px 0%;
  text-align: center;
  letter-spacing: 1px;
  position: relative;
  box-shadow:
    0 0 10px rgba(0, 255, 255, 0.7),
    0 0 30px rgba(255, 0, 255, 0.3);
  text-shadow: 0 0 8px #f95ec8;

  backdrop-filter: blur(6px); /* Difuminado */
  -webkit-backdrop-filter: blur(6px);

  /* Borde doble decorativo */
  &::before {
    content: "";
    position: absolute;
    inset: -4px;
    border: 2px solid rgba(255, 0, 255, 0.6);
    border-radius: 10px;
    filter: blur(4px);
    z-index: -1;
  }

  span {
    color: #00fff2;
    font-size: 16px;
    margin-bottom: 10px;
    text-shadow: 0 0 8px #00fff2;
  }

  @media (min-width: 768px) {
    span{
      font-size: 26px;
    }
  }
  
`;

