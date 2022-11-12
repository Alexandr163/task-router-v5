import "./App.css";
import { Route, Switch, Link, useParams, Redirect } from "react-router-dom";

const users = [
  { name: "User 1", id: 1 },
  { name: "User 2", id: 2 },
  { name: "User 3", id: 3 },
];

const HomePage = () => {
  return (
    <>
      <h1>Home page</h1>
      <Link to="/users">Users list</Link>
    </>
  );
};
const UsersListPage = () => {
  return (
    <>
      <Link to="/">HOME</Link>
      <h1>Users list page</h1>
      <ul>
        <li>
          <Link to="/users/1">User 1</Link>
        </li>
        <li>
          <Link to="/users/2">User 2</Link>
        </li>
        <li>
          <Link to="/users/3">User 3</Link>
        </li>
      </ul>
    </>
  );
};
const UserPage = () => {
  const { userId } = useParams();

  return (
    <>
      <h1>UserPage</h1>
      <li>
        <Link to="/users">Users list</Link>
      </li>
      <li>
        <Link to={`/users/${userId}/profile`}>User edit page</Link>
      </li>
      <h3>User ID:{userId}</h3>
    </>
  );
};
const UserEditPage = () => {
  const { userId } = useParams();
  const { profile } = useParams();

  return profile === "profile" ? (
    <>
      <h1>User edit page</h1>
      <li>
        <Link to={`/users/${userId}`}>NavLink to user page</Link>
      </li>
      <li>
        <Link to={`/users/${+userId + 1}`}>NavLink to another user page</Link>
      </li>
      <li>
        <Link to="/users">NavLink to Users list page</Link>
      </li>
      <h3>User ID:{userId}</h3>
    </>
  ) : (
    <Redirect to={`/users/${userId}`} />
  );
};

function App() {
  return (
    <>
      <Switch>
        <Route path="/users" exact component={UsersListPage} />
        <Route path="/" exact component={HomePage} />
        <Route path="/users/:userId" exact component={UserPage} />

        <Route path="/users/:userId/:profile" exact component={UserEditPage} />
        <Redirect from="/*" to="/" />
      </Switch>
    </>
  );
}

export default App;
