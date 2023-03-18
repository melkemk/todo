import React from 'react';
import '../App.css';
import '../index.css';
export function NavBar() {
    return (<div className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="sd">Book</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="as"> Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="df">contact</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="df">address</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="df">projects</a>
                </li>
            </ul>
        </div>
    </div>
    );
}


