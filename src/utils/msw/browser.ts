import { setupWorker } from "msw/browser";
import handlers from "./handlers/index";
import signupHandlers from "./handlers/signupHandlers";

export const worker = setupWorker(...handlers, ...signupHandlers);
