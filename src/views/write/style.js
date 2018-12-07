import styled from 'styled-components';

export const WriteWrapper = styled.div`
    width: 920px;
    margin: 0 auto;    
`;

export const WriteTitle = styled.input`
    font-size: 30px;
    font-weight: 700;
    height: 60px;
    width: 100%;
    line-height: 60px;
    border: none;
    outline: none;
    margin: 30px 0;
    font-family: '微软雅黑';
    border-bottom: 1px solid #ddd;
`;

export const WriteContent = styled.textarea`
    width: 100%;
    outline: none;    
    border: none;
    resize: none;
    padding: 20px;
    font-size: 18px;
    line-height: 200%;
    background: #eee;    
    min-height: 550px;
    font-family: '微软雅黑';
    box-sizing: border-box;
`;