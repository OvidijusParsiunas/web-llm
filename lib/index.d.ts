export { ModelRecord, AppConfig } from "./config";
export { InitProgressCallback, InitProgressReport, ChatOptions, ChatInterface } from "./types";
export { ChatModule, ChatRestModule, hasModelInCache } from "./chat_module";
export { ChatWorkerHandler, ChatWorkerClient } from "./web_worker";
declare global {
    interface Window {
        webLLM: any;
    }
}
//# sourceMappingURL=index.d.ts.map