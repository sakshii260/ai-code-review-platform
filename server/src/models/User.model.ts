import mongoose, {
  Schema,
  Model,
  HydratedDocument
} from "mongoose";

import bcrypt from "bcryptjs";

export interface IUser {

 githubId?: string;

 username: string;

 email: string;

 password: string;

 avatar?: string;

 plan: "free" | "pro";

 stats: {
   reviewsSubmitted: number;
   reviewsGiven: number;
   totalIssuesFound: number;
 };

 refreshToken?: string;
}

export interface IUserMethods {

  isPro(): boolean;

  comparePassword(
    candidatePassword:string
  ):Promise<boolean>;

}

export interface UserModel
  extends Model<IUser, {}, IUserMethods> {

  findByEmail(
    email: string
  ): Promise<
    HydratedDocument<
      IUser,
      IUserMethods
    > | null
  >;

  findByGithubId(
    githubId: string
  ): Promise<
    HydratedDocument<
      IUser,
      IUserMethods
    > | null
  >;
}

const UserSchema = new Schema<
  IUser,
  UserModel,
  IUserMethods
>(
  {
    githubId: {
      type: String,
      unique: true,
      sparse: true
    },

    username: {
      type: String,
      required: true,
      trim: true
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },

    password: {
      type: String,
      required: true
    },

    avatar: {
      type: String,
      default: ""
    },

    plan: {
      type: String,
      enum: ["free", "pro"],
      default: "free"
    },

    stats: {
      reviewsSubmitted: {
        type: Number,
        default: 0
      },

      reviewsGiven: {
        type: Number,
        default: 0
      },

      totalIssuesFound: {
        type: Number,
        default: 0
      }
    },

    refreshToken: {
      type: String,
      default: null
    }
  },

  {
    timestamps: true,
    versionKey: false
  }
);



UserSchema.methods.isPro =
function () {
  return this.plan === "pro";
};

UserSchema.methods.comparePassword =
async function (
 candidatePassword:string
){

 return bcrypt.compare(
   candidatePassword,
   this.password
 );

};

UserSchema.statics.findByEmail =
function (email: string) {
  return this.findOne({ email });
};

UserSchema.statics.findByGithubId =
function (githubId: string) {
  return this.findOne({
    githubId
  });
};
UserSchema.pre(
 "save",

 async function(next){

  if(
   !this.isModified(
    "password"
   )
  ){
   return next();
  }

  const salt =
  await bcrypt.genSalt(10);

  this.password =
  await bcrypt.hash(
   this.password,
   salt
  );

  next();
 }
);

export const User =
mongoose.model<
  IUser,
  UserModel
>(
  "User",
  UserSchema
);

export default User;