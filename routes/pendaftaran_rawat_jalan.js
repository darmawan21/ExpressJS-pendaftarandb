var express = require('express');
var router = express.Router();
var PendaftaranRawatJalan = require("../models/pendaftaran_rawat_jalan");

/*TAMPIL DATA Pendaftaran Rawat Jalan. */
router.get('/', function(req, res, next) {
PendaftaranRawatJalan.findAndCountAll().then(data => {
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

/* TAMBAH DATA Pendaftaran Rawat Jalan. */
router.post('/', function(req, res, next) {
PendaftaranRawatJalan.create(req.body).then(data => {
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

/* UBAH DATA Pendaftaran Rawat Jalan. */
router.put('/', function(req, res, next) {
PendaftaranRawatJalan.update(req.body, {
    where : {id:req.body.id}
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

/* HAPUS DATA Pendaftaran Rawat Jalan. */
router.delete('/', function(req, res, next) {
PendaftaranRawatJalan.destroy({
    where : {id:req.body.id}
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
