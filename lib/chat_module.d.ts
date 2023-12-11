import { AppConfig } from "./config";
import { InitProgressCallback, ChatInterface, ChatOptions, GenerateProgressCallback } from "./types";
/**
 * This is the main interface to the chat module.
 */
export declare class ChatModule implements ChatInterface {
    private logger;
    private pipeline?;
    private initProgressCallback?;
    private interruptSignal;
    setInitProgressCallback(initProgressCallback: InitProgressCallback): void;
    reload(localId: string, chatOpts?: ChatOptions, appConfig?: AppConfig, files?: File[] | FileList): Promise<File[]>;
    generate(input: string, progressCallback?: GenerateProgressCallback, streamInterval?: number): Promise<string>;
    interruptGenerate(): Promise<void>;
    runtimeStatsText(): Promise<string>;
    resetChat(): Promise<void>;
    unload(): Promise<void>;
    /**
     * @returns Whether the generation stopped.
     */
    stopped(): boolean;
    /**
     * Get the current generated response.
     *
     * @returns The current output message.
     */
    getMessage(): string;
    /**
     * Run a prefill step with a given input.
     * @param input The input prompt.
     */
    prefill(input: string): Promise<void>;
    /**
     * Run a decode step to decode the next token.
     */
    decode(): Promise<void>;
    private getPipeline;
    private asyncLoadTokenizer;
}
/**
 * This is the interface to the chat module that connects to the REST API.
 */
export declare class ChatRestModule implements ChatInterface {
    private logger;
    private initProgressCallback?;
    setInitProgressCallback(initProgressCallback: InitProgressCallback): void;
    reload(localId: string, chatOpts?: ChatOptions, appConfig?: AppConfig): Promise<File[]>;
    unload(): Promise<void>;
    interruptGenerate(): Promise<void>;
    generate(input: string, progressCallback?: GenerateProgressCallback, streamInterval?: number): Promise<string>;
    runtimeStatsText(): Promise<string>;
    resetChat(): Promise<void>;
}
export declare function hasModelInCache(localId: string, appConfig?: AppConfig): Promise<boolean>;
//# sourceMappingURL=chat_module.d.ts.map