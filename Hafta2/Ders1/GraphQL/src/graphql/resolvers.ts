import { login, register } from "../controller/user.controller"
import { getAllUsers } from "../resolvers/user.resolvers"

const resolvers = {
  Query: {
    helloWorld: () => 'Hello world!',
    userCollection: async () => {
      return await getAllUsers()
    }
  },
  Mutation: {
    register: async(username:string,password:string) =>{
      return await register(username,password)
    },
    login: async(username:string,password:string) =>{
      return await login(username,password)
    }
  }
}

export default resolvers
