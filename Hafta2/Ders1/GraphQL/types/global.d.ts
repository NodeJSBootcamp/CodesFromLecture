export {}
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SUPABASE_URL: string
      SUPABASE_API_KEY: string
      SERVER_PORT: number
      NODE_ENV: 'development' | 'production'
      PORT: number
    }
  }
}
