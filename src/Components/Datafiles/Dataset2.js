import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';


const Dataset2=(props)=> { return (
<div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body"> <Table responsive="sm">
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
    <tbody>
      <tr>
        <td>1</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
    </tbody>
  </Table>
  </div>
    </div>
  </div>
        );
        }
// function ContextAwareToggle({ children, eventKey, callback }) {
//   const { activeEventKey } = useContext(AccordionContext);

//   const decoratedOnClick = useAccordionButton(
//     eventKey,
//     () => callback && callback(eventKey),
//   );

//   const isCurrentEventKey = activeEventKey === eventKey;

//   return (
//     <button
//       type="button"
//       style={{ backgroundColor: isCurrentEventKey ? 'pink' : 'lavender' }}
//       onClick={decoratedOnClick}
//     >
//       {children}
//     </button>
//   );
// }

// function Example() {
//   return (
//     <Accordion defaultActiveKey="0">
//       <Card>
//        <Div>
//         <Card.Header>
//          <button><ContextAwareToggle eventKey="1">Click me!</ContextAwareToggle></button>
//          <ContextAwareToggle eventKey="1">Click me!</ContextAwareToggle>
//         </Card.Header>
//         </Div>
        
        
          
        
//         <Accordion.Collapse eventKey="1">
//           <Card.Body>Hello! I'm another body</Card.Body>
//         </Accordion.Collapse>
//       </Card>
     
//     </Accordion>
//   );
// }

// export default Dataset2;

// const Button =styled.div`
// padding: 5px;
// `;

// const Div =styled.div`
// padding: 5px;
// display: flex;
// flex-direction: column;
// align-items: flex-end;
// justify-content: space-around;
// button{
// padding: 10px;
// border: none;
// }
// `;



export default Dataset2;
    