import mongoose from 'mongoose';

const contactModel = new mongoose.Schema({
    id:{
        type: mongoose.Schema.Types.ObjectId,
    },
    description: {
        type: String,
      },
    email: {
        type: String,
    },
    department: {
        type: String,
    },
    organisation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Organisation',
    },
    person: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Person',
    },
    isPrimary: {
        type: String,
    },
    phones: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Phone'
        }
    ],
    language: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Language',
    },
    salesmanProfile: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserProfile',
    },
    isSubribedMarketing: {
        type: Boolean,
        default: false
    },
    validFrom: {
        type: Date,
    },
    validUntil: {
        type: Date,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserProfile',
    },
    updatedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserProfile',
    }
    }, { timestamps: true });

export default mongoose.model('Contact', contactModel);