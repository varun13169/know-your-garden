import { v4 as uuid } from "uuid";

const quizeQuestions = {
  questions: [
    {
      _id: uuid(),
      question: "Quest 1",
      options: [
        { _id: "1", option: "Option 1" },
        { _id: "2", option: "Option 2" },
        { _id: "3", option: "Option 3" },
        { _id: "4", option: "Option 4" },
      ],
      correctAnswerId: "1",
    },
    {
      _id: uuid(),
      question: "Quest 2",
      options: [
        { _id: "1", option: "Option 1" },
        { _id: "2", option: "Option 2" },
        { _id: "3", option: "Option 3" },
        { _id: "4", option: "Option 4" },
      ],
      correctAnswerId: "2",
    },
    {
      _id: uuid(),
      question: "Quest 3",
      options: [
        { _id: "1", option: "Option 1" },
        { _id: "2", option: "Option 2" },
        { _id: "3", option: "Option 3" },
        { _id: "4", option: "Option 4" },
      ],
      correctAnswerId: "3",
    },
    {
      _id: uuid(),
      question: "Quest 4",
      options: [
        { _id: "1", option: "Option 1" },
        { _id: "2", option: "Option 2" },
        { _id: "3", option: "Option 3" },
        { _id: "4", option: "Option 4" },
      ],
      correctAnswerId: "5",
    },
  ],
};

export { quizeQuestions };
