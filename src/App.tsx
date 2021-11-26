import React, { Component, Suspense } from 'react'
import './App.css'
import HeaderContainer from './components/Header/HeaderContainer'
import Navbar from './components/Navbar/Navbar'
import News from './components/News/News'
import Music from './components/Music/Music'
import { UsersPage } from './components/Users/UsersPage'
import Settings from './components/Settings/Settings'
import { LoginPage } from './components/Login/Login'
import {
  Route,
  withRouter,
  BrowserRouter,
  Redirect,
  Switch
} from 'react-router-dom'
import { connect, Provider } from 'react-redux'
import { initializeApp } from './redux/app-reducer'
import { compose } from 'redux'
import Preloader from './components/common/Preloader/Preloader'
import store, { AppStateType } from './redux/redux-store'

const DialogsContainer = React.lazy(
  () => import('./components/Dialogs/DialogsContainer')
)
const ProfileContainer = React.lazy(
  () => import('./components/Profile/ProfileContainer')
)

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
  initializeApp: () => void
}

class App extends Component<MapPropsType & DispatchPropsType> {
  catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
    alert('Some error occured')
  }
  componentDidMount() {
    this.props.initializeApp()
    window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
  }
  componentWillUnmount() {
    window.removeEventListener(
      'unhandledrejection',
      this.catchAllUnhandledErrors
    )
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Suspense
            fallback={
              <div>
                <Preloader />
                Загружка.......
              </div>
            }
          >
            <Switch>
              <Route
                exact
                path="/"
                render={() => <Redirect to={'/profile'} />}
              />
              <Route
                path="/profile/:userId?"
                render={() => <ProfileContainer />}
              />
              <Route path="/dialogs" render={() => <DialogsContainer />} />
              <Route path="/news" render={() => <News />} />
              <Route path="/music" render={() => <Music />} />
              <Route
                path="/users"
                render={() => <UsersPage pageTitle={'Заголовок Страницы'} />}
              />
              <Route path="/settings" render={() => <Settings />} />
              <Route path="/login" render={() => <LoginPage />} />
              <Route path="*" render={() => <div>404 NOT FOUND _ERROR</div>} />
            </Switch>
          </Suspense>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: AppStateType) => ({
  initialized: state.app.initialized
})

const AppContainer = compose<React.ComponentType>(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App)

const SocialWebApp: React.FC = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  )
}

export default SocialWebApp
