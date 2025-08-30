import scikitlearn from "../app/assets/svg/skills/scikit-learn.svg";
// ✅ All your existing imports (keep them as is)

import adobeXd from "../app/assets/svg/skills/adobe-xd.svg";
import adobeaudition from "../app/assets/svg/skills/adobeaudition.svg";
import python from "../app/assets/svg/skills/python.svg";
import tensorflow from "../app/assets/svg/skills/tensorflow.svg";
import pandas from "../app/assets/svg/skills/pandas.svg";
import pytorch from "../app/assets/svg/skills/pytorch.svg";
import opencv from "../app/assets/svg/skills/opencv.svg";
import numpy from "../app/assets/svg/skills/numpy.svg";
import git from "../app/assets/svg/skills/git.svg";
import sqlite from "../app/assets/svg/skills/sqlite.svg";
import sqlalchemy from "../app/assets/svg/skills/sqlalchemy.svg";
import mysql from "../app/assets/svg/skills/mysql.svg";
import postgresql from "../app/assets/svg/skills/postgresql.svg";
import memsql from "../app/assets/svg/skills/memsql.svg";
import fallback from "../app/assets/svg/skills/fallback.svg";

export const skillsImage = (skill) => {
  if (!skill || typeof skill !== "string") return { src: fallback };

  const skillID = skill.toLowerCase().trim();

  switch (skillID) {
    case "gcp":
      return gcp;
    case "html":
      return html;
    case "photoshop":
      return photoshop;
    case "docker":
      return docker;
    case "illustrator":
      return illustrator;
    case "adobe xd":
      return adobeXd;
    case "after effects":
      return afterEffects;
    case "css":
      return css;
    case "angular":
      return angular;
    case "javascript":
      return javascript;
    case "next js":
      return nextJS;
    case "nuxt js":
      return nuxtJS;
    case "react":
      return react;
    case "svelte":
      return svelte;
    case "typescript":
      return typescript;
    case "vue":
      return vue;
    case "bootstrap":
      return bootstrap;
    case "bulma":
      return bulma;
    case "capacitorjs":
      return capacitorjs;
    case "coffeescript":
      return coffeescript;
    case "memsql":
      return memsql;
    case "mongodb":
      return mongoDB;
    case "mysql":
      return mysql;
    case "postgresql":
      return postgresql;
    case "tailwind":
      return tailwind;
    case "vitejs":
      return vitejs;
    case "vuetifyjs":
      return vuetifyjs;
    case "c":
      return c;
    case "c++":
      return cplusplus;
    case "c#":
      return csharp;
    case "dart":
      return dart;
    case "go":
      return go;
    case "java":
      return java;
    case "kotlin":
      return kotlin;
    case "julia":
      return julia;
    case "matlab":
      return matlab;
    case "php":
      return php;
    case "prisma":
      return prisma;
    case "python":
      return python;
    case "ruby":
      return ruby;
    case "swift":
      return swift;
    case "adobe audition":
      return adobeaudition;
    case "aws":
      return aws;
    case "deno":
      return deno;
    case "django":
      return django;
    case "firebase":
      return firebase;
    case "gimp":
      return gimp;
    case "git":
      return git;
    case "graphql":
      return graphql;
    case "lightroom":
      return lightroom;
    case "materialui":
      return materialui;
    case "nginx":
      return nginx;
    case "numpy":
      return numpy;
    case "opencv":
      return opencv;
    case "premiere pro":
      return premierepro;
    case "pytorch":
      return pytorch;
    case "selenium":
      return selenium;
    case "strapi":
      return strapi;
    case "tensorflow":
      return tensorflow;
    case "webix":
      return webix;
    case "wordpress":
      return wordpress;
    case "azure":
      return azure;
    case "blender":
      return blender;
    case "fastify":
      return fastify;
    case "figma":
      return figma;
    case "flutter":
      return flutter;
    case "haxe":
      return haxe;
    case "ionic":
      return ionic;
    case "markdown":
      return markdown;
    case "microsoft office":
      return microsoftoffice;
    case "picsart":
      return picsart;
    case "sketch":
      return sketch;
    case "unity":
      return unity;
    case "wolframalpha":
      return wolframalpha;
    case "canva":
      return canva;
    case "pandas":
      return pandas;
    case "sklearn":
    case "scikit-learn":
      return scikitlearn;
    case ".net":
      return dotnet;
    case ".net core":
      return dotnetcore;
    case "kubernetes":
      return kubernetes;
    case "linux":
      return linux;
    case "sqlalchemy":
      return sqlalchemy;
    case "fastapi":
      return fastapi;
    case "sqlite":
      return sqlite;
    case "machine learning":
      return scikitlearn;
    case "deep learning":
      return tensorflow;
    case "computer vision":
      return opencv;
    case "data analysis":
      return pandas;
    case "artificial intelligence":
    case "generative ai":
      return tensorflow;
    case "neural networks":
      return pytorch;
    case "natural language processing":
    case "nlp":
      return pytorch;
    case "data science":
      return pandas;
    case "matplotlib":
      return python;
    case "keras":
      return tensorflow;
    default:
      return fallback; // ✅ Always return fallback image for unknown skills
  }
};
