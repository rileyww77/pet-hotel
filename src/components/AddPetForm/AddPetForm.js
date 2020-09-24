import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux'

class AddPetForm extends Component {

    state = {
        name: '',
        color: '',
        breed: '',
        owner_id: 0
    }

    componentDidMount() {
        this.getOwners();
    }

    //get request for owners. will make sure that owners 
    //are then in the ownerReducer regardless of if they've
    //gone to the owner form or not
    getOwners = () => {
        axios.get({ type: 'FETCH_OWNERS' })
    }

    //functions that will handle the collection of info
    //from the form
    handleName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleColor = (event) => {
        this.setState({
            color: event.target.value
        })
    }

    handleBreed = (event) => {
        this.setState({
            breed: event.target.value
        })
    }


    handleOwnerId = (event) => {
        console.log(event.target.value)
        this.setState({
            owner_id: event.target.value
        })
    }

    //submit function, collects data and sends to redux
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
        this.props.dispatch({ type: 'ADD_PET', payload: this.state })
    }

    render() {
        return (
            <div>
                <h2>Add Pet</h2>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <input placeholder="Pet Name" onChange={this.handleName}></input>
                    <input placeholder="Pet Color" onChange={this.handleColor}></input>
                    <input placeholder="Pet Breed" onChange={this.handleBreed}></input>
                    <select name="owners"  onChange={(event) => this.handleOwnerId(event)}>
                        <option value="" selected disabled hidden>Choose Pet Owner</option>
                        {this.props.reduxState.ownerReducer.map((owner) => {
                            return (
                                <option key={owner.name} value={owner.owner_id}>
                                    {owner.name}
                                </option>
                            )
                        })}
                    </select>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(AddPetForm);
