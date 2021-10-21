import React from 'react';
import { UserContainer, UserTitle, UserInfo } from './style';

export default function User() {
    return (
        <UserContainer>
            <UserTitle>User</UserTitle>
            <UserInfo>
                Information about the current user
            </UserInfo>
        </UserContainer>
    )
}
