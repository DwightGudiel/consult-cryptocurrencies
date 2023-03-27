import { useState } from "react";
import styled from "@emotion/styled";

// Style components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0rem;

  @media (min-width: 768px) {
    flex-direction: row;
    column-gap: 2rem;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.5rem 2rem;
  border-radius: 10px;
  background-color: #3b3b3b;
  color: white;
`;

const Label = styled.label`
  width: 100%;
  font-weight: bold;
  font-size: 2rem;
  color: rgb(100 205 255);

  margin-bottom: 2rem;
  @media (min-width: 768px) {
    margin-bottom: 0;
  }

  &::after {
    content: "";
    width: 10rem;
    height: 0.1rem;
    background-color: #fff;
    display: block;
  }
`;

function useSelect(label, options) {
  const [state, setState] = useState("");

  const SelectCoins = () => (
    <Container>
      <Label>{label}</Label>
      {/* Captura la opción seleccionada y actualiza el state */}
      <Select value={state} onChange={(e) => setState(e.target.value)}>
        <option value="">-- Seleccione --</option>
        {/*Itera sobre el array recibido y devuelve un <option></option> por cada elemento del array. */}
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </Select>
    </Container>
  );

  /* Devuelve la opción seleccionada por el usuario y el componente SelectCoins. */
  return [state, SelectCoins];
}

export default useSelect;
