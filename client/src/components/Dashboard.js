import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      dashboard
      <div className="fixed-action-btn">
        <Link to="/surveys/New" className="btn-floating btn-large red">
          <i className="material-icons">add</i>
        </a>
      </div>
    </div>
  );
};

export default Dashboard;
