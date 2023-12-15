/**
 * Conversation template config
 */
export interface ConvTemplateConfig {
    system: string;
    roles: Array<string>;
    seps: Array<string>;
    separator_style: string;
    offset: number;
    stop_str: string;
    add_bos: boolean;
    stop_tokens: Array<number>;
}
/**
 * Config of one chat model
 */
export interface ChatConfig {
    local_id: string;
    model_lib: string;
    tokenizer_files: Array<string>;
    conv_config?: Partial<ConvTemplateConfig>;
    conv_template: string;
    conversation_history?: Array<[string, string]>;
    mean_gen_len: number;
    shift_fill_factor: number;
    repetition_penalty: number;
    top_p: number;
    temperature: number;
}
export interface ModelRecord {
    model_url: string;
    local_id: string;
    required_features?: Array<string>;
}
/**
 * Extra configuration that can be
 * passed to the load
 */
export interface AppConfig {
    model_list: Array<ModelRecord>;
    model_lib_map: Record<string, string>;
    use_cache?: boolean;
}
/**
 * default libmap used in prebuilt
 */
export declare const prebuiltAppConfig: AppConfig;
//# sourceMappingURL=config.d.ts.map