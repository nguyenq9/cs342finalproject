import React from "react";
import "./PlanATrip.css"


class PlanATrip extends React.Component {
    
    constructor (props) {
        super(props);
        this.state = {
            title: '',
            location: '',
            stateDate: '',
            endDate: '',            
        }
        
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleStartDateChange = this.handleStartDateChange.bind(this);
        this.handleEndDateChange = this.handleEndDateChange.bind(this);
        this.handleCreatePlan = this.handleCreatePlan.bind(this);
    }
    handleTitleChange(event) {
        this.setState({title: event.target.value});
    }

    handleLocationChange(event) {
        this.setState({location: event.target.value});
    }

    handleStartDateChange(event) {
        this.setState({startDate: event.target.value});
    }

    handleEndDateChange(event) {
        this.setState({endDate: event.target.value});
    }

    handleCreatePlan(data){
        // if (!this.state.title || !this.state.location || !this.state.startDate || !this.state.endDate) {
        //     console.log("Something is missing")
        //     return;
        // } 
        // const plan = {
        //     title: this.state.title,
        //     location: this.state.location,
        //     startDate: this.state.startDate,
        //     endDate: this.state.endDate,
        //     travelers: [],
        //     hotels: [],
        //     activities: [],
        //     restaurants: [],
        // }
        
        // console.log(`Creating "${this.state.title}" to go to ${this.state.location} from ${this.state.startDate} to ${this.state.endDate}`)
        fetch('/api/planatrip', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          })
            .then(res => res.json())
            .then(data => {
              if (data.status === 'success') {
                // getting user email from response if successful.
                // const { email = '', firstName = '', lastName = '' } = data.data.user;
                // console.log(data.data.user);
                // setting user to the redux store
                // dispatch(login({ firstName, lastName, email, avatar: '' }));
                // localStorage.setItem('user', JSON.stringify(data.data.user));
                // navigate("/", { replace: true });
                console.log(data.message);
              } else {
                console.error(data.message);
              }
            })
            .catch(err => { })
    }

    render() {
        return (
            <div className="PlanATrip">
                <div className="plantrip">
                    <form>
                        <h2 className="title"><a href="Plan A Trip" title='Home'>Plan a new trip</a></h2>
                        <p className="or"><span></span></p>

                        <div className="plan-fields">
                            <label> <b>Trip Title</b></label>
                            <input className="location" type="text" placeholder="Enter a title" name="uname" required onChange={this.handleTitleChange}/>
                            <label > <b>Location</b></label>
                            <input className="location" type="text" placeholder="Enter a location" name="uname" required onChange={this.handleLocationChange}/>
                            {/* <label><b>Start Date</b></label>
                            <input type="date" placeholder="Start date" name="startDate" required /> */}
                            <div className="date-label">
                                <label id="start-label"><b>Start Date</b></label>
                                <label id="end-label"><b>End Date</b></label>
                            </div>
                            <div>
                                <input type="date" placeholder="Start date" name="startDate" required onChange={this.handleStartDateChange}/>
                                <input type="date" placeholder="End date" name="endDate" required onChange={this.handleEndDateChange}/>
                            </div>
                            
                            <br></br>
                            {/*<label><b>End Date</b></label>
                            <input type="date" placeholder="End date" name="endDate" required />*/}
                        </div>
                        <br></br>
                        <button type="submit" className="create-btn">Create Plan</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default PlanATrip;