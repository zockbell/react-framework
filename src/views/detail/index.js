import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { actionCreators } from './store';
import { DetailWrapper, Title, Content } from './style';

class Detail extends Component {    
    render(){
        return (
            <DetailWrapper>
                <Title>{this.props.title}</Title>
                <Content  dangerouslySetInnerHTML={{ __html: this.props.content}} ></Content>
            </DetailWrapper>
        )
    }

    componentDidMount() {
        this.props.getDetailData(this.props.match.params.id);
    }
}

const mapState = (state) => {
    return {
        title: state.getIn(['detail', 'title']),
        content: state.getIn(['detail', 'content'])
    }
}

const mapDispatch = (dispatch) => {
    return {
        getDetailData(id){
            dispatch(actionCreators.getDetail(id));
        }
    }
}



export default connect(mapState,mapDispatch)(withRouter(Detail));