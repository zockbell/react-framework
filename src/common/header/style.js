import styled from 'styled-components';
import LogoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
    height: 58px;
    position:relative;
    border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.div`
    height: 58px;
    position: absolute;
    top: 10px;
    left: 10px;
    width: 291px;
    height: 37px;
    display: block;
    background: url(${LogoPic});
    background-size: contain;
`;

export const Nav = styled.div`
    width: 960px;
    height: 100%;
    margin: 0 auto;
    padding-right: 70px;
    box-sizing: border-box;
`;

export const NavItem = styled.div`
    padding: 0 15px;
    line-height: 56px;
    &.left {
        float: left;
    }
    &.right {
        color: #969696;
        float: right;
    }
    &.active {
        color: #ea6f5a;
    }
`;

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 160px;
    height: 38px;
    border: none;
    outline: none;
    margin-top: 9px;
    margin-left: 20px;
    padding: 0 30px 0 20px;
    border-radius: 20px;
    box-sizing: border-box;
    background: #eee;
    font-size: 14px;
    color: #666;
    &::placeholder {
        color: #999;
    }
    &.focused {
        width: 240px;
    }
    &.slide-enter {
        width: 160px;
        transition: all .3s ease-out;
    }
    &.slide-enter-active {
        width: 240px;
    }
    &.slide-exit {
        transition: all .3s ease-out;
    }
    &.slide-exit-active {
        width: 160px;
    }
`;

export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
`;

export const Button = styled.div`
    float: right;
    line-height: 38px;
    border-radius: 20px;
    margin-top: 9px;
    margin-right: 20px;
    padding: 0 20px;
    border: 1px solid #ec6149;
    box-sizing: border-box;
    font-size: 14px;
    &.reg {
        color: #ec6149;
    }
    &.wrtting {
        color: #fff;
        background: #ec6149;
    }
`;

export const SearchWrapper = styled.div`
    float: left;
    position: relative;

    .zoom {
        position: absolute;
        right: 5px;
        bottom: 5px;
        width: 30px;
        height: 30px;
        line-height: 30px;
        /* background: green; */
        border-radius: 15px;
        text-align: center;
        cursor: pointer;
        &.focused {
            color: #fff;
            background: #999;
        }
    }
`;

export const SearchInfo = styled.div`
    position: absolute;
    left: 20px;
    top: 58px;
    width: 240px;
    padding: 0 20px;
    border-radius: 5px;
    z-index: 1;
    background: #fff;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
`;

export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
`;

export const SearchInfoSwitch = styled.span`
    float: right;
    font-size: 13px;
    cursor: pointer;
    .spin {
        font-size: 13px;
        margin-right: 3px;
        display: block;
        float: left;
        transition: all .15s ease-in;
        transform-origin: center center;
    }
`;

export const SearchInfoList = styled.div`
    overflow: hidden;
`;

export const SearchInfoItem = styled.a`
    line-height: 20px;
    padding: 0 5px;
    font-size: 12px;
    color: #878787;
    border: 1px solid #ddd;
    border-radius: 3px;
    display: inline-block;
    margin-right: 10px;
    margin-bottom: 15px;
    cursor: pointer;
`;