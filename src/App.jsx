import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import FormCrypto from "./components/FormCrypto";
import ListCrypto from "./components/ListCrypto";
import Spinner from "./components/Spinner";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Style components
const Container = styled.div`
  width: min(90%, 120rem);
  margin: 0 auto;

  h2 {
    text-align: center;
    color: rgb(100 205 255);
    font-size: 3rem;
    margin-top: 5rem;
  }
`;

const Header = styled.h1`
  text-align: center;
  margin: 0 0 5rem 0;
  padding: 1rem;
  color: rgb(100 205 255);
  border-bottom: solid 2px rgba(231, 233, 235, 0.2);
`;

function App() {
  const [coinsObj, setCoinsObj] = useState({});
  const [dataCryptoObj, setDataCryptoObj] = useState({});
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    try {
      // Validar si el objeto coins no está vacío
      if (Object.keys(coinsObj).length > 0) {
        // Consultar API de criptomonedas
        const consultApiCrypto = async () => {
          
          // Mostrar spinner
          setSpinner(true);

          const { coin, crypto } = coinsObj;

          const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${coin}`;

          const response = await fetch(url);
          const result = await response.json();

          // Actualizar el state
          setDataCryptoObj(result.DISPLAY[crypto][coin]);

          // Ocultar spinner
          setSpinner(false);
        };

        consultApiCrypto();
      }
    } catch (error) {
      console.log(error);
    }
  }, [coinsObj]);

  return (
    <>
      <ToastContainer />
      <Header>Consulta el precio de tus criptomonedas favoritas</Header>
      <Container>
        <FormCrypto setCoinsObj={setCoinsObj} />
        {dataCryptoObj.PRICE ? (
          <h2>Resultado de la consulta</h2>
        ) : (
          <h2>El resultado se mostrará aquí</h2>
        )}
        {spinner ? (
          <Spinner />
        ) : (
          dataCryptoObj.PRICE && <ListCrypto dataCryptoObj={dataCryptoObj} />
        )}
      </Container>
      <Footer />
    </>
  );
}

export default App;
