import styled from 'styled-components';

export const Background = styled.div`
    position: fixed;
    left: 10vw;
    width: 80vw;
    top: 10vh;
    height: 80vh;
    background-image: url(${require('./assets/background-img.png')});
    background-color: '#fdee6c';
    background-size: 80%;
    opacity: 0.2;
    background-repeat: no-repeat;
    background-position: center;
    z-index: -99;
`;