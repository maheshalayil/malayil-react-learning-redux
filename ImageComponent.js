import React from 'react'
import faker from 'faker';

let ImageComp = () => {
  return (
    <div>
      <img src={faker.image.avatar()} />
    </div>
  );
}

export default ImageComp;