import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { WriteWrapper, WriteTitle, WriteContent } from './style'

class Login extends PureComponent {    
    render(){
        const { loginStatus } = this.props;
        if(loginStatus) {
            return (
                <WriteWrapper>
                    <WriteTitle placeholder="请输入标题"></WriteTitle>
                    <WriteContent placeholder="请输入内容"></WriteContent>
                </WriteWrapper>
            )
        }else {
            return <Redirect to='/login' />
        }

        
    }
}

const mapState = (state) => {
    return {
        loginStatus: state.getIn(['login', 'login'])
    }    
}

export default connect(mapState, null)(Login);