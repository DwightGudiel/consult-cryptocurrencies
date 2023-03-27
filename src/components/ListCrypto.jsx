import styled from "@emotion/styled";

// style components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 769px) {
    flex-direction: row;
    column-gap: 2rem;
  }

  p {
    padding: 1rem;
    border-bottom: dashed 1px gray;
    font-weight: bold;
    font-size: 2rem;
    text-align: center;
    color: white;

    @media (min-width: 768px) {
      text-align: start;
    }

    span {
      font-weight: normal;
    }
  }
`;

const Image = styled.img`
  width: 15rem;
  height: 15rem;
`;

function ListCrypto({ dataCryptoObj }) {
  // Object destructuring
  const { PRICE, CHANGEPCT24HOUR, HIGHDAY, IMAGEURL, LASTUPDATE, LOWDAY } =
    dataCryptoObj;

  return (
    <Container>
      <div>
        <Image
          loading="lazy"
          width={10}
          height={10}
          src={`https://cryptocompare.com/${IMAGEURL}`}
          alt="imagen de criptomoneda"
        />
      </div>
      <div>
        <p>
          Precio: <span>{PRICE}</span>
        </p>
        <p>
          Precio más alto del día: <span>{HIGHDAY}</span>
        </p>
        <p>
          Precio más bajo del día: <span>{LOWDAY}</span>
        </p>
        <p>
          Variación últimas 24 horas: <span>{CHANGEPCT24HOUR}%</span>
        </p>
        <p>
          Última actualización: <span>{LASTUPDATE}</span>
        </p>
      </div>
    </Container>
  );
}

export default ListCrypto;
