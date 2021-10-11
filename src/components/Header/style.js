import styled from 'styled-components';

export const Wrapper = styled.section`
    width: 100%;
    position: relative;
    top: 5vh;
    left: 0;
    display: flex;
    z-index: -2;
    align-items: center;
    justify-content: center;
`;

export const Image = styled.div`
    width: 100%;
    height: 100vh;
    overflow-x: hidden;
    background: linear-gradient(rgb(72,0,72,0.8), rgb(192,72,72,0.8)), url("https://images.unsplash.com/photo-1521410409201-2fcbcc0379ee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80");
    background: linear-gradient(rgb(72,0,72,0.8), rgb(192,72,72,0.8)), url("https://images.unsplash.com/photo-1521410409201-2fcbcc0379ee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80");
    background-repeat: no-repeat;
    background-size: cover;
`;

export const HeaderText = styled.h1`
    position: absolute;
    font-size: 4rem;
    font-weight: 800;
    color: #f9f3ff;
`;