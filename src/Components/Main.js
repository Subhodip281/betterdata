import styled from 'styled-components';
import Data from './Data';
import Create from './Create';


const Main=(props)=> { return (

<Container>

  <Title>
    <Heading><u>Real-datasets</u></Heading>
    {/* <span><button><text>Create datasets</text></button></span> */}
    <span><Create/></span>
   
  </Title>


 <Data/>
</Container>

);
}


const Container = styled.div`
flex:0.2;

padding: 30px;
margin-top: 30 px;
/* grid-area: leftside; */
/* @media(max-width:768px){
  display:none;
} */
`;
const Title=styled.div`
display: flex;
flex-direction:row;
justify-content: space-around;
align-items: center;
button{
  
  cursor: pointer;
    top:170px;
    right:50px;
    position:absolute;
  
    background-size: 200%;
    transition: .2s ease-out;

:hover {
    background-position: left;
   
    
}      
  text{
    font-size: 20px;
    font-weight: 600;
    padding: 11px;
  }
  
}

`;
const Heading =styled.div`
/* margin-left: 40px; */
font-size: 35px;
font-weight: 700;
    top:150px;
    left:270px;
    position:absolute;
    padding: 20px;
    color:#666d77;

`;



export default Main;