import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";


type FormData = {
    login: string
    password: string
    rememberMe: boolean
}

const Login = () => {
    const onSubmit = (formData: FormData)=>{
        console.log(formData)
    }

    return (
        <div>
            <h1>Login</h1>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </div>
    )
}


const LoginForm: React.FC<InjectedFormProps<FormData>> = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"login"} component={"input"}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={"input"}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={"input"}/>Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const ReduxLoginForm = reduxForm<FormData>({form: "login"})(LoginForm)
export default Login;