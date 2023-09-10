export {} 
declare global {
    namespace NodeJS {
        interface ProcessEnv {
            MONGODB_URL:string
            JWT_SECRET_KEY: string
        }
    }
}
