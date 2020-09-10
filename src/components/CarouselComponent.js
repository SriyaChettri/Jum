import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption} from 'reactstrap';

const items = [
  {
    src: 'assets/images/Bic.png',
    altText: 'Electric Micro-mobility enables the pollution less and jam free place, you want your state to be.',
    caption: 'Introducing JUM MILE ',
    caption2:'MILE is a British manufactured 250 W, 25 km/hr E-Bike that is gonna zoom you uphill and on straight roads with Pedal Assist and Throttle. Is it a cycle? Is it a scooter? Its both and more.'
  
    
  },
  {
    src: 'assets/images/caro1.jpg',
    altText: 'Ride the change you want to see !',
    caption: 'Ride the change you want to see !'
},
 
];

const Caro = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
        
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}>
           
        <img src={item.src} alt={item.altText} className="img-thumbnail " style={{ background: "#333",width:"100%",height:"auto" }}/>
        <CarouselCaption  captionHeader={item.caption} captionText={item.caption2} />
      </CarouselItem>
    );
  });

  return (

  <div  style={{ background: "#333"}}>
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous} 
    >
        
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
    </div>
  );
}

export default Caro;