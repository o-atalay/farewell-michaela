import React from 'react';
import Container from 'react-bootstrap/esm/Container';

const Footer = (props) => {
    return(
        <div className={props.bgDark ? 'footer dark' : 'footer'}>
        <Container className="footer-container">
            Built by those that say thank you.
        </Container>
        </div>
    )
}

export default Footer;