const mongoose = require('mongoose');

const User = mongoose.model('users'); //pull out 'users' collection

module.exports = (app) => {
    app.post('/api/categories/addCategory', async (req, res) => {
        req.user.categories = {...req.user.categories, [req.body.categoryToAdd]: { Name: req.body.categoryToAdd } }; //req.user is user model in db
        const user = await req.user.save();
        
        res.send(user)
    })

    app.post('/api/categories/deleteCategory', async (req, res) => {
        User.findOne({_id: req.user.id}, async (err, user) => {
            const categories = user.toObject().categories;
            delete categories[req.body.name];
            user.categories = categories;
            const newUser = await user.save();
            
            res.send(newUser)
          });
    
    })
}