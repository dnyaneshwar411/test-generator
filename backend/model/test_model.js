import mongoose from "mongoose";

const testSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  createdBy: {
    type: String,
    required: true,
  },
  domain: {
    type: String,
   
  },
  availableAt: Date,
  testDuration: {
    type: Number,
    required: true,
  },
  questions: [
    {
      id: {
        type: Number,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      options: [
        {
          id: {
            type: Number,
            required: true,
          },
          value: {
            type: String,
            required: true,
          },
        },
      ],
      answer: {
        type: Number,
        required: true,
      },
    },
  ],
  participants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: [],
    },
  ],
  passingScore: {
    type: Number,
    required: true,
  },
  highestMarks: {
    type: Number,
    required: true,
  },
  isReleased: {
    type: Boolean,
    required: true,
    default: false,
  },

});

const Tests = mongoose.model("Tests", testSchema);

export default Tests;
