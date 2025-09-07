import PythonIcon from "../app/assets/svg/skills/python.svg";
import TensorFlowIcon from "../app/assets/svg/skills/tensorflow.svg";
import PandasIcon from "../app/assets/svg/skills/pandas.svg";
import PyTorchIcon from "../app/assets/svg/skills/pytorch.svg";
import ScikitLearnIcon from "../app/assets/svg/skills/scikit-learn.svg";
import OpenCVIcon from "../app/assets/svg/skills/opencv.svg";
import NumPyIcon from "../app/assets/svg/skills/numpy.svg";
import GitIcon from "../app/assets/svg/skills/git.svg";
import FallbackIcon from "../app/assets/svg/skills/fallback.svg";

export const skillsImage = (skill) => {
  if (!skill || typeof skill !== "string") return FallbackIcon;

  const skillID = skill.toLowerCase().trim();

  switch (skillID) {
    case "python":
      return PythonIcon;
    case "tensorflow":
      return TensorFlowIcon;
    case "pytorch":
      return PyTorchIcon;
    case "scikit-learn":
    case "sklearn":
    case "machine learning":
      return ScikitLearnIcon;
    case "deep learning":
      return TensorFlowIcon;
    case "neural networks":
      return PyTorchIcon;
    case "computer vision":
      return OpenCVIcon;
    case "natural language processing":
    case "nlp":
      return PyTorchIcon;
    case "data science":
    case "data analysis":
      return PandasIcon;
    case "pandas":
      return PandasIcon;
    case "numpy":
      return NumPyIcon;
    case "matplotlib":
      return PythonIcon;
    case "keras":
      return TensorFlowIcon;
    case "generative ai":
      return TensorFlowIcon;
    case "git":
      return GitIcon;
    case "sql":
      return FallbackIcon;
    case "opencv":
      return OpenCVIcon;
    case "jupyter":
      return FallbackIcon;
    default:
      return FallbackIcon;
  }
};
