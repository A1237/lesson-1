import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles";

const withSpinner = wrappedComponent => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <SpinnerContainer>
      <SpinnerOverlay></SpinnerOverlay>
    </SpinnerContainer>
  ) : (
    <wrappedComponent {...otherProps} />
  );
};

export default withSpinner;
