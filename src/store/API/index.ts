import axios, { AxiosInstance } from "axios";
import { VUE_APP_SERVER } from "@/config";

export const API: AxiosInstance = axios.create({
  baseURL: VUE_APP_SERVER
});
