var express = require('express');
var Pasien = require('../models/pasiens');
var Poli = require('../models/poli');
var router = express.Router();
var Pendaftaran_Rawat_Jalan = require("../models/pendaftaran_rawat_jalan");

/*TAMPIL DATA Pendaftaran Rawat Jalan. */
router.get('/', function(req, res, next) {
Pendaftaran_Rawat_Jalan.findAll({raw:true}).then( async data=> {

  await Promise.all(data.map( async (item)=>{
    // baca pasien
    const pasien = await Pasien.findByPk(item.no_rm);

    // baca poli 
    const poli = await Poli.findByPk(item.id_poli);

    // update itemTampil
    item['nama_pasien'] =  pasien.nama;
    item['nama_poli'] = poli.nama;

  }));

  res.json({
    status:true,
    pesan: "Berhasil Tampil",
    data:data
  });

}).catch ( err => {
  res.json({
    status:false,
    pesan: "Gagal tampil: " + err.message,
    data:[]
  })
});
});

/* TAMBAH DATA Pendaftaran Rawat Jalan. */
router.post('/', function(req, res, next) {
Pendaftaran_Rawat_Jalan.create(req.body).then(data => {
    res.json({
      status: true,
      pesan: "Berhasil Ditambah",
      data:data
    });
  }).catch(salahnya=>{
    res.json({
      status: false,
      pesan: "Gagal Tampil: " + salahnya.message,
      data: []
    });
  });
});

/* UBAH DATA Pendaftaran Rawat Jalan. */
router.put('/', function(req, res, next) {
Pendaftaran_Rawat_Jalan.update(req.body, {
    where : {no_rm:req.body.no_rm}
  }).then( () => {
    res.json({
      status: true,
      pesan: "Berhasil Ubah",
      data:[]
    });
  }).catch(salahnya=>{
    res.json({
      status: false,
      pesan: "Gagal Ubah: " + salahnya.message,
      data:[]
    });
  });
});

/* HAPUS DATA Pendaftaran Rawat Jalan. */
router.delete('/', function(req, res, next) {
Pendaftaran_Rawat_Jalan.destroy({
    where : {no_rm:req.body.no_rm}
  }).then( () => {
    res.json({
      status: true,
      pesan: "Berhasil Hapus",
      data:[]
    });
  }).catch(salahnya=>{
    res.json({
      status: false,
      pesan: "Gagal Hapus: " + salahnya.message,
      data:[]
    });
  });
});

router.get('/options', function(req, res, next){
  Pendaftaran_Rawat_Jalan.findAll().then( data=>{

    var options = data.map(item=>{
      return{
        id:item.id,
        value:item.nama
      }
    });

    res.json({
      status: true,
      pesan: "Berhasil Tampil Options",
      data: options
    });

  }).catch( err => {
    res.json({
      status: false,
      pesan: "Gagal Tampil: " + err.message,
      data: []
    });
  });
});

module.exports = router;
