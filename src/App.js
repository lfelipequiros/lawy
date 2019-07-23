import React from "react";
import Nav from './components/nav'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/crear-documento" component={CreatDoc} />
      </div>
    </Router>
  );
}

function Home({ match }) {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Document({ match }) {
  return <h3>Aquí vamos a crear tu: {match.params.id}</h3>;
}

function CreatDoc({ match }) {
  return (
    <div>
      <h2>Documentos disponibles</h2>

      <ul>
        <li>
          <Link to={`${match.url}/contrato`}>Contrato #1</Link>
        </li>
        <li>
          <Link to={`${match.url}/tutela`}>Tutela #2</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:id`} component={Document} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Por favor seleccione un documento.</h3>}
      />
    </div>
  );
}

export default App;