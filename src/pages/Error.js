import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Banner from '../components//Banner';
import {Link} from 'react-router-dom';

export default function Error() {
    return (
       <div>
           <Navbar/>
           <Hero>
               <Banner title="404" subtitle="page not found">
                   <Link to="/" className="btn-primary">
                       back to homepage
                   </Link>
               </Banner>
           </Hero>
       </div>
    )
}
