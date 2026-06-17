import mongoose, {
  Schema
} from "mongoose";

export interface IReview {

  repository:
    mongoose.Types.ObjectId;

  submittedBy:
    mongoose.Types.ObjectId;

  title: string;

  code: string;

  language: string;

  status:
    "pending" |
    "processing" |
    "completed";

  issuesFound: number;

  aiSummary: string;

}

const ReviewSchema =
new Schema<IReview>(

  {

    repository: {

      type:
      Schema.Types.ObjectId,

      ref: "Repository",

      required: true

    },

    submittedBy: {

      type:
      Schema.Types.ObjectId,

      ref: "User",

      required: true

    },

    title: {

      type: String,

      required: true

    },

    code: {

      type: String,

      required: true

    },

    language: {

      type: String,

      default: "typescript"

    },

    status: {

      type: String,

      enum: [
        "pending",
        "processing",
        "completed"
      ],

      default: "pending"

    },

    issuesFound: {

      type: Number,

      default: 0

    },

    aiSummary: {

      type: String,

      default: ""

    }

  },

  {

    timestamps: true,

    versionKey: false

  }

);

ReviewSchema.index({
  repository: 1
});

ReviewSchema.index({
  submittedBy: 1
});

export const Review =
mongoose.model(
  "Review",
  ReviewSchema
);

export default Review;