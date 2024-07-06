import mongoose from "mongoose";

interface IUserSchema {
  username: string;
  email: string;
  password: string;
  picture: string;
  savedCodes: Array<mongoose.Types.ObjectId>;
}

const UserSchema = new mongoose.Schema<IUserSchema>(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    picture: {
      type: String,
      default:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Fdefault-profile-picture&psig=AOvVaw0EMqEt0euhaCIBhWzf1gIA&ust=1719594425851000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLiN0smi_IYDFQAAAAAdAAAAABAE",
    },
    savedCodes: [{ type: mongoose.Schema.Types.ObjectId, ref:"Code" }],
  },
  { timestamps: true }
);

export const User = mongoose.model("User", UserSchema);
