import styled from "styled-components"
import Logo from "../img/logo.png"



function Header() {
  return (

        <ContainerHeader>
            <TituloHeader>TaskTime</TituloHeader>
            <ImagemLogo src={Logo}/>
        </ContainerHeader>
  );
}

export default Header;




const ContainerHeader = styled.header`
    background-color: rgb(5,65,78,1);
    height: 80px;
    border-bottom: 1.5px solid black;
    width: 100%

` 

const TituloHeader = styled.h2`
    font-size: 50px;
    color: white;
    margin-left: 25px;
    display: inline-block;
    margin-top: 10px;
    margin-bottom: -20px;
`

const ImagemLogo = styled.img`
    /* display: flex; */
    margin-left: 90%;
    margin-top: -100px;
    margin-bottom: 10px;
    width: 120px;
`


