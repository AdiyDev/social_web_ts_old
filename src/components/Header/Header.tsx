import React from 'react'
import s from './Header.module.css'
import { Link } from 'react-router-dom'
import { Layout, Row, Col, Avatar, Button } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { AppStateType } from '../../redux/redux-store'
import { logout } from '../../redux/auth-reducer'
import { UserOutlined } from '@ant-design/icons'

type OwnProps = {}

export const Header: React.FC<OwnProps> = () => {
  const { Header } = Layout
  const { isAuth, login } = useSelector((state: AppStateType) => state.auth)
  const dispatch = useDispatch()

  const logoutCallback = () => {
    dispatch(logout())
  }

  return (
    <Header className="header">
      <Row>
        <Col span={20}>
          <div className="logo" />
          <img
            style={{ width: 80, height: 60 }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjPcCvhIcUpVMqNdX31gJU90TGEO2YZBxWPuvuiSMIwJaJ8LyHJqwL7wW32hX_2_H9kCU&usqp=CAU"
            alt=""
          ></img>
        </Col>
        <Col span={4}>
          <div className={s.loginBlock}>
            {isAuth ? (
              <div>
                <Avatar
                  style={{ backgroundColor: '#87d068' }}
                  icon={<UserOutlined />}
                />
                <span
                  style={{ color: 'white', marginRight: 10, marginLeft: 10 }}
                >
                  {login}
                </span>
                <Button onClick={logoutCallback}>Log out</Button>
              </div>
            ) : (
              <Link to={'/login'}>Login</Link>
            )}
          </div>
        </Col>
      </Row>
    </Header>
  )
}
