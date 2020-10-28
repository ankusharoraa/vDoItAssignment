import React, { Component } from 'react'
import AdultDropdown from './AdultDropdown'
import JuniorDropdown from './JuniorDropdown';
class MainDropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ageBrack: '',
            genderSelect: '',
            juniorAge: '',
            adultAge: '',
            skills: '',
            teamName: ''
        }
    }
    firstChange = (event) => {

        this.setState({
            ageBrack: event.target.value,
            genderSelect: '',
            juniorAge: '',
            isAdultSelected: '',
            isJuniorSelected: '',
            skills: '',
            adultAge: '',
            teamName: ''
        })

    }

    secondChange = (event) => {
        if (event.target.name === 'gender') {
            if (event.target.value !== '') {

                this.setState({
                    genderSelect: event.target.value,
                })
            }
            else {
                this.setState({
                    genderSelect: '',
                })
            }
        }
        else if (event.target.id === 'adultAge') {
            if (event.target.value !== '') {
                this.setState({
                    adultAge: event.target.value,
                })
            }
            else {
                this.setState({
                    adultAge: '',
                })
            }
        }
        else if (event.target.id === 'skills') {
            let value = Array.from(event.target.selectedOptions, option => option.value);
            this.setState({ skills: value });
        }
        else if (event.target.id === 'teamName') {

            if (event.target.value !== '') {
                this.setState({
                    teamName: event.target.value,
                })
            }
            else {
                this.setState({
                    teamName: '',
                })
            }
        }
    }

    thirdChange = (event) => {
        if (event.target.value !== '') {
            this.setState({
                juniorAge: event.target.value,
                isJuniorSelected: true
            })
        }
        else {
            this.setState({
                juniorAge: '',
            })
        }
    }

    showDetails = () => {
        alert(
            (`
           Age Bracket : ${this.state.ageBrack}
           Gender : ${this.state.genderSelect}
           Age : ${this.state.adultAge}
           Skills : ${this.state.skills}
           Team Name : ${this.state.teamName}

           `)
        )
        event.preventDefault();
    }
    render() {

        return (
            <>
                <div className="container-fluid mt-5">
                    <h2 className = "h2 text-center mb-5">Registration Form</h2>
                    <form onSubmit={this.showDetails}>
                        <div class="form-group row">
                            <label className="col-sm-2 col-form-label">Age Bracket</label>
                            <select id="ageBrac" className="col-sm-5 form-control" name="ageBracket" onChange={this.firstChange}>
                                <option value=""></option>
                                <option value="adult">Adult</option>
                                <option value="junior">Junior</option>
                            </select>

                        </div>


                        {this.state.ageBrack === 'adult' ?
                            <AdultDropdown secondChange={this.secondChange} skills={this.state.skills} adultAge={this.state.adultAge} showDetailsAdult={this.showDetailsAdult} teamName={this.state.teamName} ageBrack={this.state.ageBrack} genderSelect={this.state.genderSelect} /> :
                            this.state.ageBrack === 'junior' ?
                                <JuniorDropdown thirdChange={this.thirdChange} /> : <></>}
                                <div class="form-group row">
                        {this.state.teamName !== '' ? <button type = "submit" className="offset-sm-2 form-control col-sm-5 btn btn-primary">Submit</button> : <></>}
                        </div>
                    </form>
                </div>

            </>
        )
    }
}
export default MainDropdown