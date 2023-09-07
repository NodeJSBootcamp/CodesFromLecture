import { Database } from './database'

export type UserInsertion = Database['public']['Tables']['user']['Insert']
export type UserUpdate = Database["public"]["Tables"]["user"]["Update"]
export type User = Database["public"]["Tables"]["user"]["Row"]