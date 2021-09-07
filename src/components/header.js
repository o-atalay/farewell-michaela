import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import { Link } from 'react-router-dom';

const Header = (props) => { 
    return(
        <div className={ props.greenButtons ? 'header green-buttons' : 'header white-buttons' }>
        <Container className="header-container">
            <Link className="mh" to="/">MH</Link>
            <Link className="team" to={props.page === 'team' ? '/' : '/people'}>
                {props.page === 'team' ? 'BACK' : 'TEAM'}
                </Link>
        </Container>
        </div>
    )
}

export default Header;