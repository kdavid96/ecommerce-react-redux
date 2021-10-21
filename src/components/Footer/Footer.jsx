import React from 'react';
import { FooterContainer, Copyright } from './style';

export default function Footer() {
    return (
        <FooterContainer>
            <Copyright>©2021</Copyright>
            <p style={{padding: '0', margin: '0'}}>E-commerce site</p>
        </FooterContainer>
    )
}
