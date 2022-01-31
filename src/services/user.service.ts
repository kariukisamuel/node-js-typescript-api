import {
    DocumentDefinition
} from "mongoose";
import UserModel, {
    UserDocument
} from "../models/user.model";

export async function createUsers(input: DocumentDefinition<UserDocument>) {
    try {
        return await UserModel.create(input)
    } catch (e: any) {
        throw new Error(e)
    }
}