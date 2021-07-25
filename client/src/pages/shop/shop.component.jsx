import React, { useEffect, Suspense } from 'react';
import {Route} from 'react-router-dom';
import { connect } from 'react-redux'
import {fetchCollectionsStart} from '../../redux/shop/shop.actions'
import SpinnerLoading from '../../components/spinner-loading/spinner-loading.component'
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';

const ShopPage = ({fetchCollectionsStart, match}) => {
  useEffect(() => {
    fetchCollectionsStart()
  }, [fetchCollectionsStart])
  
   return (
     <div className='shop-page'>
       <Suspense fallback={<SpinnerLoading />}>
    <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
         <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
         </Suspense>
  </div>
);
 } 

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(null, mapDispatchToProps)(ShopPage);