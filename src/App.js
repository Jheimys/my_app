import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import CustomersList from "./pages/Customers/List"
import TemplateDefault from "./templates/Default"
import TemplatePage from "./templates/Page"
import CustomersRegister from "./pages/Customers/Register"
import CustomersEdit from "./pages/Customers/Edit"

function App() {
  return (
    <Router>
      <TemplateDefault>
        <Switch>

           {/* Rota de editar clintes */}
           <Route  path="/customers/edit/:id">
            <TemplatePage title="Editar cliente" Component={CustomersEdit} />
          </Route>

          {/* Rota de adicionar clinetes */}
          <Route  path="/customers/add">
            <TemplatePage title="Cadastro de clientes" Component={CustomersRegister} />
          </Route>

          {/* Rota de Customers */}
          <Route  path="/customers">
            <TemplatePage title="Lista de clientes" Component={CustomersList} />
          </Route>


          {/* Rota da Home */}
          <Route  path="/">
          <TemplatePage title="Página inicial" Component={Home}/>
          </Route>

        </Switch>
      </TemplateDefault>
    </Router>
  );
}

export default App;
