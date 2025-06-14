import mongoose, {Schema} from 'mongoose'

const nglSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true,
        trim: true
    },
    isActive: {
        type: Boolean,
        default : true
    },
    response: [{
        type: Schema.Types.ObjectId,
        ref:"nglresponse"

    }],
    owner: {
        type: Schema.Types.ObjectId,
        ref:"users"
    }
},{timestamps: true})

const NGL  = mongoose.models.ngl || mongoose.model("ngl", nglSchema)

export {NGL}