import { profile } from "./profile";

export type ProjectLink = {
  kind: "github" | "demo" | "publication";
  label: string;
  /** Empty string means "not configured yet" and renders a placeholder. */
  url: string;
};

export type Project = {
  id: string;
  title: string;
  category: string;
  summary: string;
  tags: string[];
  featured?: boolean;
  status: string;
  overview: string;
  problem: string;
  approach: string[];
  stack: string[];
  /** Only verified results. Empty array renders an honest "no metrics published" note. */
  results: string[];
  note?: string;
  links: ProjectLink[];
};

const l = profile.projectLinks;

export const projects: Project[] = [
  {
    id: "vessel-fuel-ai",
    title: "Vessel Fuel AI",
    category: "Machine Learning / Cloud / Maritime Technology",
    summary:
      "A web-based prediction app that estimates vessel fuel requirements from vessel type, travel distance, duration, and cargo.",
    tags: ["Python", "Streamlit", "BigQuery ML", "Google Sheets"],
    featured: true,
    status: "Working prototype",
    overview:
      "A working prototype that estimates fuel requirements from four inputs: vessel type, travel distance, duration, and cargo. Prediction history is saved to a Google Spreadsheet.",
    problem:
      "Estimate the fuel a vessel needs for a trip from a small set of known inputs, and keep a record of past predictions.",
    approach: [
      "Used model weights obtained from a linear regression model trained in BigQuery ML.",
      "Implemented inference in Python as a formula using the coefficients derived from the trained model.",
      "Built the interface with Streamlit.",
      "Stored prediction history in Google Spreadsheet, using Google Apps Script as the bridge between the app and the sheet.",
    ],
    stack: [
      "Python",
      "Linear regression",
      "BigQuery ML",
      "Streamlit",
      "Google Spreadsheet",
      "Google Apps Script",
    ],
    results: [],
    note:
      "Inference runs in Python using coefficients exported from BigQuery ML. The deployed app does not call BigQuery ML for live predictions.",
    links: [
      { kind: "demo", label: "Live demo", url: l.vesselFuelAi.demo },
      { kind: "github", label: "GitHub repository", url: l.vesselFuelAi.github },
    ],
  },
  {
    id: "vessel-fuel-prediction",
    title: "Vessel Fuel Consumption Prediction",
    category: "Machine Learning / Predictive Analytics",
    summary:
      "A machine learning model that predicts vessel fuel consumption for Pertamina Hulu Kalimantan Timur, with the reported R² improved from 0.89 to 0.96.",
    tags: ["Scikit-learn", "Pandas", "NumPy", "R² 0.96"],
    status: "Project-based, PT Mata Elang Strategic",
    overview:
      "A machine learning model built to predict vessel fuel consumption for Pertamina Hulu Kalimantan Timur, supporting evaluation and decision-making around vessel fuel requirements.",
    problem:
      "Predict vessel fuel consumption to support evaluation and decision-making for vessel fuel requirements.",
    approach: [
      "Cleaned and preprocessed the data with Python, Pandas, and NumPy.",
      "Engineered features and optimized the model with Scikit-learn.",
      "Evaluated performance using MAE, RMSE, and R².",
    ],
    stack: ["Python", "Pandas", "NumPy", "Scikit-learn"],
    results: ["Reported R² score improved from 0.89 to 0.96."],
    links: [{ kind: "github", label: "GitHub repository", url: l.vesselFuelPrediction.github }],
  },
  {
    id: "power-bi-dashboard",
    title: "Daily Activity & Project Tracking Dashboard",
    category: "Data Analytics / Business Intelligence",
    summary:
      "A Power BI dashboard that organizes daily activities and project progress using Power Query and DAX.",
    tags: ["Power BI", "Power Query", "DAX"],
    status: "Dashboard project",
    overview:
      "A Power BI dashboard for organizing and monitoring daily activities and project progress.",
    problem:
      "Keep daily activities and project progress organized and easy to monitor.",
    approach: [
      "Used Power Query to prepare the data.",
      "Used DAX for calculations in the report.",
    ],
    stack: ["Power BI", "Power Query", "DAX"],
    results: [],
    note: "No business metrics or screenshots are published for this project.",
    links: [{ kind: "github", label: "GitHub repository", url: l.powerBiDashboard.github }],
  },
  {
    id: "facial-expression-research",
    title: "Facial Expression Recognition Research",
    category: "Deep Learning / Research",
    summary:
      "Published research at IEEE ICSCC 2024 on geometry augmentation and random oversampling for CNN-based facial expression recognition.",
    tags: ["CNN", "Geometry augmentation", "Random oversampling", "IEEE ICSCC 2024"],
    status: "Published, IEEE ICSCC 2024",
    overview:
      "A research paper analyzing the performance of a CNN model for facial expression recognition when using geometry augmentation and random oversampling.",
    problem:
      "Examine how geometry augmentation and random oversampling affect CNN performance in facial expression recognition.",
    approach: [
      "Applied geometry augmentation and random oversampling to the training data.",
      "Analyzed the resulting performance of the CNN model.",
    ],
    stack: ["Convolutional neural networks", "Geometry augmentation", "Random oversampling"],
    results: ["Published at IEEE ICSCC 2024. See the paper for the reported findings."],
    links: [
      { kind: "publication", label: "Read the paper", url: l.facialExpression.publication || profile.publication.url },
      { kind: "github", label: "GitHub repository", url: l.facialExpression.github },
    ],
  },
];
