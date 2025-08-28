export interface GrogResponse {
    choices: Array<{
        message: {
            content: string;
        };
    }>;
}