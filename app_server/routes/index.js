

var express = require('express');
var router = express.Router();
var ctrlLocations=require('../controllers/locations')
var ctrlOthers=require('../controllers/others')
var ctrlReportes=require('../controllers/reporte')
var ctrlMain = require('../controllers/main');
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);
router.get('/reporte', ctrlReportes.addReporte);
/* Other pages */
router.get('/about', ctrlOthers.about);
module.exports = router;




