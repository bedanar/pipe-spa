import React from 'react'
import {Switch, Route} from "react-router-dom"
import SignupPage from './components/SignupPage'
import EnterPage from './components/EnterPage'
import ResetPage from './components/ResetPassword'
import UserProfile from './components/UserProfile'
import Settings from './components/Settings'
import ScrollPage from './components/ScrollPage'
import Users from './components/Users'
const useRoutes = () => {
    return(
        <Switch>
            <Route exact path="/">
                <ScrollPage />
            </Route>
            <Route path="/signup">
                <SignupPage />
            </Route>
            <Route path="/enter">
                <EnterPage />
            </Route>
            <Route path="/reset">
                <ResetPage />
            </Route>
            <Route path="/user">
                <UserProfile/>
            </Route>
            <Route path="/settings">
                <Settings/>
            </Route>
            <Route exact path="/users">
                <Users />
            </Route>
        </Switch>
    )
}

export default useRoutes