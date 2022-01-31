import mongoose from "mongoose";
import config from "config";
import logger from "./logger";

async function connect() {
    const dbUri = config.get<string>('dbUri')   
    try {
        await mongoose.connect(dbUri) 
        logger.info('Connected To Mongo')
    } catch (err) {
        logger.error('Error connectingConnecting To Db')
    }

}

export default connect;