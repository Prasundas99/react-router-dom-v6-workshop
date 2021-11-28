import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate, // Similar to links or Redirect::: It is like stack it adds a stack on the top of the prev route
  Link,
  Outlet, // mount child component under parent component -- It defines preciesly where inside component it shoud appear
} from "react-router-dom";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/myapps" element={<Navigate replace to="/learn" />} /> {/*Add Replace to exit the behavior of stack holding its place*/}
      <Route path="/learn" element={<Learn />} >
        {/**New in React-router-dom v6  i.e nested routes */}
          <Route path="courses" element={<Courses/>}/> {/** /learn/course */}
          <Route path="bundle" element={<Bundles/>}/> {/**for demo outlet */}
      </Route>
      {/* "/" in the starting of route is optional now */}
      <Route path="app" element={<App />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);

function Home() {
  return <h1>Hello World</h1>;
}

function Learn() {
  return (
    <>
      <h1>Learn</h1>
      <h4>All Courses are listed here:</h4>
      {/*<a> tag reloads the page
        <Link> dosnt reload the page
      */}
      <Link className="btn btn-success" to="/learn/courses">Courses</Link>
      <Link className="btn btn-primary" to="/learn/bundle">Bundle</Link>
      <Outlet />
    </>
  );
}

function Courses() {
  return<> 
  <h1>Courses</h1>
  </>;

}
function Bundles() {
  return <h1>Courses</h1>;
}