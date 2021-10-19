import styled from "styled-components";
import Header from "./Header";
import Main from "./Main";



const Home = (props) => {
    return (
     
      <Container>
          {/* <Leftside/> */}
        <logo>Betterdata</logo>
            <Header/>
       <hr/>
            <Main/>
     
      </Container>
       
    );
  };

  const Container = styled.div`
  flex:0.9;
  flex-direction:row;
  logo{
    top:10px;
    right:10px;
    margin-right: 48px;
    position:fixed;
    padding: 10px;
    font-size: 17px;
    font-weight: 700;
    background-image: linear-gradient(285deg,#00d4ff,#ff4092 50%,#635bff);
-webkit-background-clip: text;
background-clip: text;
-webkit-text-fill-color: transparent;
  }
  `;


export default Home;