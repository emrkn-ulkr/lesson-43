import { Switch, Link, Route } from 'react-router-dom';
import Page from './Page.jsx';
import Login from './Login.jsx';

export default function App() {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Login</Link>
          <Link to="/page">Page</Link>
        </nav>
      </header>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/page">
          <Page />
        </Route>
      </Switch>
    </>
  )
}
