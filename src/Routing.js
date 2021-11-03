import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import App from './App';
import Disclaimer from './Disclaimer';

function Routing() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Disclaimer} />
        <Route exact path="/home" component={App} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routing;
