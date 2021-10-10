import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Input, createField } from './../common/FormsControls/FormsControls'
import { required, maxLengthCreator } from './../../utils/validators/validators';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';
import style from './../common/FormsControls/FormsControls.module.css'

const maxLength30 = maxLengthCreator(30)


const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField("Email", "email", [required, maxLength30], Input)}
      {createField("Password", "password", [required, maxLength30], Input, { type: "password" })}
      {createField(null, "rememberMe", [], Input, { type: "checkbox" }, "remember me")}

      {captchaUrl && <img src={captchaUrl} />}
      {captchaUrl && createField("Symbols from image", "captcha", [required], Input, {})}



      {error && <div className={style.formSummaryError}>
        {error}
      </div>
      }
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm) //прокидывает особый пропс handleSubmit:

const Login = (props) => {
  const onSubmit = (formData) => { //сюда придут все значения из форм
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
  }
  if (props.isAuth) {
    return <Redirect to={'/profile'} />
  }
  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
  )
}
const mapStateToProps = (state) => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth
})


export default connect(mapStateToProps, { login })(Login)