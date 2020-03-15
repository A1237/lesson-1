import React from "react";
import { Route } from "react-router-dom";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import Collection from "../collection/collection.component";
import { connect } from "react-redux";
import { updateCollection } from "../../redux/shop/shop.actions";
import {
  firestore,
  convertCollectionSnapshotToMap
} from "../../firebase/firebase.utils";

import {
  SpinnerContainer,
  SpinnerOverlay
} from "../../components/with-spinner/with-spinner.styles";

// import withSpinner from "../../components/with-spinner/with-spinner.component";
// const CollectionOverviewWithSpinner = withSpinner(CollectionOverview);
// const CollectionPageWithSpinner = withSpinner(Collection);

class ShopPage extends React.Component {
  state = {
    loading: true
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollection } = this.props;
    const collectionRef = firestore.collection("collections");

    // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapShot => {
    //   const collectionMap = convertCollectionSnapshotToMap(snapShot.docs);
    //   updateCollection(collectionMap);
    //   this.setState({ loading: false });
    // });

    collectionRef.get().then(snapShot => {
      const collectionMap = convertCollectionSnapshotToMap(snapShot.docs);
      updateCollection(collectionMap);
      this.setState({ loading: false });
    });
  }

  render() {
    const { loading } = this.state;
    const { match } = this.props;
    let spinner = (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    );
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={props =>
            loading ? spinner : <CollectionOverview {...props} />
          }
        />
        <Route
          path={`${match.path}/:collection`}
          render={props => (loading ? spinner : <Collection {...props} />)}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollection: collectionMap => dispatch(updateCollection(collectionMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);
