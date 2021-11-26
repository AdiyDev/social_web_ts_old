import React, { Component, Suspense } from 'react'

import './App.css'
import 'antd/dist/antd.css'
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
  Switch,
  Link
} from 'react-router-dom'
import { connect, Provider } from 'react-redux'
import { initializeApp } from './redux/app-reducer'
import { compose } from 'redux'
import Preloader from './components/common/Preloader/Preloader'
import store, { AppStateType } from './redux/redux-store'
import { Layout, Menu, Breadcrumb } from 'antd'
import {
  UserOutlined,
  LaptopOutlined,
  SettingOutlined
} from '@ant-design/icons'
import FriendsContainer from './components/Navbar/Friends/FriendsContainer'
import { Header } from './components/Header/Header'

const { SubMenu } = Menu
const { Content, Footer, Sider } = Layout

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
      <Layout>
        <Header />
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Layout
            className="site-layout-background"
            style={{ padding: '24px 0' }}
          >
            <Sider className="site-layout-background" width={200}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['2']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%' }}
              >
                <SubMenu key="sub1" icon={<UserOutlined />} title="My profile">
                  <Menu.Item key="1">
                    <Link to="/profile">Profile</Link>
                  </Menu.Item>
                  <Menu.Item key="2">
                    <Link to="/dialogs">Dialogs</Link>
                  </Menu.Item>
                  <Menu.Item key="3">option3</Menu.Item>
                  <Menu.Item key="4">option4</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub2"
                  icon={<LaptopOutlined />}
                  title="Developers"
                >
                  <Menu.Item key="5">
                    <Link to="/users">Users</Link>
                  </Menu.Item>
                  <Menu.Item key="6">option6</Menu.Item>
                  <Menu.Item key="7">option7</Menu.Item>
                  <Menu.Item key="8">option8</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" icon={<SettingOutlined />} title="subnav 3">
                  <Menu.Item key="9">
                    <Link to="/music">Music</Link>
                  </Menu.Item>
                  <Menu.Item key="10">
                    <Link to="/news">News</Link>
                  </Menu.Item>
                  <Menu.Item key="11">
                    <Link to="/settings">Settings</Link>
                  </Menu.Item>
                  <Menu.Item key="12">option12</Menu.Item>
                </SubMenu>
                <Route path="" render={() => <FriendsContainer />} />
              </Menu>
            </Sider>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
              <Suspense
                fallback={
                  <div>
                    <Preloader />
                    Загружаюсь.......
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
                    render={() => (
                      <UsersPage pageTitle={'Заголовок Страницы'} />
                    )}
                  />
                  <Route path="/settings" render={() => <Settings />} />
                  <Route path="/login" render={() => <LoginPage />} />
                  <Route
                    path="*"
                    render={() => <div>404 NOT FOUND _ERROR</div>}
                  />
                </Switch>
              </Suspense>
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>See on top</Footer>
      </Layout>
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
