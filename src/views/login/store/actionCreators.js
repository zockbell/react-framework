import axios from 'axios';
import * as constants from './constants';

const changeLogin = () => ({
    type: constants.CHANGE_LOGIN,
    value: true
})

// 退出登录
export const logout = () => ({
    type: constants.LOGOUT,
    value: false
})

// 登录
export const login = (username, password) => {
    return (dispatch) => {
        axios.get('/api/login.json?username='+username+'&password='+password).then((res) => {
            if(res.data.data){
                dispatch(changeLogin());
            }else{
                alert('登录失败');    
            }
        })
        .catch(err => {
            alert('登录失败');
        })
    }
}
