import React from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {
  isCollectionFetching,
  isCollectionFinishedFetching,
} from '../../redux/shop/shop.selector';
import WithSpinner from '@components/with-spinner/with-spinner.component';
import CollectionsOverviewContainer from '@components/collections-overview/collections-overview.container';
import CollectionPage from '@pages/collection/collection.component';

import {fetchCollectionsAsync} from '../../redux/shop/shop.actions';

const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  componentDidMount() {
    this.props.fetchCollectionsAsync();
  }

  render() {
    const {match, isCollectionFinishedFetching} = this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner
              isLoading={!isCollectionFinishedFetching}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching,
  isCollectionFinishedFetching,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsAsync: () => dispatch(fetchCollectionsAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
