import { createClient } from '@supabase/supabase-js'
import { Database } from '../../types/database'
import dotenv from 'dotenv'
dotenv.config()
const supabase = createClient<Database>(process.env.SUPABASE_URL, process.env.SUPABASE_API_KEY)
export default supabase
