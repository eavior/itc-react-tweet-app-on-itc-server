import React from "react";
import { Redirect } from "react-router";

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            currentUserName: "",
            updatedUserName: "",
            redirect: null,
        };
    }

    componentDidMount() {
        this.setState(prevState => {
            return { currentUserName: this.props.currentUser, updatedUserName: this.props.currentUser, value: this.props.currentUser, redirect: null };
        });
    }

    handleChange(event) {
        this.setState({ value: event.target.value, updatedUserName: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault();
        const newUserName = this.state.updatedUserName;
        this.props.onChangeUser(newUserName);
        alert("The user name has been succesfully changed to " + newUserName);
        this.setState(prevState => {
            return { value: newUserName, redirect: "/" };
        });
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            <div className="container text-white profile">
                <h2>Profile</h2>
                <h3>User Name</h3>
                <form className="card-profile" onSubmit={event => this.handleSubmit(event)}>
                    <div className="card-body-profile">
                        <input
                            className="form-control"
                            name="text"
                            type="text"
                            rows="1"
                            value={this.state.value}
                            onChange={(event) => this.handleChange(event)}
                        />
                    </div>
                    <div className="card-body tweet-header">
                        <div className="float-end">
                            {this.state.updatedUserName !== this.state.currentUserName && <button className="btn btn-primary">Save</button>}
                            {this.state.updatedUserName === this.state.currentUserName && <button className="btn btn-primary disabled">Save</button>}
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
