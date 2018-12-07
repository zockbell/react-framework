import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { actionCreators } from './store';
import { LoginWrapper, LoginBox, InputBox, Button } from './style';

class Login extends PureComponent {    
    render(){
        const { handleLogin, loginStatus } = this.props;
        console.log(loginStatus)
        if(!loginStatus) {
            return (
                <LoginWrapper>
                    <LoginBox>
                        <InputBox type="text" placeholder="手机号或邮箱" ref={(input) => {this.username=input}}></InputBox>
                        <InputBox type="password" placeholder="密码" ref={(input) => {this.password=input}}></InputBox>
                        <Button onClick={ () => handleLogin(this.username, this.password) }>登录</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        }else{
            return <Redirect to="/" />
        }

        
    }
}

const mapState = (state) => {
    return {
        loginStatus: state.getIn(['login','login'])
    }    
}

const mapDispatch = (dispatch) => {
    return {
        handleLogin(usernameEle, passwordEle) {
            if(usernameEle.value === '' || passwordEle.value === ''){
                alert("用户名或者密码不能为空")
            }else{
                dispatch(actionCreators.login(usernameEle.value, passwordEle.value))
            }
        }
    }
}

export default connect(mapState, mapDispatch)(Login);