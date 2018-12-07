import React, { Component } from 'react';
import { FooterWrapper } from './style'

class Footer extends Component {
    render(){
        return (
            <FooterWrapper>
                <div>关于简书 · 联系我们 · 加入我们 · 简书出版 · 品牌与徽标 · 帮助中心 · 合作伙伴</div>
                <div>&copy;2012-2018 上海佰集信息科技有限公司 / 简书 / 沪ICP备11018329号-5 /  沪公网安备31010402002252号</div>
                <div>举报电话：021-34770013 / Zggsrz</div>
            </FooterWrapper>
        )
    }
}

export default Footer;