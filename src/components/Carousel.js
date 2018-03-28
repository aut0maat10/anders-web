import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default class Carousel extends React.Component {
  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={300}
        naturalSlideHeight={100}
        totalSlides={3}
      >
        <Slider>
          <Slide index={0}>Vegan distillery mlkshk crucifix, taxidermy tattooed hella wayfarers. Beard cliche hell of cray man braid, narwhal hexagon kitsch thundercats godard you probably haven't heard of them wayfarers unicorn coloring book. DIY chicharrones listicle, bicycle rights subway tile master cleanse freegan twee tilde pabst readymade gluten-free cray cold-pressed. 90's hot chicken cloud bread keffiyeh distillery gastropub godard brooklyn. Viral gluten-free stumptown live-edge.</Slide>
          <Slide index={1}>Knausgaard direct trade vape venmo, celiac poke whatever glossier lo-fi crucifix hammock tote bag pop-up. Fixie drinking vinegar VHS fingerstache, gochujang roof party art party readymade brooklyn microdosing cold-pressed locavore knausgaard intelligentsia. Kombucha affogato raw denim succulents occupy shoreditch selvage. Poke mixtape hoodie vinyl, knausgaard pickled fingerstache kitsch scenester small batch brunch cardigan shabby chic vaporware unicorn. Bushwick celiac mlkshk chartreuse gochujang crucifix VHS skateboard post-ironic food truck normcore.</Slide>
          <Slide index={2}>Meditation echo park kitsch meggings small batch intelligentsia subway tile VHS waistcoat pinterest lo-fi bitters. Cronut subway tile food truck live-edge seitan raclette tote bag neutra roof party. Cloud bread lomo migas, roof party pabst flexitarian sustainable irony kinfolk put a bird on it photo booth iceland. Palo santo sustainable shoreditch hell of. Listicle freegan dreamcatcher try-hard viral trust fund hashtag pug af irony quinoa skateboard prism enamel pin. Edison bulb knausgaard craft beer pitchfork, tote bag succulents vaporware.</Slide>
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
    );
  }
}