import React, { Component } from 'react';
import { Link } from "react-router-dom";

class header extends Component {
  render() {
    return (
      <div className="navbar-wrapper">
        <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
            <div className="container">
                <div className="navbar-header page-scroll">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <Link className="navbar-brand" to="/">DESA JINGKANG</Link>
                </div>
                <div id="navbar" className="navbar-collapse collapse">
                    <ul className="nav navbar-nav navbar-right">
                        <li><Link className="page-scroll" to="profil">Profil</Link></li>
                        <li><Link className="page-scroll" to="kegiatan">Kegiatan</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
      </div>
    );
  }
}

export default header;