import handlers from "@/utils/msw/handlers";
import { setupWorker } from "msw/browser";


export const worker = setupWorker(...handlers); 