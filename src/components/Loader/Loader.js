import React from 'react';

import loadingImg from '../../assets/gif/loading.gif';

import './Loader.css';

export const Loader = ({ loading, children }) => {
  if (loading) {
    return (
      <div className="loader">
        <img className="loader__image" src={loadingImg} alt="Loading" />
      </div>
    );
  }
  return children;
};
