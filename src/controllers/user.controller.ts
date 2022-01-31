import {
    Request,
    Response
} from 'express';
import logger from '../utils/logger'
import {createUsers} from '../services/user.service'

export async function createUserHandler(req: Request, res: Response) {
    try {
        const user = await createUsers(req.body) //userservice
        return user
    } catch (err: any) {
        logger.error(err)
        return res.status(409).send(err.message)
    }
}