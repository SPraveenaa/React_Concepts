import React from 'react'
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

function Navbar() {
  return (
    <Header>
        <Menu
          theme="dark"
          mode="horizontal"
        >
            <Menu.Item key="/home">
            <Link to="/home">Home</Link>
            </Menu.Item>

            <Menu.Item key="/about">
            <Link to="/about">About</Link>
            </Menu.Item>

        </Menu>
    </Header>
  )
}

export default Navbar;