export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      user: {
        Row: {
          created_at: string
          id: string
          isAdmin: boolean | null
          isDeleted: boolean | null
          password: string | null
          username: string
        }
        Insert: {
          password: string 
          username: string
        }
        Update: {
          created_at?: string
          id?: string
          isAdmin?: boolean | null
          isDeleted?: boolean | null
          password?: string | null
          username?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
