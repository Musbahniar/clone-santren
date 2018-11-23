import React, { Component } from 'react'
import { Jumbotron, Button } from 'reactstrap';
import Logo from '../img/santrenkoding_logo.png';
import Poster from '../img/poster.jpg';
import Footer from '../component/Footer';

export default class Mondok extends Component {
  render() {
    return (
      <div>
         <Jumbotron className="text-center">
                <img src = {Logo}></img>
                <h1 className="display-3">Mondok by Santren Koding</h1>
                <p className="lead">Kegiatan Belajar Intensif 3 tahun Programming dan Qur'an</p>
                <p className="lead">
                    <Button color="success"><strong>Daftar Sekarang</strong></Button>
                </p>
            </Jumbotron>
            <div className="text-center">
              <h2>KABAR GEMBIRA</h2>
              <h2>UNTUK KAMU YANG PASSION DIBIDANG IT</h2>
              <p align="center">
                Santren Koding saat ini sedang membuka pendaftaran santri baru.
                Bidang keahlian yang dibuka adalah Mobile Development dan Web Development dengan jenjang 3 tahun lama masa pembelajaran dan live project.
              </p>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-6" align="center"><img src = {Poster} height="520"></img></div>
                <div className="col-6">
                    <h4>Fasilitas</h4>
                    <ul>
                        <li>GRATIS BIAYA PENDIDIKAN</li>
                        <li>GRATIS UANG MAKAN DAN ASRAMA</li>
                        <li>TEMPAT BELAJAR YANG NYAMAN</li>
                        <li>RIHLAH 2 BULAN SEKALI</li>
                    </ul>  
                    <br />
                    <h4>Persyaratan</h4>
                    <ul>
                        <li>MUSLIM</li>
                        <li>LAKI-LAKI (USIA MAKS 19TH)</li>
                        <li>MENGINAP/TINGGAL DI ASRAMA</li>
                        <li>BUKAN YANG MENGHALALKAN ROKOK</li>
                        <li>BERSUNGGUH-SUNGGUH</li>
                        <li>MEMPUNYAI LAPTOP</li>
                        <li>WAJIB HOBI NGODING</li>
                        <li>SIAP BELAJAR 16 JAM/HARI</li>
                    </ul>  
                    <br />
                    <h4>Periode</h4>
                    <ul>
                        <li>PERIODE 1: Pendaftaran Tutup 18 Maret 2018</li>
                        <li>PERIODE 2: Pendaftaran Tutup 31 Mei 2018</li>
                        <li>PERIODE 3: Coming soon...</li>
                        <li>Muslimah (Untuk Perempuan): Coming soon...</li>
                    </ul>  
                </div>
                <div className="container">
                <Button color="success" size="lg" >Daftar Sekarang</Button>{' '}
                </div>
              </div>
            </div>
            <Footer />
      </div>
    )
  }
}
