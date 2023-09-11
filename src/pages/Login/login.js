import styled from "styled-components"
import Header from "../../components/header";
import Footer from "../../components/footer"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {

const navigate = useNavigate()

const toCadastro = () =>{
    navigate("/cadastro")
}


  return (
    <>
        <Header/>
        <DivPai>  
            
            
            
            <Ladologin>
                <TextoLadoLogin>Mas caso ja tenha uma conta</TextoLadoLogin>
                <Link to="/cadastro"><BotãoLogar onClick={toCadastro}>Logar</BotãoLogar></Link>
            </Ladologin>

            <LadoCadastro>
                <ContainerFaçaCadastro>
                    <TextoFaçaCadastro>Faça seu login</TextoFaçaCadastro>
                    <SubtextoCadastro>Entre na sua conta para continuar seu <br/>gerenciamento pessoal</SubtextoCadastro>
                
                
                    <TextoLabel>Digite seu melhor Email:
                        <br/>
                        <CaixaLabel/>
                    </TextoLabel>
                        
                        <br/>
                    <TextoLabel>Digite sua melhor senha:
                        <br/>
                        <CaixaLabel/>
                    </TextoLabel>

                    <br/>
                <BotãoFinalizar>Cadastrar</BotãoFinalizar>

                </ContainerFaçaCadastro>
            </LadoCadastro>
        </DivPai>

    </>
  );
}

export default Login;

const LadoCadastro = styled.section`
    /* background-color: red; */
    display: inline-block;
    height: 100%;
    width: 50%;
`

const ContainerFaçaCadastro = styled.div`
    margin-left: 70px;
    margin-top: 60px;
    `

const TextoFaçaCadastro = styled.h1`
    font-size: 60px;
    margin-bottom: 10px;

`
const SubtextoCadastro = styled.p`
    font-size:20px;
    font-weight: 20px;
    margin-left: 20px;
    margin-bottom: 50px;
    `

const TextoLabel = styled.label`
    font-size:19px;
    padding-top: 10px;
    `

const CaixaLabel = styled.input`
    background-color: #E4F4F4;
    width: 70%;
    min-width: 50%;
    height: 30px;
    margin-top: 10px;
    border-radius: 40px;
    border: 10px;
    border-width:1px;
    border-color:gray 50%;
    border-style:solid
    `
const BotãoFinalizar = styled.button`
    border-radius: 40px;
    background-color: #E4F4F4;
    width: 250px;
    height: 40px;
    margin-top:100px;
    margin-left: 40%;
    margin-bottom: 40px;
    font-size: 25px;
    border-width:0.5px;
    border-color: gray;
    box-shadow: none;
    border-style: solid
`

const DivPai = styled.div`
    display:flex;
    margin: 0;
    /* @media only screen and (max-width: 700px){
        display:block;
    } */
`


    
const Ladologin = styled.section`
    /* background-image: linear-gradient(to left, rgb(5,65,78,1) 90%, #E4F4F4 ); */
    background-color: rgb(5,65,78,1);
    border-color:black;
    border-width: 100px;
    display: flex;
    height: 100;
    width: 50%;

`

const TextoLadoLogin = styled.h3`
    font-size:25px;
    font-weight: 40px;
    max-width: 30%;
    text-align:center;
    color: white;
    position:absolute;
    margin-left: 13%;
    margin-top:300px;
`



const BotãoLogar = styled.button`
border-radius: 40px;
background-color: #E4F4F4;
width: 250px;
height: 40px;
margin-top: 350px;
margin-left: 80%;
border: 0px;
font-size: 25px;
border-width:2px;
border-color: gray;
box-shadow: none;
border-style: solid
`