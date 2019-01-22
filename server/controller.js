const Pet = require('./models');

module.exports= {
	getAllPets:function(req,res){
        Pet.find({})
            .then(data=>console.log(data)||res.json(data))
            .catch(errs=>console.log(errs)||res.json(errs))
    },
    getOnePet:function(req,res){
        Pet.findById(req.params.pet_id)
            .then(data=>console.log(data)||res.json(data))
            .catch(errs=>console.log(errs)||res.json(errs))
    },
    createPet:function(req,res){
        Pet.create(req.body)
            .then(data=>console.log(data)||res.json(data))
            .catch(errs=>console.log(errs)||res.json(errs))
    },
    updatePet:function(req,res){
        Pet.findByIdAndUpdate(req.params.pet_id, req.body, {new:true, runValidators:true})
            .then(data=>console.log(data)||res.json(data))
            .catch(errs=>console.log(errs)||res.json(errs))
    },
	deletePet:function(req,res){
        Pet.findByIdAndDelete(req.params.pet_id)
            .then(data=>console.log(data)||res.json(data))
            .catch(errs=>console.log(errs)||res.json(errs))
    }
}