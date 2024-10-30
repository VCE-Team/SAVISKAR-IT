import React from 'react';
import Card from './Card';
import insect1 from './../assets/img/insect-1.png';
import insect2 from './../assets/img/insect-2.png';
import insect3 from './../assets/img/insect-3.png';

const CardContainer = () => (
  <div className="container mx-auto p-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <Card image={insect1} title="Elegant Queen Bee" price="$5999" />
      <Card image={insect2} title="Mechanical Magic Butterfly" price="$3999" />
      <Card image={insect3} title="Wonderful Flower Beetle" price="$8999" />
    </div>
  </div>
);

export default CardContainer;