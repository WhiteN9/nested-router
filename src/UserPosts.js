import React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import UserPost from "./UserPost";

export const UserPosts = ({ posts = [] }) => {
  const { url, path } = useRouteMatch();
  console.log("UserPosts links", url, path);

  const postLinks = posts.map((post) => (
    <li key={post.id}>
      <Link to={`${url}/${post.id}`} data-testid={`user-post-${post.id}`}>
        {post.title}
      </Link>
    </li>
  ));

  return (
    <div>
      <ul>{postLinks}</ul>
      <div>
        <Switch>
          <Route exact path={`${path}/:postId`}>
            <UserPost posts={posts} />
          </Route>
          <Route>
            <h3>No post selected...</h3>
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default UserPosts;
