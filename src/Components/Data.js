import styled from "styled-components";
import Dataset1 from './Datafiles/Dataset1'
import Dataset2 from './Datafiles/Dataset2'
import Dataset3 from './Datafiles/Dataset3'


const Data=(props)=> { return (
<Container>

    <Dataset1/>
    <Dataset1/>
    <Dataset1/>
    <Dataset1/>  
    <Dataset1/> 
    
</Container>




);
}

const Container=styled.div`
padding: 5 px;
margin-top: 60px;
display: flex;
flex-direction: column;
`;





export default Data;