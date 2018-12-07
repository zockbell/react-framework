import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import Topic from './components/Topic';
import List from './components/List';
import Writer from './components/Writer';
import Recommend from './components/Recommend';
import { actionCreators } from './store'
import Footer from '../../common/footer';
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './style.js';


class Home extends PureComponent {
    
    // 返回顶部
    handleScrollTop(){
        window.scrollTo(0, 0);
    }

    render(){
        return (
            <Fragment>
                <HomeWrapper>
                    <HomeLeft>
                        <img className="banner_img" alt='banner' src="https://upload.jianshu.io/admin_banners/web_images/4581/8cfb95afa4ac98683ce1b9ab0f835f425e6a7df5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
                        <Topic></Topic>
                        <List></List>
                    </HomeLeft>
                    <HomeRight>
                        <Recommend></Recommend>
                        <Writer></Writer>
                    </HomeRight>
                    {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}><i className="iconfont">&#xe70b;</i></BackTop> : null}                
                </HomeWrapper>
                <Footer />
            </Fragment>
        )
    }
    componentDidMount(){
        this.props.changeHomeData();
        this.bindEvents();
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.props.controlScrollShow ,false);
    }

    bindEvents(){
        window.addEventListener('scroll', this.props.controlScrollShow ,false);
    }
}

const mapState = (state) => {
    return {
        showScroll: state.getIn(['home','showScroll'])
    }
}

const mapDispatch = (dispatch) => {
    return {
        changeHomeData(){
            dispatch(actionCreators.getHomeInfo());
        },
        controlScrollShow(){
            if(document.documentElement.scrollTop > 200){
                dispatch(actionCreators.toggleScroll(true));
            }else{
                dispatch(actionCreators.toggleScroll(false));
            }
        }
    }
}

export default connect(mapState, mapDispatch)(Home);