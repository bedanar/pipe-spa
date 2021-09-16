import React from 'react'
import {Switch, Route} from "react-router-dom"
import SignupPage from './components/SignupPage'
import EnterPage from './components/EnterPage'
import ResetPage from './components/ResetPassword'
import UserProfile from './components/UserProfile'

const useRoutes = () => {
    return(
        <Switch>
            {/* <Route exact path="/">
            </Route> */}
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
        </Switch>
    )
}

export default useRoutes