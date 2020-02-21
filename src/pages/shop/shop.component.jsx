import React, { Component } from 'react';
import SHOP_DATA from './shop.data';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends Component {
  constructor () {
    super();
    
    this.state = {
      collections: SHOP_DATA
    }
  }
  
  render() {
    const { collections } = this.state;
    return(
      <div>
        <h1>SHOP PAGE HYPERS</h1>
        {
          collections.map(({id, ...otherCollectionProps}) => (
            <CollectionPreview key={id} {...otherCollectionProps} /> 
          ))
        }
      </div>
    )
  }
}

export default ShopPage;