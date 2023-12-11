import { AppConfig } from "./config";
import { ChatInterface, ChatOptions, GenerateProgressCallback, InitProgressCallback, InitProgressReport } from "./types";
interface ReloadParams {
    localIdOrUrl: string;
    chatOpts?: ChatOptions;
    appConfig?: AppConfig;
}
interface GenerateParams {
    input: string;
    streamInterval?: number;
}
interface GenerateProgressCallbackParams {
    step: number;
    currentMessage: string;
}
type MessageContent = GenerateProgressCallbackParams | ReloadParams | GenerateParams | InitProgressReport | string | null;
/**
 * Worker handler that can be used in a WebWorker
 *
 * @example
 *
 * // setup a chat worker handler that routes
 * // requests to the chat
 * const chat = new ChatModule();
 * cont handler = new ChatWorkerHandler(chat);
 * onmessage = handler.onmessage;
 */
export declare class ChatWorkerHandler {
    private chat;
    constructor(chat: ChatInterface);
    handleTask<T extends MessageContent>(uuid: string, task: () => Promise<T>): Promise<void>;
    onmessage(event: MessageEvent): void;
}
interface ChatWorker {
    onmessage: any;
    postMessage: (message: any) => void;
}
/**
 * A client of chat worker that exposes the chat interface
 *
 * @example
 *
 * const chat = new webllm.ChatWorkerClient(new Worker(
 *   new URL('./worker.ts', import.meta.url),
 *   {type: 'module'}
 * ));
 */
export declare class ChatWorkerClient implements ChatInterface {
    worker: ChatWorker;
    private initProgressCallback?;
    private generateCallbackRegistry;
    private pendingPromise;
    constructor(worker: any);
    setInitProgressCallback(initProgressCallback: InitProgressCallback): void;
    private getPromise;
    reload(localIdOrUrl: string, chatOpts?: ChatOptions, appConfig?: AppConfig): Promise<void>;
    generate(input: string, progressCallback?: GenerateProgressCallback, streamInterval?: number): Promise<string>;
    runtimeStatsText(): Promise<string>;
    interruptGenerate(): void;
    unload(): Promise<void>;
    resetChat(): Promise<void>;
    onmessage(event: any): void;
}
export {};
//# sourceMappingURL=web_worker.d.ts.map