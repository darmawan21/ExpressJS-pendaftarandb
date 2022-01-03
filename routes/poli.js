var express = require('express');
const { route } = require('.');
var router = express.Router();
var Poli = require("../models/poli");

/*TAMPIL DATA Poli. */
router.get('/', function(req, res, next) {
  Poli.findAndCountAll().then(data => {
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

/* Tambah Data Poli. */
router.post('/', function(req, res, next) {
  Poli.create(req.body).then(data => {
    res.json({
      status: true,
      pesan: "Berhasil Tambah",
      data:data
    });
  }).catch(salahnya=>{
    res.json({
      status: false,
      pesan: "Gagal Tambah: " + salahnya.message,
      data:req.body
    });
  });
});

/* Ubah Data Poli. */
router.put('/', function(req, res, next) {
  Poli.update(req.body, {
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

/* Delete Data Poli. */
router.delete('/', function(req, res, next) {
  Poli.destroy({
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

router.get('/options', function(req,res,next){
  Poli.findAll().then( data => {

    var options = data.map(item=>{
      return {
        id:item.id,
        value:item.nama
      }
    });

    res.json({
      status: true,
      pesan: "Berhasil Tampil Options",
      data: options
    });

  }).catch (err =>{
    res.json({
      status: false,
      pesan: "Gagal Tampil: " + err.message,
      data: []
    });
  });

});

module.exports = router;
