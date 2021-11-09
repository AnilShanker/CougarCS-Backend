import { Router } from 'express';
import { logger } from '../../utils/logger';

const router = Router();

testArray = [
    {
        "firstName": "Anil",
        "lastName": "Shanker",
        "email": "anilshanker@hotmail.com",
        "PSID": 1234567,
        "eventID": 54
    }
]

router.post('/', async (req, res) => {
    // const { firstName, lastName, email, PSID, eventID } = req.body;
    testArray.push(req.body);
    res.json(testArray);
})
