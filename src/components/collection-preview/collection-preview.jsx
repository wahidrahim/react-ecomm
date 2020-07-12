import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item.component';

import {
  CollectionPreviewContainer,
  Title,
  Preview,
} from './collection-preview.styles';

const CollectionPreview = ({ title, items, routeName, match }) => (
  <CollectionPreviewContainer>
    <Link to={`${match.url}/${routeName}`}>
      <Title>{title.toUpperCase()}</Title>
    </Link>
    <Preview>
      {items
        .filter((item, i) => i < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </Preview>
  </CollectionPreviewContainer>
);

export default withRouter(CollectionPreview);
