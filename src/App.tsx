import { Flex, ProviderConsumer, Text } from '@stardust-ui/react';
import React from 'react';
import { Redirect, Route, RouteComponentProps, Switch, withRouter } from 'react-router';
import './App.css';
import AppBar from './AppBar';
import AppHeader from './AppHeader';
import ContentPage from './components/ContentPage';
import Metrics from './components/Metrics';
import Rooms from './components/Rooms';

const App: React.FC<RouteComponentProps> = (props) => {
  return (
    <ProviderConsumer render={(theme) => {
      return <Flex column>
        <AppHeader />
        <Flex fill styles={{ height: 'calc(100vh - 48px)' }}>
          <AppBar />
          <Switch>
            <Route path='/rooms' component={Rooms} />
            <Route path='/software' component={Software} />
            <Route path='/escalations' component={Escalations} />
            <Route path='/metrics' component={Metrics} />
            <Route path='/health' component={Health} />
            <Route path='/settings' component={Settings} />
            <Route children={(<Redirect to="/rooms" />)} />
          </Switch>
        </Flex>
      </Flex>
    }} />
  );
}



const Software: React.FC<{}> = (props) => {
  return <ContentPage
    title='Software Packages'>
    <Text content='Hello World!' />
  </ContentPage>
}
const Escalations: React.FC<{}> = (props) => {
  return <ContentPage
    title='Escalations'>
    <Text content='Hello World!' />
  </ContentPage>
}
const Health: React.FC<{}> = (props) => {
  return <ContentPage
    title='Health'>
    <Text content='Hello World!' />
  </ContentPage>
}
const Settings: React.FC<{}> = (props) => {
  return <ContentPage
    title='Settings'>
    <Text content='Hello World!' />
  </ContentPage>
}


export default withRouter(App)
