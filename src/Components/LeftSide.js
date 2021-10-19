import styled from 'styled-components';



const leftside=(props)=> { return (

<Container>

{/* <link href='https://fonts.googleapis.com/css?family=Lato:300,400,700' rel='stylesheet' type='text/css'></link> */}
{/* <div id='stars'></div>
<div id='stars2'></div>
<div id='stars3'></div> */}
<p>Project</p>

</Container>

);
}


const Container = styled.div`

flex:0.2;
flex-direction:row;
height: 100vh;
/* grid-area: leftside; */
/* @media(max-width:768px){
  display:none;
} */
background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;
  
  @keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
p{
  padding-top: 40px;
  font-weight: 500;
  font-size: 30px;
  color: white;
  text-align: center;
}
`;
// const ArtCard = styled.div`
//   text-align: center;
//   overflow: hidden;
//   margin-bottom: 8px;
//   /* background-color: #fff; */
//   /* border-radius: 5px; */
//   transition: box-shadow 83ms;
//   position: relative;
//   /* border: none; */
//   box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
// `;

export default leftside;