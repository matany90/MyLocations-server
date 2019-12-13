const mongoose = require('mongoose');

const User = mongoose.model('users'); //pull out 'users' collection

module.exports = (app) => {
    app.post('/api/locations/addLocation', async (req, res) => {
        const { name, address, category, coordByDrag } = req.body;
        req.user.locations = {...req.user.locations, [name]: { name, address, category, coordByDrag } }; 
        const user = await req.user.save();
        
        res.send(user)
    })

    app.post('/api/locations/deleteLocation', async (req, res) => {
        User.findOne({_id: req.user.id}, async (err, user) => {
            const locations = user.toObject().locations;
            delete locations[req.body.name];
            user.locations = locations;
            const newUser = await user.save();
            
            res.send(newUser)
          });
    
    })
}