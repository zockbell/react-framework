import { fromJS  } from 'immutable';
import * as constants from './constants'

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    writerList: [],
    currentPage: 1,
    showScroll: false
});

const synchroData = (state, action) => {
    return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
        writerList: fromJS(action.writerList)
    });
}

const loadReadMore = (state, action) => {
    return state.merge({
        articleList: state.get('articleList').concat(action.list),
        currentPage: action.nextPage
    })
}

export default (state = defaultState, action) => {

    switch(action.type){
        case constants.SYNCHRO_DATA:
            return synchroData(state, action);
        case constants.LOADREADMORE:
           return loadReadMore(state, action);           
        case constants.SCROLL_SHOW:
            return state.set('showScroll', action.show);
        default:
        return state;
    }
    
}