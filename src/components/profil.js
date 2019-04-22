import React, { Component } from 'react';
import Logo from './../assets/img/logo_Jawa_Barat.png';
import Tanya from './../assets/img/tanda-tanya.png';

class profil extends Component {
  _isMounted = false;
  constructor(props){
    super(props);
    this.state = {
      allFoto:[],
      foto  : '',
      countFoto: 1,
    }
    this.nextFoto = this.nextFoto.bind(this)
    this.prevFoto = this.prevFoto.bind(this)
  }

  componentDidMount() {
    this._isMounted = true;
    const foto = [];
    for(var i=1; i<=13; i++){
      foto[i] = require('./../assets/img/profil/'+i+'.png');
    }
    this.setState({
      foto: foto[this.state.countFoto],
      allFoto: foto,
    })
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  nextFoto(){
    var a = this.state.countFoto;
    if (a === 13){a=0;}
    this.setState({
      foto: this.state.allFoto[a+1],
      countFoto: a+1,
    })
  }

  prevFoto(){
    var a = this.state.countFoto;
    if (a === 1){a=14;}
    this.setState({
      foto: this.state.allFoto[a-1],
      countFoto: a-1,
    })
  }

  render() {
    return (
      <div>
        <div className="carousel carousel-fade" data-ride="carousel">
          <div className="carousel-inner" role="listbox">
              <div className="item active">
                <div className="container">
                  <div className="carousel-caption">
                    <h1>Profile Desa Jingkang</h1>
                    <p>Kecamatan Tanjungmedar, Kabupaten Sumedang, Provinsi Jawa Barat.</p>
                    <p>
                      <a className="btn btn-lg btn-primary page-scroll" href="#profil" role="button">Go to Profile</a>
                    </p>
                  </div>
                  <div className="carousel-image wow zoomIn">
                      <img src={Logo} alt="Logo"/>
                  </div>
                </div>
                <div className="header-back one"></div>
              </div>
          </div>
        </div>
        <section id="profil"  className="container features">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="navy-line"></div>
              <h1>Profil Desa Jingkang</h1>
            </div>
          </div>
          <div className="row features-block wow fadeInLeft">
            <div className="col-lg-4 text-center">
                <img src={Tanya} alt="Tanya"/>
            </div>
            <div className="col-lg-8 features-text">
              <div className="panel panel-success">
                <div className="panel-heading">
                  Desa Jingkang ?
                </div>
                <div className="panel-body">
                  <p><b>Desa Jingkang</b> merupakan sebuah desa yang berlokasi di Kecamatan Tanjungmedar. 
                    Lokasinya berada di bagian utara wilayah kecamatan dan berbatasan langsung dengan 
                    Kecamatan Surian di sebelah utara dan Kabupaten Subang di sebelah barat laut. 
                    Dengan berpindahnya pusat pemerintahan kecamatan dari pusat Desa Jingkang ke Desa 
                    Tanjungmedar, jarak pusat Desa Jingkang dengan ibu kota kecamatan sekitar 2 kilometer.<br/>
                    Berdasarkan informasi sebagaimana disajikan blog Jinx 2011 – One Love, Desa Jingkang sudah 
                    berdiri semenjak tahun 1888. Ini dikaitkan dengan mulai adanya Kepala Desa Jingkang yang pertama. 
                    Sebelum tahun 2001, Desa Jingkang termasuk wilayah Kecamatan Tanjungkerta. Ketika 
                    dilakukan pemekaran wilayah Kecamatan Tanjungkerta, Desa Jingkang menjadi bagian 
                    dari wilayah yang dimekarkan, Kecamatan Tanjungmedar. Kemudian pada tahun 2007, 
                    wilayah Desa Jingkang dimekarkan menjadi dua desa yaitu Desa Jingkang dan Desa Tanjungmedar.</p>
                </div>
              </div>
            </div>
            
            <section id="profil"  className="container features">
              <div className="row features-block">
                <div className="col-lg-4 features-text wow fadeInLeft">
                    <small>Desa Jingkang</small>
                    <h2>Profil Lengkap </h2>
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
          </div>
        </section>
      </div>
    );
  }
}

export default profil;