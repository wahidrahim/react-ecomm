import {compose} from 'redux';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {isCollectionFinishedFetching} from '@redux/shop/shop.selector';

import WithSpinner from '@components/with-spinner/with-spinner.component';
import CollectionPage from '@pages/collection/collection.component';

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !isCollectionFinishedFetching(state),
});

export default compose(connect(mapStateToProps), WithSpinner)(CollectionPage);
