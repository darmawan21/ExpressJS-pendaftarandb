var express = require('express');
var router = express.Router();

var Poli = require('../models/poli');

router.get('/',function(req,res,next){
	Poli.findAll().then( data=>{
		res.json({
			status:true,
			pesan:"Berhasil Tampil",
			data:data
		});
	}).catch( err=>{
		res.json({
			status: false,
			pesan: "Gagal tampil: " + err.message,
			data:[]
		});
	});
});

router.post('/',function(req,res,next){

    Poli.create(req.body).then( data=>{
        res.json({
            status:true,
            pesan:"Berhasil Tambah",
            data:data
        });
    }).catch( err=>{
        res.json({
            status: false,
            pesan: "Gagal Tambah: " + err.message,
            data:[]
        });
    });

});

router.put('/',function(req,res,next){
	Poli.update(req.body,{
		where:{id:req.body.id}
	}).then( ()=>{
		res.json({
			status:true,
			pesan:"Berhasil Ubah",
			data:[]
		});
	}).catch( err=>{
		res.json({
			status: false,
			pesan: "Gagal Ubah: " + err.message,
			data:[]
		});
	});
});

router.delete('/',function(req,res,next){
	Poli.destroy({
		where:{id:req.body.id}
	}).then( ()=>{
		res.json({
			status:true,
			pesan:"Berhasil Hapus",
			data:[]
		});
	}).catch( err=>{
		res.json({
			status: false,
			pesan: "Gagal Hapus: " + err.message,
			data:[]
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




