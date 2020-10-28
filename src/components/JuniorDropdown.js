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
    let dropVal = [];
    for (let i = 0; i < age.length; i++) {
        dropVal.push(
            <option value={age[i]}>{age[i]}</option>
        )
    }

    return (
        <>
        <div className="form-group row">
            <label className="col-sm-2 col-form-label">Age</label>
            <select id="ageSelect" className="col-sm-5" name="age" onChange={props.thirdChange}>
                {dropVal}
            </select>
            </div>
        </>
    )
}
export default JuniorDropdown