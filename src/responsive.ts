import { css } from "styled-components";

export const laptopDevice = (props: any) => {
  return css`
    @media only screen and (max-width: 1024px) {
      ${props}
    }
  `;
};

export const mobileDevice = (props: any) => {
  return css`
    @media only screen and (max-width: 426px) {
      ${props}
    }
  `;
};
