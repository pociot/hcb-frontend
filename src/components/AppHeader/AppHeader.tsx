import React, { Component, ComponentType } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { compose } from 'redux';
import './AppHeader.css';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';

interface IOwnProps {

}

type TProps = IOwnProps & RouteComponentProps;

interface IState {

}

class AppHeader extends Component<TProps, IState> {
  public render() {
    return (
      <Layout.Header className="app-header">
        <div className="container">
          <div className="app-title" >
            <Link to="/">Home Construction Budgeting</Link>
          </div>
          <Menu
            className="app-menu"
            mode="horizontal"
            selectedKeys={[this.props.location.pathname]}
            style={{ lineHeight: '64px' }} >
            {this.getMenuItems(false)}
          </Menu>
        </div>
      </Layout.Header>
    )
  }

  private getMenuItems = (isAuthenticated: boolean) => {
    return isAuthenticated ? [
      <Menu.Item key="/">
        <Link to="/">
          <Icon type="home" className="nav-icon" />
        </Link>
      </Menu.Item>
    ] : [
      <Menu.Item key="/login">
        <Link to="/login">Login</Link>
      </Menu.Item>,
      <Menu.Item key="/signup">
        <Link to="/signup">Sign up</Link>
      </Menu.Item>
    ]
  }
}

export default compose(
  withRouter
)(AppHeader) as ComponentType<IOwnProps> ;