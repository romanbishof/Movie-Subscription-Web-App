
import './App.css';
import React from 'react'
import { Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// components
import LoginPage from './login/LoginPage'
import Main from './mainPage/Main';
import CreateUser from './login/CreateUser';

// context api
import UsersContext from './contexAPI/UsersContex';
import MoviesProvider from './contexAPI/MoviesContex';
import MembersProvider from './contexAPI/MembersContex';
import SubscriptionProvider from './contexAPI/SubscriptionContex';
import SubMembersProvider from './contexAPI/SubMembers';
function App() {
  return (
    <div>

      <UsersContext>
        <MoviesProvider>
          <MembersProvider>
            <SubscriptionProvider>
              <SubMembersProvider>

                <Switch>
                  <Route exact path="/" component={LoginPage}></Route>
                  <Route path="/createUser" component={CreateUser}></Route>
                    
                    <Route path="/main/:id" component={Main}></Route>

                </Switch>
                
              </SubMembersProvider>

            </SubscriptionProvider>

          </MembersProvider>

        </MoviesProvider>
      </UsersContext>
      
    </div>
  );
}

export default App;
