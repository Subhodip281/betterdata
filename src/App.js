import './App.css';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch ,Route } from 'react-router-dom';
import Leftside from './Components/LeftSide';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
    <Router>
        <Switch>
          <Route path="/">
          <Layout>
          <Leftside/>
           <Home/>
           </Layout>
           </Route>
        </Switch>
        {/* <Footer /> */}
    </Router>
    </div>
  );
};

const Layout = styled.div`
  display: flex;
  /* grid-template-areas: "leftside main rightside";
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr); */
  column-gap: 10px;
  /* row-gap: 25px;  */
  /* padding-left: 20px ; */
  padding-right: 20px;
  /* grid-template-row: auto; */
  margin: 1px 0;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`;

export default App;
