import { useEffect } from 'react';
import Container from 'react-bootstrap/esm/Container';
import { useParams, useHistory } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import ReactPlayer from 'react-player/lazy';
import { useSwipeable } from 'react-swipeable';

import {
    Link
  } from 'react-router-dom';

const PeopleDetail = () => { 

    let { name } = useParams()

    let data = require('../data/data.json');

    const current = data.findIndex(x => x.name.toLowerCase() === name)
    const prev = current <= 0 ? data.length-1 : current -1
    const next = current >= data.length-1 ? 0 : current +1
    let history = useHistory();

    const swipeConfig = {
        delta: 10,                            // min distance(px) before a swipe starts. *See Notes*
        preventDefaultTouchmoveEvent: false,  // call e.preventDefault *See Details*
        trackTouch: true,                     // track touch input
        trackMouse: false,                    // track mouse input
        rotationAngle: 0,                     // set a rotation angle
    }

    const swipeHandlers = useSwipeable({
        onSwiped: (e) => {
            if(e.dir === 'Right') history.push(`/people-detail/${data[prev].name.toLocaleLowerCase()}`)
            if(e.dir === 'Left') history.push(`/people-detail/${data[next].name.toLocaleLowerCase()}`)
        }, ... swipeConfig
    });
    
    //console.log('prev:', prev);
    //console.log('current:', current);
    //console.log('next:', next);
    
    useEffect(()=>{
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }, [name])

    return(
        <div {...swipeHandlers} className={'person-detail ' + name}>
            <Header greenButtons={true} />
            
            {data[current].video ? 
                <div className="video-player">
                    <ReactPlayer
                        url={`/images/videos/${data[current].video}`}
                        controls={true}
                        width='100%' 
                        height='100%' 
                        className='react-player' 
                    />
                </div> : <div className="profile-picture" style={{ backgroundImage: `url( /images/pp/${data[current].pp_path})` }}></div>
            }

            <Container className="detail-container">
                <div className="profile">

                    <div className="profile-title">
                        <h1 className="fz-72 editorial">{data[current].name}</h1>
                    </div>

                    {data[current].text && data[current].text.length ? 
                    <div className="profile-text">
                        {
                        data[current].text.map((item, i) =>{
                            return <p key={i}>{ item }</p>
                        })
                        }
                    </div> : false
                    }

                    {data[current].image ? 
                    <div 
                        className="profile-image" 
                        style={{ backgroundImage: `url( /images/messages/${data[current].image})` }}>
                    </div> : false
                    }

                    
                </div>

                <div className="profile-nav">
                    <Link key={prev} to={`/people-detail/${data[prev].name.toLocaleLowerCase()}`} className="to-profile prev">Prev</Link>
                    <Link key={next} to={`/people-detail/${data[next].name.toLocaleLowerCase()}`} className="to-profile next">Next</Link>
                </div>

            </Container>

            <Footer bgDark={false} />
        </div>
    )
}

export default PeopleDetail;