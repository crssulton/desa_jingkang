import React, { Component } from 'react';
import ReactPlayer from 'react-player'

class kegiatan extends Component {
  _isMounted = false;
  constructor(props){
    super(props);
    this.state = {
      allFoto:[],
      allVideo:[],
      foto  : '',
      video : '',
      countFoto: 1,
      countVideo:1,
      play: false,
    }
    this.nextFoto = this.nextFoto.bind(this)
    this.prevFoto = this.prevFoto.bind(this)
    this.nextVideo= this.nextVideo.bind(this)
    this.prevVideo = this.prevVideo.bind(this)
    this.playVideo = this.playVideo.bind(this)
  }

  componentDidMount() {
    this._isMounted = true;
    const foto = [];
    for(var i=1; i<=52; i++){
      foto[i] = require('./../assets/img/foto/'+i+'.png');
    }
    const video = [];
    for(var i=1; i<=5; i++){
      video[i] = require('./../assets/img/video/'+i+'.mp4');
    }
    this.setState({
      foto: foto[this.state.countFoto],
      video: video[this.state.countVideo],
      allFoto: foto,
      allVideo: video,
    })
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  nextFoto(){
    var a = this.state.countFoto;
    if (a === 52){a=0;}
    this.setState({
      foto: this.state.allFoto[a+1],
      countFoto: a+1,
    })
  }

  prevFoto(){
    var a = this.state.countFoto;
    if (a === 1){a=53;}
    this.setState({
      foto: this.state.allFoto[a-1],
      countFoto: a-1,
    })
  }

  nextVideo(){
    var a = this.state.countVideo;
    if (a === 5){a=0;}
    this.setState({
      video: this.state.allVideo[a+1],
      countVideo: a+1,
      play:false,
    })
  }

  playVideo(){
    if(this.state.play === false){this.setState({play:true})}
    else {this.setState({play:false})}
  }

  prevVideo(){
    var a = this.state.countVideo;
    if (a === 1){a=6;}
    this.setState({
      video: this.state.allVideo[a-1],
      countVideo: a-1,
      play:false,
    })
  }

  render() {
    return (
      <div>
        <div>
          <div className="carousel-inner" role="listbox">
              <div className="item active">
                <div className="container">
                  <div className="carousel-caption">
                    <h1>Kegiatan</h1>
                  </div>
                </div>
                <div className="header-back-new one"></div>
              </div>
          </div>
        </div>
        <section id="profil"  className="container features">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="navy-line"></div>
              <h1>Foto</h1>
            </div>
          </div>
          <div className="row features-block">
            <div className="col-lg-4 features-text wow fadeInLeft">
                <small>Desa Jingkang</small>
                <h2>Dokumentasi Foto </h2>
                <p>Kenangan-kenangan berupa foto selama berkegiatan di Desa Dingkang, kecamatan Tanjungmedar, Kabupaten Sumedang, Provinsi Jawa Barat.</p>
                <hr/>
                <div className="col-lg-6">
                  <button className="btn btn-primary block full-width m-b" onClick={this.prevFoto}>Prev</button>
                </div>
                <div className="col-lg-6">
                  <button className="ladda-button ladda-button-demo btn btn-primary full-width" onClick={this.nextFoto}>Next</button>
                </div>
            </div>
            <div className="col-lg-8 features-text wow fadeInRight">
              <img style={{width: "100%"}} src={this.state.foto} /> <br/>
            </div>
          </div>
        </section>
        <section id="profil"  className="container features">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="navy-line"></div>
              <h1>Video</h1>
            </div>
          </div>
          <div className="row features-block">
            <div className="col-lg-4 features-text wow fadeInLeft">
                <small>Desa Jingkang</small>
                <h2>Dokumentasi Video </h2>
                <p>Kenangan-kenangan berupa video selama berkegiatan di Desa Dingkang, kecamatan Tanjungmedar, Kabupaten Sumedang, Provinsi Jawa Barat.</p>
                <hr/>
                <div className="col-lg-4">
                  <button className="btn btn-primary block full-width m-b" onClick={this.prevVideo}>Prev</button>
                </div>
                <div className="col-lg-4">
                  <button className="btn btn-primary block full-width m-b" onClick={this.playVideo}>
                  {
                    (this.state.play === false)? 'Play': 'Stop'
                  }
                  </button>
                </div>
                <div className="col-lg-4">
                  <button className="btn btn-primary block full-width m-b" onClick={this.nextVideo}>Next</button>
                </div>
            </div>
            <div className="col-lg-8 features-text wow fadeInRight">
              {
                (this.state.play === false)? 
                <ReactPlayer style={{width: "100%"}} url={this.state.video}/>:
                <ReactPlayer style={{width: "100%"}} url={this.state.video} playing/>
              }
              <br/>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default kegiatan;