import axios from 'axios';
import * as constants from './constants';

const getDetailInfo = (title, content) => ({
    type: constants.GET_DETAILINFO,
    title,
    content,
});

export const getDetail = (id) => {
    return (dispatch) => {
        axios.get('/api/detail.json?id='+id).then((res) => {
            const result = res.data.data;
            dispatch(getDetailInfo(result.title, result.content));
        })
        .catch(err => {
            console.log(err)
        })
    }
}