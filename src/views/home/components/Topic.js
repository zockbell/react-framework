import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
    TopicWrapper,
    TopicItem,
} from '../style';


class Topic extends Component {
    render(){
        return (
            <TopicWrapper>
                {
                    this.props.topicList.map((item) => {
                        return (
                            <TopicItem key={item.get('id')}>
                                <img className="topic_pic" alt={item.get('title')} src={item.get('imgUrl')} />
                                {item.get('title')}
                            </TopicItem>
                        )
                    })
                }
            </TopicWrapper>
        )
    }
}

const mapState = (state) => ({
    topicList: state.getIn(['home','topicList'])
})



export default connect(mapState, null)(Topic);