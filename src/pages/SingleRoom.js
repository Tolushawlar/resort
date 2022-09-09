import React, { Component } from 'react';
import defaultBgc from '../images/room-1.jpeg';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import {RoomContext} from '../context';
import StyledHero from '../components/styledHero';

class SingleRoom extends Component {
  constructor(props){
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBgc
    }
  }

  static contextType = RoomContext;
  render() {
    const {getRoom} = this.context;
    const room = getRoom(this.state.slug);
    if(!room){
      return(
        <div className='error'>
          <h3>No Room Found </h3>
          <Link to='/rooms' className='btn-primary'>
              Rooms  
          </Link>,
        </div>
      ) 
    }
    const {name, description, capacity, size, price, extras, breakfast, pets, images} = room;
    // desctructing the images array to seperate the main image from the other images
    const [mainImg, ...defaultImg] = images;

  return(
    <>
      <StyledHero img={mainImg || this.state.defaultBgc}  >
          <Banner title={`${name} room`}>
            <Link to='/rooms' className='btn-primary'>
              Back to Rooms
            </Link>
          </Banner>
      </StyledHero>
      <section className="single-room">
        < div className="single-room-images">
          {defaultImg.map((item, index) => {
            return <img key={index} src={item} alt={name}/>;
          })}
        </div>
        <div className="single-room-info">
          <artcle className="desc">
            <h3>Details</h3>
            <p>{description}</p>
          </artcle>
          <article className="info">
            <h3>Info</h3>
            <h6>price: ${price}</h6>
            <h6>size: {size} SQFT</h6>
            <h6>
              max capacity: {" "}
                {capacity > 1 ? `${capacity} people`:
                `${capacity} person`}
            </h6>
            <h6>{pets ? "pets allowed": "no pets allowed"}</h6>
            <h6>{breakfast && "free breakfast included"}</h6>
          </article>
        </div>
      </section>
      <section className="room-extras">
        <h6>extras</h6>
        <ul className="extras">
          {extras.map((item, index) => {
            return <li key={index}>-{item}</li>;
          })}
        </ul>
      </section>
    </>
    )
   }
 }

export default SingleRoom