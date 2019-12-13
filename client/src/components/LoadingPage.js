import React from 'react';
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

const LoadingPage = () => (
    <div style={{justifyContent: 'center', display: 'flex', marginTop: '100px'}}>
    <Loader
        type="BallTriangle"
        color="#673ab7"
        height={200}
        width={200}
        timeout={3000} //3 secs
    />
    </div>
);

export default LoadingPage;