export interface IEnv {
    PORT: number;
    NODE_ENV: "development" | "production" | "test";
    
    ORIGIN: string;
}