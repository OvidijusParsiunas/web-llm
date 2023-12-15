export {
  ModelRecord, AppConfig
} from "./config";


export {
  InitProgressCallback,
  InitProgressReport,
  ChatOptions,
  ChatInterface
} from "./types";

export {
  ChatModule,
  ChatRestModule, hasModelInCache
} from "./chat_module";

export {
  ChatWorkerHandler,
  ChatWorkerClient
} from "./web_worker";

// // uncomment to build a cdn bundle for javascript

// declare global {
//   interface Window {
//     webLLM: any
//   }
// }

// // Add the module to the window when the script is executed (only works in vanilla js sript import)

// import { ChatWorkerClient } from "./web_worker";
// import { ChatModule } from "./chat_module";

// function addToWindow() {
//   window.webLLM = {ChatModule, ChatWorkerClient}
// }

// addToWindow();