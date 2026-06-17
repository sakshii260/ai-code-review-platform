import mongoose, {
  Schema
} from "mongoose";

export interface IRepository {

  name: string;

  description: string;

  owner:
    mongoose.Types.ObjectId;

  collaborators:
    mongoose.Types.ObjectId[];

  isPrivate: boolean;

  language: string;

}

const RepositorySchema =
new Schema<IRepository>(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    description: {
      type: String,
      default: ""
    },

    owner: {
      type:
        Schema.Types.ObjectId,

      ref: "User",

      required: true
    },

    collaborators: [
      {
        type:
          Schema.Types.ObjectId,

        ref: "User"
      }
    ],

    isPrivate: {
      type: Boolean,
      default: false
    },

    language: {
      type: String,
      default: "TypeScript"
    }
  },

  {
    timestamps: true,
    versionKey: false
  }
);

RepositorySchema.index({
  owner: 1
});

export const Repository =
mongoose.model(
  "Repository",
  RepositorySchema
);

export default Repository;