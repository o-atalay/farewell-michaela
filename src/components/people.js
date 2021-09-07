import { useEffect } from 'react';
import Container from 'react-bootstrap/esm/Container';
import { Link } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

const People = () => { 
    const people = require('../data/data.json');
    
    useEffect(()=>{
        window.scrollTo(0, 0)
    }, [people])

    return(
        <div className="people grid-bg">
        <Header page="team" />

        <Container className="people-container fw-container">
            <div className="people-title">
                <div className="main-title" style={{ backgroundImage: 'url( /images/team-opening.svg)' }}></div>
                <div className="subtitle"></div>
            </div>
            
            <div className="people-list">
                {
                    people.map((p, index) =>{
                        return (
                        
                            <div className="person" key={ index } style={{ backgroundImage: 'url( /images/pp/' + p.pp_path + ')' }}>
                                <Link className="to-person" to={ `people-detail/${p.name.toLowerCase()}` }>
                                    <div className={index%2 === 0 ? 'name green' : 'name red' }>{p.name}</div>
                                </Link>
                            </div>
                        )
                    })
                }
                
            </div>
        </Container>
        <div className="grid" style={{ backgroundImage: 'url( /images/grid.svg)' }}></div>

        <Footer bgDark={true} />

        </div>
    )
}

export default People;