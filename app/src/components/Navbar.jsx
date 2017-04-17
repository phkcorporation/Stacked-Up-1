import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/FlatButton';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';


const Navbar = (props) => {
  const searchSubmit = (event) => {
    props.history.push('/search');
    event.preventDefault();
    document.getElementById('search').value = '';
    props.searchAll();
  };

  return (
    <Toolbar>
      <ToolbarGroup>
        <Link to="/main">
          <RaisedButton>StackedUp</RaisedButton>
        </Link>
      </ToolbarGroup>
      <ToolbarGroup>
        <form
          onSubmit={(event) => {
            searchSubmit(event);
          }}
        >
          <TextField
            id="search"
            name="searchUsername"
            onChange={(event) => {
              props.onInputChange(event);
            }}
          />
          <Link
            to="/search"
            onClick={(event) => {
              searchSubmit(event);
            }}
          >Search
          </Link>
        </form>
      </ToolbarGroup>
      <ToolbarGroup>
        {props.isLoggedIn ?
          <RaisedButton
            id="logout"
            onClick={props.handleLogOut}
          >Logout
          </RaisedButton> :
          <Link to="/login">
            <RaisedButton>Log In</RaisedButton>
          </Link>}
      </ToolbarGroup>
      <ToolbarGroup>
        <Link to="/myProfile">
          <RaisedButton>My Profile</RaisedButton>
        </Link>
      </ToolbarGroup>
      <ToolbarGroup>
        <Link to="/jobPost">
          <RaisedButton>Job Posts</RaisedButton>
        </Link>
      </ToolbarGroup>
    </Toolbar>
  );
};

export default Navbar;
