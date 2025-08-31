import python from "../app/assets/svg/skills/python.svg";
import tensorflow from "../app/assets/svg/skills/tensorflow.svg";
import pandas from "../app/assets/svg/skills/pandas.svg";
import pytorch from "../app/assets/svg/skills/pytorch.svg";
import scikitlearn from "../app/assets/svg/skills/scikit-learn.svg";
import opencv from "../app/assets/svg/skills/opencv.svg";
import numpy from "../app/assets/svg/skills/numpy.svg";
import git from "../app/assets/svg/skills/git.svg";
import fallback from "../app/assets/svg/skills/fallback.svg";

export const skillsImage = (skill) => {
  if (!skill || typeof skill !== "string") return { src: fallback };

  const skillID = skill.toLowerCase().trim();

  switch (skillID) {
    case "python":
      return python;
    case "tensorflow":
      return tensorflow;
    case "pytorch":
      return pytorch;
    case "scikit-learn":
    case "sklearn":
    case "machine learning":
      return scikitlearn;
    case "deep learning":
      return tensorflow;
    case "neural networks":
      return pytorch;
    case "computer vision":
      return opencv;
    case "natural language processing":
    case "nlp":
      return pytorch;
    case "data science":
    case "data analysis":
      return pandas;
    case "pandas":
      return pandas;
    case "numpy":
      return numpy;
    case "matplotlib":
      return python;
    case "keras":
      return tensorflow;
    case "generative ai":
      return tensorflow;
    case "git":
      return git;
    case "sql":
      return fallback;
    case "opencv":
      return opencv;
    case "jupyter":
      return fallback;
    default:
      return fallback;
  }
};
