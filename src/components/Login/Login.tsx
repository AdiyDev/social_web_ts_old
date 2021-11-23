import React from 'react'
import { InjectedFormProps, reduxForm } from 'redux-form'
import { Input, createField } from '../common/FormsControls/FormsControls'
import { required, maxLengthCreator } from '../../utils/validators/validators'
import { connect } from 'react-redux'
import { login } from '../../redux/auth-reducer'
import { Redirect } from 'react-router-dom'
import style from './../common/FormsControls/FormsControls.module.css'
import { AppStateType } from '../../redux/redux-store'

const maxLength30 = maxLengthCreator(30)

type loginFormOwnProps = {
  captchaUrl: string | null
}

const LoginForm: React.FC<
  InjectedFormProps<loginFormValuesType & loginFormOwnProps>
  //  @ts-ignore
> = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField<LoginFormValuesTypeKeys>(
        'Email',
        'email',
        [required, maxLength30],
        Input
      )}
      {createField<LoginFormValuesTypeKeys>(
        'Password',
        'password',
        [required, maxLength30],
        Input,
        {
          type: 'password'
        }
      )}
      {createField<LoginFormValuesTypeKeys>(
        undefined,
        'rememberMe',
        [],
        Input,
        { type: 'checkbox' },
        'remember me'
      )}

      {captchaUrl && <img src={captchaUrl} alt="" />}
      {captchaUrl &&
        createField<LoginFormValuesTypeKeys>(
          'Symbols from image',
          'captcha',
          [required],
          Input,
          {}
        )}

      {error && <div className={style.formSummaryError}>{error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm<loginFormValuesType & loginFormOwnProps>({
  form: 'login'
})(LoginForm)

type mapStatePropsType = {
  captchaUrl: string | null
  isAuth: boolean
}

type mapDispatchPropsType = {
  login: (
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string
  ) => void
}

type loginFormValuesType = {
  email: string
  password: string
  rememberMe: boolean
  captcha: string
}

type LoginFormValuesTypeKeys = Extract<keyof loginFormValuesType, string>

const Login: React.FC<mapStatePropsType & mapDispatchPropsType> = props => {
  const onSubmit = (formData: loginFormValuesType) => {
    props.login(
      formData.email,
      formData.password,
      formData.rememberMe,
      formData.captcha
    )
  }
  if (props.isAuth) {
    return <Redirect to={'/profile'} />
  }
  return (
    <div>
      <h1>login</h1>
      {/* @ts-ignore */}
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
  )
}
const mapStateToProps = (state: AppStateType): mapStatePropsType => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login)
