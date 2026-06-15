import mongoose, {
  Schema,
  Model,
  HydratedDocument
} from "mongoose";

export interface IUser {
  githubId?: string;

  username: string;

  email: string;

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

UserSchema.index({
  email: 1
});

UserSchema.index({
  githubId: 1
});

UserSchema.methods.isPro =
function () {
  return this.plan === "pro";
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

export const User =
mongoose.model<
  IUser,
  UserModel
>(
  "User",
  UserSchema
);

export default User;