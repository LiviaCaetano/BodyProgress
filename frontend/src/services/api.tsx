import axios from "axios";
import { Measure } from "../models/measures";

export const api = axios.create({
  baseURL: "http://localhost:8080/api",
});

export const createMeasure = (data: Measure.Register) =>
  api.post("/measures", data);
