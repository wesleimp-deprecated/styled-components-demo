import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    width: 100%;
    max-width: 400px;
    margin: 30px;
    padding: 20px;
    background: #ffffff;
    border-radius: 5px;

    div {
        border: dashed 1px #999;
        border-radius: 5px;
    }
`;

export const Message = styled.p`
    display: flex;
    color: #999;
    justify-content: center;
    align-items: center;
    padding: 15px 0;

`;