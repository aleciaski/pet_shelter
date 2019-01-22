const bp = require('body-parser');
const api = require('./controller');

module.exports= function(app){
	app.use(bp.json())
	app.get('/api/pets', api.getAllPets)
    app.get('/api/pets/:pet_id', api.getOnePet)
    app.post('/api/pets', api.createPet)
    app.put('/api/pets/:pet_id', api.updatePet)
    app.patch('/api/pets/:pet_id', api.updatePet)
    app.delete('/api/pets/:pet_id', api.deletePet)
	return app;
}