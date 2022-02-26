import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Profile from "./Pages/Profile";
import SignIn from "./Pages/SignIn";
import Courses from "./Pages/Courses";
import { isAuthenticated } from "./Services/authService";
import Course from "./Pages/Courses/Course";
import Materials from "./Pages/Materials";
import HomeNoAuth from "./Pages/HomeNoAuth";
import HeaderNoAuth from "./Components/HeaderNoAuth";
import AddNewMaterial from "./Pages/Materials/AddNewMaterial";
import CompleteInfoMaterial from "./Pages/Materials/CompleteInfo";

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/signin", state: { from: props.location } }}
          />
        )
      }
    />
  );
}

function HomeRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? (
          <Redirect
            to={{ pathname: "/Home", state: { from: props.location } }}
          />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <HomeRoute exact path="/" component={HomeNoAuth} />
        <Route exact path="/Materials">
          {isAuthenticated() ? <Header /> : <HeaderNoAuth />}
          <Materials />
        </Route>
        <Route exact path="/Courses">
          {isAuthenticated() ? <Header /> : <HeaderNoAuth />}
          <Courses />
        </Route>
        <Route exact path={`/Courses/${localStorage.getItem("course")}`}>
          {isAuthenticated() ? <Header /> : <HeaderNoAuth />}
          <Course />
        </Route>
        <Route exact path={`/Materiais/${localStorage.getItem("material")}`}>
          {isAuthenticated() ? <Header /> : <HeaderNoAuth />}
          <CompleteInfoMaterial />
        </Route>
        <PrivateRoute
          exact
          path="/Materials/AddNewMaterial"
          component={() => (
            <>
              <Header />
              <AddNewMaterial />
            </>
          )}
        ></PrivateRoute>
        <PrivateRoute
          path="/Home"
          component={() => (
            <>
              <Header /> <Home />
            </>
          )}
        />
        <PrivateRoute
          path="/Profile"
          component={() => (
            <>
              <Header /> <Profile />
            </>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
