import { useState, useEffect } from "react";
import styled from "@emotion/styled";


// Style components
const ContainerFooter = styled.footer`
  position: absolute;
  padding: 1rem 0;
  bottom: 0;
  width: 100%;
  border-top: solid 2px rgba(231, 233, 235, 0.2);

  p {
    text-align: center;
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: bold;

    color: rgb(100 205 255);

    a {
      color: rgb(100 205 255);
      text-decoration: none;
    }
  }
`;

function Footer() {
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <ContainerFooter>
      <p>
        Creado por{" "}
        <a href="https://github.com/DwightGudiel">
          <span>Dwight Gudiel {year} &#10084;</span>
        </a>
      </p>
    </ContainerFooter>
  );
}

export default Footer;
