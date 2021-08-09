import logo from "./logo.svg";
import "./App.css";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import MenuBar from "./components/MenuBar";
import { AuthProvider } from "./context/auth";
import UserEdit from "./pages/UserEdit";
import CreatePost from "./pages/CreatePost";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
function App() {
  return (
    <AuthProvider>
      <Router>
        <Container>
          <MenuBar />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/useredit" component={UserEdit}/>
          <Route exact path="/createpost" component={CreatePost}/>
        </Container>
      </Router>
    </AuthProvider>
  );
}

export default App;
