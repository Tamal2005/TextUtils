import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'


export default function NavBar(props) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">{props.title}</a>
                    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
                    {/* <div className="" id="navbarSupportedContent"> */}
                        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
                        </div>
                    {/* </div> */}
                </div>
            </nav>
        </div>
    )
}
NavBar.proptype = {
    title: PropTypes.string.isRequired
}
// NavBar.defaultProps = {
//     title: 'Title'
// }