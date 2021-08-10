import React, { useContext, useState } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth";
import { useHistory } from "react-router-dom";

function MenuBar(props) {
  const pathname = window.location.pathname;
  const { user, logout } = useContext(AuthContext);
  let history = useHistory();

  const path = pathname === "/" ? "home" : pathname.substr(1);
  const [activeItem, setActiveItem] = useState(path);
  const handleItemClick = (e, { name }) => setActiveItem(name);

  const menuBar = user ? (
    <Menu pointing secondary size="massive" color="teal">
      <Menu.Item name={user.username} active as={Link} to="/" />
      <Menu.Menu position="right">
        <Menu.Item
          name="post"
          active={activeItem === "post"}
          onClick={handleItemClick}
          as={Link}
          to="/createpost"
        ></Menu.Item>
        <Menu.Item
          name="posts"
          active={activeItem === "posts"}
          onClick={handleItemClick}
          as={Link}
          to="/posts"
        ></Menu.Item>
        <Menu.Item
          name="useredit"
          active={activeItem === "useredit"}
          onClick={handleItemClick}
          as={Link}
          to="/useredit"
        />
        <Menu.Item
          name="logout"
          onClick={() => {
            history.push("/login");
            logout();
          }}
        />
      </Menu.Menu>
    </Menu>
  ) : (
    <Menu pointing secondary size="massive" color="teal">
      <Menu.Item
        name="home"
        active={activeItem === "home"}
        onClick={handleItemClick}
        as={Link}
        to="/"
      ></Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item
          name="login"
          active={activeItem === "login"}
          onClick={handleItemClick}
          as={Link}
          to="/login"
        ></Menu.Item>
        <Menu.Item
          name="register"
          active={activeItem === "register"}
          onClick={handleItemClick}
          as={Link}
          to="/register"
        ></Menu.Item>
      </Menu.Menu>
    </Menu>
  );
  return menuBar;
}

export default MenuBar;
