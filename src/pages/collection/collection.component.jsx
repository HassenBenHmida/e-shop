import React from "react";
import { connect } from "react-redux";

import { selectShopCollectionId } from "../../redux/shop/shop.selector";

import "./collection.styles.scss";

const CollectionPage = ({ collection }) => {
  console.log(collection);
  return (
    <div className="collection-page">
      <h1>Collection {collection.title} PogO</h1>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectShopCollectionId(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);
