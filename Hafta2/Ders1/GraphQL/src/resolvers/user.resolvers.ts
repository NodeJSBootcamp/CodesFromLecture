import { log } from "console"
import supabase from "../database/supabase.client"

export const getAllUsers = async() =>{ 
    let { data: users, error } = await supabase
        .from('user')
        .select('*')
    log(users)
    
    const userEdges = users.map(user => ({
        cursor: user.id,
        node: user
    }));
    
    const pageInfo = {
        endCursor: userEdges.length > 0 ? userEdges[userEdges.length - 1].cursor : null,
        hasNextPage: false, // Update this based on your pagination logic
        hasPreviousPage: false, // Update this based on your pagination logic
        startCursor: userEdges.length > 0 ? userEdges[0].cursor : null
    };
    
    return {
        edges: userEdges,
        pageInfo: pageInfo
    };
}