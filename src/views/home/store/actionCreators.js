import axios from 'axios';
import * as constants from './constants';
import { fromJS } from 'immutable';

const getHomeInfoData = (result) => ({
    type: constants.SYNCHRO_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList,
    writerList: result.writerList
});

const loadReadMore = (list, nextPage) => ({
    type: constants.LOADREADMORE,
    list: fromJS(list),
    nextPage
});

export const toggleScroll = (show) => ({
    type: constants.SCROLL_SHOW,
    show
})

export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res) => {
            const result = res.data.data;
            dispatch(getHomeInfoData(result));
        })
        .catch(err => {
            console.log(err)
        })
    }
}

export const getReadMore = (page) => {
    return (dispatch) => {
        axios.get('/api/homeList.json?page=' + page).then((res) => {
            const result = res.data.data;
            dispatch(loadReadMore(result, page + 1));
        })
        .catch(err => {
            console.log(err)
        })
    }
}