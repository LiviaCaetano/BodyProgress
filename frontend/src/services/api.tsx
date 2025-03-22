import axios from "axios";
import { Authentication } from "../models/authentication";
import { Measure } from "../models/measures";
import { Person } from "../models/person";

export const api = axios.create({
  baseURL: "http://bp-backend:8080/",
});

//Person
export const createAccount = (data: Person.Register) => api.post("/api/person", data);
export const loginRequest = (data: Authentication.Login) => api.post("/auth/login", data);
export const getPersonById = (id: number) => api.get(`/api/person/${id}`);
export const updatePersonById = (id: number, data: Person.Store) => api.put(`/api/person/${id}`, data);

//Measure
export const createMeasure = (data: Measure.Register) =>
  api.post("/api/measures", data);
export const getMeasures = (id: number) => api.get(`/api/person/${id}`);
export const getMeasureById = () => api.get(``);
export const excludeMeasureById = (id: number) => api.delete(`/api/measures/${id}`);
