import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Banner from '../components/Banner';  
import {Link} from 'react-router-dom';
import RoomContainer from '../components/RoomsContainer';


export default function Rooms() {
    return (
        <div>
            <Navbar/>
            <Hero hero="roomsHero">
                <Banner title="Our Rooms">
                    <Link to="/" className="btn-primary">
                         HomePage
                    </Link>
                </Banner>
            </Hero>
            <RoomContainer/>
        </div>
    )
}
