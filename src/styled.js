import styled from "styled-components";

export const Div = styled.div`

    width: 100%;
    height: 100vh;
    display: flex;
    
    justify-content: center;
    align-items: center;
    align-content: center;
    justify-items: center;

`

export const Button = styled.div`
    width: 150vh;
    display: flex;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 30px;
    opacity: 1;

`

export const MyButtons = styled.button`
    border: none;
    color: #fff;
    width: 30vh;
    height: 10vh;
    border-radius: 30px;

${({ ativo }) =>
  ativo
    ? `
        color: #ffffff;
        background: #ab64ff;
      `
    : `
        color: #000;
        background: #ffffff;
      `}

&:focus {
  outline: none;
}
`;