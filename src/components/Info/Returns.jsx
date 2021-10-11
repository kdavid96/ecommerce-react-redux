import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { } from '../../actions';
import { TextContainer, Header, Text } from './style';

function Returns() {
    const category = useSelector(state => state.category);
    const dispatch = useDispatch();
    return (
        <TextContainer>
            <Header>Returns</Header>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>Voluptate odio explicabo placeat alias animi repudiandae laborum dolorum neque, non quam ullam in,<br/>eligendi ducimus repellat laudantium voluptates minima hic impedit.</Text>
        </TextContainer>
    )
}

export default Returns
