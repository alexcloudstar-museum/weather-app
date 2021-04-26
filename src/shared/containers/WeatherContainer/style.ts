import styled from 'styled-components';

export const WeatherContainerWrapper = styled.div<{ city: string }>`
  width: 100%;
  display: ${({ city }) => (city ? undefined : 'none')};
  background: rgb(249, 157, 149);
  background: -moz-linear-gradient(
    90deg,
    rgba(249, 157, 149, 1) 20%,
    rgba(218, 107, 115, 1) 50%,
    rgba(207, 99, 103, 1) 100%
  );
  background: -webkit-linear-gradient(
    90deg,
    rgba(249, 157, 149, 1) 20%,
    rgba(218, 107, 115, 1) 50%,
    rgba(207, 99, 103, 1) 100%
  );
  background: linear-gradient(
    90deg,
    rgba(249, 157, 149, 1) 20%,
    rgba(218, 107, 115, 1) 50%,
    rgba(207, 99, 103, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#f99d95",endColorstr="#cf6367",GradientType=1);
  .cityName {
    display: none;
  }
  @media (min-width: 1399px) {
    width: ${({ city }) => (city ? '70%' : undefined)};
    height: 100vh;
    display: ${({ city }) => (city ? 'flex' : 'none')};
    text-align: center;
    align-items: center;
    justify-content: center;
    .cityName {
      display: block;
      position: absolute;
      top: 100px;
      text-transform: uppercase;
      letter-spacing: 5px;
      color: #fff;
      font-size: 30px;
    }
  }
`;
