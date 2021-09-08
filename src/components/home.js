import React, { useRef, useEffect } from 'react';
import Container from 'react-bootstrap/esm/Container';
import { Link } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

const Home = () => {
    const scrollElem = useRef(null);
    const executeScroll = () => scrollElem.current.scrollIntoView({
        behavior: 'smooth'
    })    

    useEffect(()=>{
        window.scrollTo(0, 0)
    }, [])

    return(
        <div className="home grid-bg">
        <Header />
        <Container className="fw-container">
            <div className="top-row">
                <div className="team">
                    <div className="team">COMM TEAM</div>
                    <div className="title" style={{ backgroundImage: 'url( /images/home-opening.svg)' }}></div>
                </div>
                <div onClick={ executeScroll } className="scroll-down" style={{ backgroundImage: 'url( /images/down-arrow.svg)' }} ></div>
            </div>

            <div className="bottom-row" ref={scrollElem}>
                <h3 className="editorial fz-36 mb-5">It takes as much courage to stand up and speak, as it does to sit down and simply listen.</h3>

                <p className="fz-18">You definitely didn’t tiptoe into KISKA, you entered with a giant leap. We know this because of the massive, lasting impression you made when you landed.</p>
                <p className="fz-18">From the moment you arrived, your path was directly up the corporate ladder but somehow you still managed to stay grounded, walking alongside your fellow team members. You even found the time to nurture young talents, encouraging them until they could walk confidently on their own.</p>
                <p className="fz-18">You may not have realized this, but you were always somewhat of a paradox here. On the one hand, you were our rock - solid and steadfast. Then when the occasion called for it, you were fast and agile, leading us (sometimes naively) into battle. </p>
                <p className="fz-18">Needless to say, when you run so enthusiastically into the unknown you will fall down. But you did it gracefully, dusted yourself off and carried on with even more determination. You even found a way to wear those scars proudly. And just as they are reminders of the more challenging times, the traces you have left all over KISKA will be our memories of you. </p>
                <p className="fz-18">Now you have chosen to jump off the KISKA treadmill and start down your own path. As you take your first steps (limps) on your new journey, we wish you all the best!</p>
            </div>

            <Link className="farewells-btn btn-circle btn-green-circle" to="/people">FAREWELLS</ Link>
        
        </Container>
        <div className="grid" style={{ backgroundImage: 'url( /images/grid.svg)' }} ></div>

        <Footer bgDark={true} />

        </div>
    )
}

export default Home;