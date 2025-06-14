import mongoose from "mongoose";

const nglResponseSchema = new mongoose.Schema({
    response: {
        type: String,
        required: true,
        trim: true
    }
}, {timestamps: true})

const nglResponse = mongoose.models.nglResponse || mongoose.model('nglResponse', nglResponseSchema)

export {nglResponse}