import {compose} from 'redux';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {isCollectionFetching} from '@redux/shop/shop.selector';

import CollectionsOverview from '@components/collections-overview/collections-overview.component';
import WithSpinner from '@components/with-spinner/with-spinner.component';

const mapStateToProps = createStructuredSelector({
  isLoading: isCollectionFetching,
});

export default compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);
