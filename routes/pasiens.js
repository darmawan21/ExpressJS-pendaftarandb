var express = require('express');
var router = express.Router();
var Pasiens = require("../models/pasiens");

/*TAMPIL DATA PASIEN. */
router.get('/', function(req, res, next) {
  Pasiens.findAndCountAll().then(data => {
    res.json({
      status: true,
      pesan: "Berhasil Tampil",
      data:data.rows,
      count: data.count
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
      data: req.body
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

module.exports = router;
