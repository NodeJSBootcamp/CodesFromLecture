import { MercuriusContext } from "mercurius";
import * as userController from "../controller/user.controller"
import { getAllUsers } from "../resolvers/user.resolvers"

const resolvers = {
  Query: {
    helloWorld: () => 'Hello world!',
    userCollection: async () => {
      return await getAllUsers()
    }
  },
  Mutation: {
    register: async(
      _: unknown,
      { username, password },
      context: MercuriusContext
    ) =>{
      return await userController.register(username,password)
    },
    login: async(
      _: unknown,
      { username, password },
      context: MercuriusContext
    ) =>{
      return await userController.login(username,password)
    }
  }
}

export default resolvers
