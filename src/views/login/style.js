import styled from 'styled-components';

export const LoginWrapper = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    top: 56px;
    background: #eee;
`;

export const LoginBox = styled.div`
    width: 400px;
    margin: 80px auto;
    background: #fff;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 50px;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
`;

export const InputBox = styled.input.attrs({
    // placeholder: '手机号或邮箱'
})`
    width: 100%;
    height: 50px;
    outline: none;
    color: #777;
    margin-bottom: 0;
    box-sizing: border-box;
    vertical-align: middle;
    border: 1px solid #c8c8c8;
    padding: 4px 12px 4px 35px;
    border-radius: 0 0 4px 4px;
    background-color: hsla(0,0%,71%,.1);
    &:nth-of-type(2) {
        margin-top: 15px;
    }
`;

export const Button = styled.div`
    margin-top: 20px;
    width: 100%;
    padding: 15px 18px;
    font-size: 18px;
    border: none;
    color: #fff;
    border-radius: 25px;
    background: #3194d0;
    cursor: pointer;
    outline: none;
    display: block;
    box-sizing: border-box;
    text-align: center;
`;