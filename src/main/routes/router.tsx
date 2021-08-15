import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Login } from '../../presentation/pages/Login';
import { Home } from '../../presentation/pages/Home';

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

