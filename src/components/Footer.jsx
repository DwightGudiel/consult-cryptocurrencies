import styled from "@emotion/styled";


// Style components
const ContainerFooter = styled.footer`
  position: absolute;
  padding: 1rem 0;
  bottom: 0;
  width: 100%;

  p {
    text-align: center;
    font-size: 2.2rem;
    text-transform: uppercase;
    font-weight: bold;

    color: white;

    a {
      color: white;
      text-decoration: none;
    }
  }
`;

function Footer() {

  return (
    <ContainerFooter>
      <p>
        Creado por{" "}
        <a href="https://github.com/DwightGudiel">
          <span>Dwight Gudiel {new Date().getFullYear()} &#10084;</span>
        </a>
      </p>
    </ContainerFooter>
  );
}

export default Footer;
