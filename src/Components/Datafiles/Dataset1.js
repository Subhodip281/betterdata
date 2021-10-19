import Table from 'react-bootstrap/Table'
import styled from 'styled-components';
import Modal from 'react-bootstrap/Modal'
import React from 'react';
import Table1 from './Table1';
import { useState } from 'react';




const Dataset1=(props)=> { return (
    <Container >
    <Card class="solid">
  
    <Title>Dataset.csv</Title>
    <Buttan>
    <Button href="#"data-bs-toggle="modal" data-bs-target="#staticBackdrop" ><Text>View</Text></Button> 
    <Button href="#" ><Text>Edit</Text></Button> 
    <Button href="#"><Text>Delete</Text></Button> 
    </Buttan>
</Card>
<>
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-fullscreen modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <Table responsive="sm">
    <thead>
      <tr>
        <th>#</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
      </tr>
    </thead>
   <Table1/>
  </Table>
      </div>
      <div class="modal-footer">
       
        <Button >
          Details</Button>
      </div>
    </div>
  </div>
</div>
</>
    
  </Container>

);
    }
const Container=styled.div`
padding-bottom: 10px;

`;


const Card=styled.div`
display: flex;
justify-content: space-between;
align-items: center;
border-bottom: 1px solid #666d77;
border-left: 6px solid #635bff;
margin-bottom:px;
padding-bottom: 4px;
border-radius: 7px;
background-color: #d8e0f0;


`;

const Title=styled.div`
padding:12px;
padding-left: 16px;
font-size: 16px;
font-weight: 600;

`;
const Button=styled.button`
background-color: #635bff ;
border: none;
color: white;
height: 35px;
width: 70px;
padding-top: 6px;
padding-bottom: 7px;
margin-left:7px;
margin-right: 10px;
border-radius: 20px;
:hover{
  background-color: #0a2540;
  transition: .3s;
}
:active{
          transform: scale(0.95);
          box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
}
`;

const Text=styled.span`
padding: 5px;
padding-top: 4px;
padding-bottom: 4px;
font-size: 17px;
/* background-color: blue; */
/* color: white; */


`;
const Buttan=styled.div`
margin-right: 10px;
`;

    export default Dataset1;
    
   