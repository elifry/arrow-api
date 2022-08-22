const router = require('express-promise-router')();
const profileController = require('../controllers/profile.controller');

// ==> (POST): localhost:3000/api/profiles
router.post('/profiles', profileController.createProfile);

// ==> (GET): localhost:3000/api/profiles
router.get('/profiles', profileController.listAllProfiles);

// ==> (GET): localhost:3000/api/profiles/:id
router.get('/profiles/:id', profileController.findProfileById);

// ==> (PUT): localhost: 3000/api/profiles/:id
router.put('/profiles/:id', profileController.updateProfileById);

// ==> (DELETE): localhost:3000/api/profiles/:id
router.delete('/profiles/:id', profileController.deleteProfileById);

module.exports = router;