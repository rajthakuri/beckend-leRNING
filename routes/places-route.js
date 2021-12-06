const express = require('express');

const router = express.Router();

const DUMMY_PLACES = [
    {
        id:'p1',
        title:'Empire state building',
        description :'one of the mostfamous sky scrapers ',
        location:{
            latitude:40.7484445,
            longitude:-73.9878584},
        address:'20 W 34th St, New York, NY 10001, United States',
        creator:'u1'

},{
    id:'p2',
    title:'Empire state building',
    description :'one of the mostfamous sky scrapers ',
    location:{
        latitude:40.7484445,
        longitude:-73.9878584},
    address:'20 W 34th St, New York, NY 10001, United States',
    creator:'u1'

}]

router.get('/:pid',(req , res ,next) =>{
    const placeId = req.params.pid;// {pid:'p1}
    const place = DUMMY_PLACES.find(p => {
        return p.id == placeId;

    })

    if (!place){
        const error  = new Error('couldnot find a place for provided id.')
        error.code = 404;
        throw error;
    }
        res.json({place}); // _{place: place}


});

router.get('/user/:uid',(req,res,next) =>{
    const userId = req.params.uid;

    const place = DUMMY_PLACES.find(p =>{


        return p.creator === userId
    })

    if (!place){
        const error  = new Error('couldnot find a place for provided user id.')
        error.code = 404;
         return next(error) ;
    }
    res.json({place})
})

module.exports = router;

