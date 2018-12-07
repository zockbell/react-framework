import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { Link } from 'react-router-dom';
import { actionCreators as loginActionCreators } from '../../views/login/store'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem,
} from './style';

class Header extends Component {

    getListArea() {
        const { focused, list, page, mouseIn, totalPage, handleMouseEnter, handleMouseLeave, handleTurnPage } = this.props;
        const newList = list.toJS();
        const pageList = [];

        if(newList.length){
            for(let i=(page-1) * 10; i<page * 10; i++){
                // console.log(newList[i])
                pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                )
            }
        }

        if(focused || mouseIn){
            return (
                <SearchInfo 
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch 
                            onClick={() => handleTurnPage(page, totalPage, this.spinIcon)}
                        >
                            <i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            )
        }else{
            return null;
        }
    }

    render(){
        const { focused, handleFocus, handleBlur, list, login, logout } = this.props;
        return (
            <HeaderWrapper>
                <Link to="/">
                    <Logo />
                </Link>
                <Nav>
                    <Link to='/h5/'>
                        <NavItem className="left active">首页</NavItem>
                    </Link>
                    <NavItem className="left">下载App</NavItem>
                    {
                        login ? 
                            <NavItem onClick={logout} className="right" style={{cursor: 'pointer'}}>zock 你好，退出</NavItem> : 
                            <Link to="/login">
                                <NavItem className="right">登录</NavItem>
                            </Link>
                    }
                    <NavItem className="right">
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={300}
                            classNames="slide"
                        >
                            <NavSearch 
                                className = {focused ? 'focused' : ''}
                                onFocus = {() => handleFocus(list)}
                                onBlur = {handleBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <i className={focused ? 'iconfont focused zoom' : 'iconfont zoom'}>&#xe614;</i>
    
                        {/* 搜索弹出窗 */}
                        {this.getListArea()}
                    </SearchWrapper>
                </Nav>
    
                <Addition>
                    <Button className='reg'>注册</Button>
                    <Link to='/write'>
                        <Button className='wrtting'>
                            <i className="iconfont">&#xe61b;</i>
                            写文章
                        </Button>
                    </Link>
                </Addition>
            </HeaderWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        // focused: state.get('header').get('focused')
        focused: state.getIn(['header','focused']),
        mouseIn: state.getIn(['header','mouseIn']),
        list: state.getIn(['header','list']),
        page: state.getIn(['header','page']),
        totalPage: state.getIn(['header','totalPage']),
        login: state.getIn(['login','login'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleFocus(list){
            /*
            if(list.size > 0){
                // 中间件是指action和store中间，是对dispatch的一个升级，创建store的时候被使用
                dispatch(actionCreators.getList());
            }
            */

            // 上面的if简写为下：
            (list.size === 0) && dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },
        handleBlur(){
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter(){
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave(){
            dispatch(actionCreators.mouseLeave());
        },
        // 换一批
        handleTurnPage(page, totalPage, spin){
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
            // console.log(originAngle);
            if(originAngle){
                originAngle = parseInt(originAngle);
            }else{
                originAngle = 0;
            }
            spin.style.transform = 'rotate('+(originAngle+360)+'deg)';
            
            if(page < totalPage){
                page = page + 1;
                dispatch(actionCreators.turnPage(page+1));
            }else{
                dispatch(actionCreators.turnPage(1));
            }
        },
        // 退出登录
        logout(){
            dispatch(loginActionCreators.logout());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);