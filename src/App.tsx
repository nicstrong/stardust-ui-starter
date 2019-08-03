import { Flex, Header, ProviderConsumer } from '@stardust-ui/react';
import React from 'react';
import { Redirect, Route, RouteComponentProps, Switch, withRouter } from 'react-router';
import './App.css';
import AppBar from './AppBar';
import AppHeader from './AppHeader';

const App: React.FC<RouteComponentProps> = (props) => {
  return (
    <ProviderConsumer render={(theme) => {
      return <Flex column>
        <AppHeader backgroundColor={theme.siteVariables.colorScheme.brand.background4} />
        <Flex fill styles={{ height: 'calc(100vh - 48px)' }}>
          <AppBar colorScheme={theme.siteVariables.colorScheme.brand} />
          <Switch>
            <Route path='/rooms' component={Rooms} />
            <Route path='/software' component={Software} />
            <Route path='/escalations' component={Escalations} />
            <Route path='/health' component={Health} />
            <Route path='/settings' component={Settings} />
            <Route children={(<Redirect to="/rooms" />)} />
          </Switch>
        </Flex>
      </Flex>
    }} />
  );
}


const Rooms: React.FC<{}> = (props) => {
  return <Header as='h3' color='brand' content='Room' description='A test page' />
}
const Software: React.FC<{}> = (props) => {
  return <Header as='h3' color='brand' content='Software' description='A test page' />
}
const Escalations: React.FC<{}> = (props) => {
  return <Header as='h3' color='brand' content='Escalations' description='A test page' />
}
const Health: React.FC<{}> = (props) => {
  return <Header as='h3' color='brand' content='Health' description='A test page' />
}
const Settings: React.FC<{}> = (props) => {
  return <Header as='h3' color='brand' content='Settings' description='A test page' />
}


export default withRouter(App)
