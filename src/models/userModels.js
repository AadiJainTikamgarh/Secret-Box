import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    lowercase: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    trim: true,
  },
  photo: {
    type: String,
  },
  password: {
    type: String,
    default: undefined,
    minLength: [8, "Password must be at least 8 characters long"],
  },
  refreshToken: String,
  accessToken: String,
  nglResponse: [
    {
      response: {
        type: String,
        required: true,
        trim: true
      },
      createdAt: {
        type: Date,
        required: true,
        default: Date.now
      }
    },
  ],
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  this.password = await bcrypt.hash(this.password, 10);

  next();
});

userSchema.methods.isPasswordMatch = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    {
      id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: process.env.REFRESH_TOKEN_EXPIRE }
  );
};

const User = mongoose.models.users || mongoose.model("users", userSchema);

export { User };
