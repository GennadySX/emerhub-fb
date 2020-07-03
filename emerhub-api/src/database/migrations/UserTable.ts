import {createSchema, Type} from "ts-mongoose";


const UserSchema = createSchema(
    {
        firstName: Type.string({ required: false }),
        lastName: Type.string({ required: false }),
        phone: Type.string({ required: false }),
        email: Type.string({ required: true, unique: true }),
        login: Type.string({ required: true, unique: true }),
        password: Type.string({ required: true }),
        avatar: Type.string({ required: false }),
    },
    { timestamps: { createdAt: true, updatedAt: true } }
);



export {
    UserSchema
}


