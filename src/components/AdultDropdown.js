import React from 'react'

const AdultDropdown = (props) => {
    let gender = [
        '',
        'Men',
        'Women',
        'Coed'
    ]
    let age = [
        '',
        '26-U',
        '40',
        '50',
        '60',
        '70'
    ]

    let skills = [
        '',
        'A',
        'AA',
        'AAA',
        'Novice',
        'Masters'
    ]
    let dropVal = [];
    let dropVal1 = [];
    let dropVal2 = [];
    for (let i = 0; i < gender.length; i++) {
        dropVal.push(
            <option value={gender[i]}>{gender[i]}</option>
        )
    }

    for (let i = 0; i < age.length; i++) {
        dropVal1.push(
            <option value={age[i]}>{age[i]}</option>
        )
    }

    for (let i = 0; i < skills.length; i++) {
        dropVal2.push(
            <option value={skills[i]}>{skills[i]}</option>
        )
    }

    const ThirdDropdown = ({ adultAge }) => {
        return (
            <>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label h1">Age</label>
                    <select id="adultAge" className="col-sm-5 form-control" name="age" value={adultAge} onChange={props.secondChange}>
                        {dropVal1}
                    </select>
                </div>
            </>
        )
    }

    const FourthDropdown = ({ skills }) => {
        return (
            <>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label h1">Skills</label>
                    <select id="skills" className="col-sm-5 form-control" name="skills" value={skills} onChange={props.secondChange} multiple>
                        {dropVal2}
                    </select>
                </div>
            </>
        )
    }

    const TeamNaming = ({ teamName }) => {
        return (
            <>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label h1">Team Name</label>
                    <input id="teamName" className="col-sm-5 form-control" type="text" value={teamName} onChange={props.secondChange} autoFocus />
                </div>
            </>
        )
    }

    return (
        <>
           
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label h1">Gender</label>
                    <select id="genderSelect" className="col-sm-5 form-control" name="gender" onChange={props.secondChange}>
                        {dropVal}
                    </select>
                </div>
                {props.genderSelect !== '' ? <ThirdDropdown adultAge={props.adultAge} /> : <></>}
                {props.adultAge !== '' ? <FourthDropdown skills={props.skills} /> : <></>}
                {(props.skills !== '') ? <TeamNaming teamName={props.teamName} /> : <></>}
            
        </>
    )
}
export default AdultDropdown