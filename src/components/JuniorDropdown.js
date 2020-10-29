import React from 'react'

const JuniorDropdown = (props) => {
    let age = [
        '',
        '13-U',
        '14-U',
        '15-U',
        '16-U',
        '17-U'
    ]
    let skills = [
        '',
        'Bronze',
        'Silver',
        'Gold',
        'High School',
        'Club'
    ]
    let dropVal = [];
    let dropVal1 = [];
    for (let i = 0; i < age.length; i++) {
        dropVal.push(
            <option value={age[i]}>{age[i]}</option>
        )
    }
    for (let i = 0; i < skills.length; i++) {
        dropVal1.push(
            <option value={skills[i]}>{skills[i]}</option>
        )
    }
    const JuniorThirdDropdown = ({ skills }) => {
        return (
            <>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label h1">Skills</label>
                    <select id="skills" className="col-sm-5 form-control" name="skills" value={skills} onChange={props.secondChange} multiple>
                        {dropVal1}
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
            <label className="col-sm-2 col-form-label h1">Age</label>
            <select id="juniorAge" className="col-sm-5 form-control" name="juniorAge" onChange={props.secondChange}>
                {dropVal}
            </select>
            </div>
            {props.juniorAge !== '' ? <JuniorThirdDropdown skills={props.skills} /> : <></>}
            {(props.skills !== '') ? <TeamNaming teamName={props.teamName} /> : <></>}
        </>
    )
}
export default JuniorDropdown