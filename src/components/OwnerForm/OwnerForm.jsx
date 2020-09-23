import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import mapStoreToProps from '../../redux/mapStoreToProps';

class OwnerForm extends Component {
  state = {
    ownerName: '',
  };

  handleChange = (event) => {
    this.setState({
        ownerName: event.target.value
    })
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <h2>Add Owner</h2>
        <form>
        <input type='text' placeholder='Owner Name' onChange={(event) => this.handleChange(event)} />
        <button type='submit' >Submit</button>
        </form>
      </div>
    );
  }
}

export default OwnerForm