import { useState, useEffect } from "react";
import useSelect from "../hooks/useSelect";
import { coinsArray } from "../data/coins";
import styled from "@emotion/styled";
import { toast } from "react-toastify";

// Style components

const Form = styled.form`
  width: min(100%, 60rem);
  margin: 0 auto;
`;

const ContainerButton = styled.div`
  display: flex;
  justify-content: end;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.7rem;
  margin: 1rem 0;
  background-color: #158cba;
  color: white;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  font-weight: bold;

  :hover {
    background-color: #377a95;
  }

  @media (min-width: 768px) {
    width: auto;
    padding: 0.7rem 3rem;
  }
`;

function FormCrypto({ setCoinsObj }) {
  const [cryptosArray, setCryptosArray] = useState([]);

  // Hook propio
  const [coin, SelectCoins] = useSelect(
    "Seleccione un tipo de moneda:",
    coinsArray
  );
  const [crypto, Selectcriptos] = useSelect(
    "Seleccione un tipo de criptomoneda:",
    cryptosArray
  );

  // Consultar API de Criptomonedas
  useEffect(() => {
    const ConsultingApi = async () => {
      try {
        const url =
          "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

        const response = await fetch(url);
        const result = await response.json();

        const criptos = result.Data.map((cripto) => {
          const { Name, FullName } = cripto.CoinInfo;

          return { id: Name, name: FullName };
        });

        // Actualizar state
        setCryptosArray(criptos);
      } catch (error) {
        console.log(error);
      }
    };

    ConsultingApi();
  }, []);

  const handleSumbit = (e) => {
    e.preventDefault();

    // Validar formulario
    if ([coin, crypto].includes("")) {
      // Alerta
      toast.error("Todos los campos son obligatorios", {
        position: "top-right",
        autoClose: 2000,
        theme: "light",
      });
      return;
    }

    // Actualizar state
    setCoinsObj({ coin, crypto });
  };

  return (
    <>
      <Form action="" onSubmit={handleSumbit}>
        {/* Hooks propio */}
        <SelectCoins />
        <Selectcriptos />
        <ContainerButton>
          <Button type="submit">Consultar</Button>
        </ContainerButton>
      </Form>
    </>
  );
}

export default FormCrypto;
