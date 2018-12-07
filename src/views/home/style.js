import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width: 960px;
    margin: 0 auto;
    overflow: hidden;
`;

export const HomeLeft = styled.div`
    margin-left: 15px;
    padding-top: 30px;
    width: 625px;
    float: left;
    .banner_img {
        width: 100%;
        height: 270px;
    }
`;

export const HomeRight = styled.div`
    float: right;
    width: 280px;
`;

// Topic
export const TopicWrapper = styled.div`
    padding: 20px 0 10px 0;
    overflow: hidden;
    margin-left: -18px;
    border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
    float: left;
    height: 32px;
    color: #000;
    padding-right: 10px;
    line-height: 32px;
    background: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    margin-left: 18px;
    margin-bottom: 18px;
    .topic_pic {
        width: 32px;
        height: 32px;
        display: block;
        float: left;
        margin-right: 10px;
    }
`;

// List
export const ListItem = styled.div`
    padding: 20px 0;
    overflow: hidden;
    border-bottom: 1px solid #dcdcdc;
    .pic {
        float: right;
        width: 125px;
        height: 100px;
        display: block;
        border-radius: 5px;
    }
`;

export const ListInfo = styled.div`
    width: 500px;
    float: left;
    h3 {
        color: #333; 
        font-size: 18px;
        line-height: 28px;
        font-weight: bold;
    }
    p {
        color:#999;
        font-size: 13px;
        line-height: 18px;
        margin-top: 5px;
    }
`;

// LoadMore
export const LoadMore = styled.div`
    border-radius: 25px;
    background: #a5a5a5;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #fff;
    margin: 20px 0;
    cursor: pointer;
`;

// Recommend
export const RecommendWrapper = styled.div`
    margin: 30px 0;
    width: 280px;
`;

export const RecommendItem = styled.a`
    width: 280px;
    height: 50px;
    display: block;
    margin-bottom: 5px;
    background: url(${(props) => props.imgUrl});
    background-size: contain;
`;

// Writer
export const WriterWrapper = styled.div`
    h3 {
        font-size: 14px;
        color: #969696;
    }
`;

export const WriterItem = styled.li`
    margin: 20px 0;
    overflow: hidden;
    padding-bottom: 10px;
    border-bottom: 1px solid #dcdcdc;
    img {
        width: 48px;
        height: 48px;
        float: left;
        border: 1px solid #ddd;
        border-radius: 50%;
    }
    .info {
        margin-left: 58px;
    }
    h4 {
        color: #333;
        padding-top: 5px;
        margin-right: 60px;
        font-size: 14px;
        display: block;
    }
    p {
        margin-top: 10px;
        font-size: 12px;
        color: #969696;
    }
`;

export const BackTop = styled.span`
    display: block;
    position: fixed;
    right: 30px;
    bottom: 50px;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    cursor: pointer;
    font-size: 24px;
    color: #000;
    border: 1px solid #dcdcdc;
`;