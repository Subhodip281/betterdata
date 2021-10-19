import styled from 'styled-components';


const Header=(props)=> { return (

<Container>

  <First>

<Text>Models</Text>
<Text>Real-datasets</Text>
</First>

<Second>

</Second>

</Container>

);
}


const Container = styled.div`
flex:0.8;
align-items: center;
margin-right: 300px;
margin-top: 20px;

/* background-color: #e3ebf8; */


  


/* grid-area: leftside; */
/* @media(max-width:768px){
  display:none;
} */
`;
const First=styled.div`

display:flex;
justify-content: space-around;
flex-direction: row;
background-color: transparent;
padding-bottom: 20px;
/* box-shadow: 0 0 11px rgba(33,33,33,.2);
&:hover {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
} */
`;
const Second=styled.div`

`;
const Text= styled.div`
font-size: 40px;
font-family:Verdana, Geneva, Tahoma, sans-serif ;
font-weight: 700;
color:#0a2540;
  padding-top:20px;
  /* padding-bottom: 10px;*/
  
   
`;


export default Header;