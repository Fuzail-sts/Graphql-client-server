import "./App.css";
import EmployeeList from "./components/EmployeeList";
import AddEmployee from "./components/AddEmployee";
import { Route, Switch } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

function App() {
  const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache(),
  });
  return (
    <div>
      <ApolloProvider client={client}>
        <Switch>
          <Route path="/" exact={true} component={AddEmployee} />
          <Route path="/home" component={AddEmployee} />
          <Route path="/employee-list" exact={true} component={EmployeeList} />
        </Switch>
      </ApolloProvider>
    </div>
  );
}

export default App;
