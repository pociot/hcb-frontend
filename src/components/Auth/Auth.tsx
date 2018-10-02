import React, { Component, ComponentType } from 'react'
import { compose } from 'redux';
import { Layout, notification } from 'antd';
import Login from '../Login/Login';
import { Connectable } from './Connectable.hoc';
import { TConnectableProps } from './Connectable.hoc';

interface IOwnProps {

}

type TProps = IOwnProps & TConnectableProps;

interface IState {

}

class Auth extends Component<TProps, IState> {

  public componentWillReceiveProps(nextProps: TProps) {
    console.log('inside willreceiveprops', nextProps);
    if(nextProps.user) {
      notification.success({
        message: 'HCB',
        description: `Successfully logged in with token: ${nextProps.user.authDetails.accessToken}`,
      });
    } else if (nextProps.error) {
      notification.error({
        message: 'HCB',
        description: nextProps.error
      })
    }
  }

  public render() {
    return (
      <Layout>
        {this.props.user ? this.props.children : <Login /> }
      </Layout>
    )
  }
}

export default compose(
  Connectable
)(Auth) as ComponentType<IOwnProps>;