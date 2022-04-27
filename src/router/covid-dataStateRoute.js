import express from 'express';
const router = express.Router();
import coronaLMAONinja from '../apis/coronaLMAONinja.js'

router.get('/:state',async(req,res) => {
    const covidStateData = new coronaLMAONinja
    console.log('getting covid data...')
    console.log(req.params.state)
    const covidStateDataRetreive = covidStateData.getState(req.params.state)
    res.send(covidStateDataRetreive);
});

export default router;