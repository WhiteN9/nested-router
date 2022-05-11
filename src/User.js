import React from "react";
import {
  Link,
  NavLink,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import UserPosts from "./UserPosts";
import UserProfile from "./UserProfile";

export const User = ({ users = [] }) => {
  const { userId } = useParams();

  const userouteMatch = useRouteMatch();
  const { path, url } = userouteMatch;
  // console.log(path, url);
  //>> path, /users/:userId
  //>> url, /users/1
  if (!userId) {
    throw new Error("No URL parameter for userId");
  }

  //find and return the user from the DB if there is a match
  const user = users.find((user) => `${user.id}` === userId);

  //If `user` exists:
  //render a Link to return home
  //render a NavLink/Link

  //The UserProfile Route will render `UserProfile` component to contain the info of user.
  //The UserPosts Route will render `UserPosts` component to contain the posts of user.
  if (user) {
    return (
      <section>
        <Link to="/"> &lt;- Users</Link>
        <div>
          <h2>{user.name}</h2>
          <ul>
            <li>
              <NavLink to={url} data-testid="user-profile">
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink to={`${url}/posts`} data-testid="user-posts">
                Posts
              </NavLink>
            </li>
          </ul>
          <Switch>
            <Route exact path={path}>
              <UserProfile user={user} />
            </Route>
            <Route path={`${path}/posts`}>
              <UserPosts posts={user.posts} />
            </Route>
          </Switch>
        </div>
      </section>
    );
  }
  return <p>User not found</p>;
};

export default User;
