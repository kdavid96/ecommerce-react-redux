import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { categoryChange } from '../../actions';
import { ErrorContainer, Image, RedirectButton} from './style';

function PageNotFound() {
    const dispatch = useDispatch();
    return (
        <ErrorContainer>
            <Image/>
            <Link style={{textDecoration: "none"}} to="/" onClick={() => dispatch(categoryChange('HOME'))}><RedirectButton>Home</RedirectButton></Link>
        </ErrorContainer>
    )
}

export default PageNotFound
