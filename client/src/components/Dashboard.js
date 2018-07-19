import React, { Component } from 'react';
import { connect } from 'react-redux';
class Dashboard extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return 'still decgind'
      case false:
        return 'not log'
      default:
        return 'loe'
    }
  }
  render(){
    return (
      <nav>
        <div className="nav-wrapper">
          <a className="left brand-logo">
            EMaily
          </a>
          <ul className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}
function mapStateToProps({ auth }) {
  return { auth };
}

export default connect()(Dashboard);
