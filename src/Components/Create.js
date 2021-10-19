import Modal from 'react-bootstrap/Modal'
import React from 'react';
import styled from 'styled-components';

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
           Creating Dataset
          </Modal.Title>
          <button  onClick={props.onHide} type="button" class="btn-close" aria-label="Close"></button>
        </Modal.Header>
        <Modal.Body>
          
          <p>
            <Name>
          <input class="form-control" type="text" placeholder="Dataset Name" aria-label="default input example"/>
          </Name>
          <div class="mb-3">
            
  <label for="formFileMultiple" class="form-label"><h4>Upload Dataset</h4></label>
  <input class="form-control" type="file" id="formFileMultiple" multiple/>
</div>

    
    
          </p>
        
          
    
        </Modal.Body>
    
    
        <Modal.Footer>
          <Button className="hi"onClick >Save</Button>
        </Modal.Footer>

      </Modal>
    );
  }
  

    function Create() {
    const [modalShow, setModalShow] = React.useState(false);
     return (
      <>
        <Button onClick={() => setModalShow(true)}>
          Create Dataset
        </Button>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }
  export default Create;

  
 const Name=styled.div`
 padding-bottom: 10px;
 `;

const Button=styled.button`
background-color: #0a2540 ;
border: 1px solid rgba(67,121,255,0);
color: white;
font-weight: 600;
opacity: 1;
height: 40px;
width: 140px;
padding-top: 6px;
padding-bottom: 7px;
margin-left:7px;
margin-right: 10px;
border-radius: 20px;
:hover{
  background-color: #5e636e;
  transition: .3s;
}
:active{
          transform: scale(0.95);
          box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
}
`;
