var express = require('express');
var router = express.Router();
var Pasiens = require("../models/pasiens");
const { options } = require('./pendaftaran_rawat_jalan');

/*TAMPIL DATA PASIEN. */
router.get('/', function(req, res, next) {
  Pasiens.findAll().then(data => {
    res.json({
      status: true,
      pesan: "Berhasil Tampil",
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

/* TAMBAH DATA PASIEN. */
router.post('/', function(req, res, next) {
  Pasiens.create(req.body).then(data => {
    res.json({
      status: true,
      pesan: "Berhasil Ditambah",
      data:data
    });
  }).catch(salahnya=>{
    res.json({
      status: false,
      pesan: "Gagal Tampil: " + salahnya.message,
      data:[]
    });
  });
});

/* UBAH DATA PASIEN. */
router.put('/', function(req, res, next) {
  Pasiens.update(req.body, {
    where : {no_rm:req.body.no_rm}
  }).then(data => {
    res.json({
      status: true,
      pesan: "Berhasil Ubah",
      data:data
    });
  }).catch(salahnya=>{
    res.json({
      status: false,
      pesan: "Gagal Ubah: " + salahnya.message,
      data:req.body
    });
  });
});

/* HAPUS DATA PASIEN. */
router.delete('/', function(req, res, next) {
  Pasiens.destroy({
    where : {no_rm:req.body.no_rm}
  }).then(data => {
    res.json({
      status: true,
      pesan: "Berhasil Hapus",
      data:data
    });
  }).catch(salahnya=>{
    res.json({
      status: false,
      pesan: "Gagal Hapus: " + salahnya.message,
      data:req.body
    });
  });
});


router.get('/options', function(req, res, next) {
  Pasiens.findAll().then( async data => {

    var options = [];
    await data.forEach( async (item) => {
        var itemBaru = {id:item.no_rm, value:item.no_rm+" - "+item.nama} 
        await options.push(itemBaru)
    });

    res.json({
      status: true,
      pesan: "Berhasil Tampil",
      data:options,
    });
  }).catch(salahnya=>{
    res.json({
      status: false,
      pesan: "Gagal Tampil: " + salahnya.message,
      data: []
    });
  });
});

router.get('/tampil/:no_rm', function(req, res, next){
  var no_rm = req.params.no_rm;
  Pasiens.findByPk(no_rm).then( data => {
    res.json({
      status: true,
      pesan: "Berhasil Tampil",
      data: data
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
