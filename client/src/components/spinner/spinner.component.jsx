import React from 'react';

import SpinnerLoading from '../spinner-loading/spinner-loading.component'

const WithSpinner = WrappedComponent => {
    const Spinner = ({ isLoading, ...otherProps}) => {
    return isLoading ? (
        <SpinnerLoading />
    ) : (
            <WrappedComponent {...otherProps} />
    )
    }
    return Spinner;
} 

export default WithSpinner;