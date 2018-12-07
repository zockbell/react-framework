import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { ListItem, ListInfo, LoadMore } from '../style';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';


class List extends Component {
    render(){
        const { articleList, handleReadMore, page } = this.props;
        return (
            <Fragment>
                {
                    articleList.map((item,index) => {
                        return (
                            <Link to={"/detail/" + item.get("id")} target="_blank" key={index}>
                                <ListItem>
                                    <img className="pic" alt={item.get('title')} src={item.get('imgUrl')} />
                                    <ListInfo>
                                        <h3>{item.get('title')}</h3>
                                        <p>{item.get('desc')}</p>
                                    </ListInfo>
                                </ListItem>
                            </Link>
                        )
                    })
                }
                <LoadMore onClick={() => handleReadMore(page)}>阅读更多</LoadMore>
            </Fragment>
        )
    }
}

const mapState = (state) => ({
    articleList: state.getIn(['home','articleList']),
    page: state.getIn(['home', 'currentPage'])
})

const mapDispatch = (dispatch) => ({
    handleReadMore(page){
        dispatch(actionCreators.getReadMore(page))
    }
})

export default connect(mapState, mapDispatch)(List);