import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '@components/collection-item/collection-item.component';
import { selectCollection } from '../../redux/shop/shop.selector';

import { Collection, Title, ItemsContainer } from './collection.styles';

const CollectionPage = (props) => {
  const { title, items } = props.collection;

  return (
    <Collection>
      <Title>{title}</Title>

      <ItemsContainer>
        {items.map((item) => (
          <CollectionItem item={item} key={item.id} />
        ))}
      </ItemsContainer>
    </Collection>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
