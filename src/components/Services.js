import React, { Component } from 'react'    
import Title from '../components/Title';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';

class Services extends Component {
 state = {
     services: [
         {
             icon:<FaCocktail/>,
             title: "best cocktails",
             info: 'Get best of the drinks available in this region'
         },
         {
            icon:<FaHiking/>,
            title: "Endless hiking",
            info: 'Get best of the drinks available in this region'
        },
        {
            icon:<FaShuttleVan/>,
            title: "free transport",
            info: 'Get best of the drinks available in this region'
        },
        {
            icon:<FaBeer/>,
            title: "free beer",
            info: 'Get best of the drinks available in this region'
        }
     ]
 }
 render() {
  return(
        <section className="services"        >
            <Title title='Services' />
            <div className="services-center">
                {this.state.services.map((item, index) => {
                    return <article key={index} className="service">
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                    </article>
                })}
            </div>
        </section>
    )
   }
 }

export default Services