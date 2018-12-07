import React, { Component } from 'react';
import { connect } from 'react-redux';
import { WriterWrapper, WriterItem } from '../style'

class Writer extends Component {
    render(){
        return (
            <WriterWrapper>
                <h3>推荐作者</h3>
                <ul>
                    {
                        this.props.writerList.map((item) => {
                            return (
                                <WriterItem key={item.get('id')}>
                                    <img alt={item.get('name')} src={item.get('imgUrl')} />
                                    <div className="info">
                                        <h4>{item.get('name')}</h4>
                                        <p>{item.get('desc')}</p>
                                    </div>
                                </WriterItem>
                            )
                        })
                    }
                </ul>
            </WriterWrapper>
        )
    }
}

const mapState = (state) => ({
    writerList: state.getIn(['home','writerList'])
})

export default connect(mapState, null)(Writer);