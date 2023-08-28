import { getAllUsers } from "../resolvers/user.resolvers"

const resolvers = {
  Query: {
    helloWorld: () => 'Hello world!',
    allProjects: async () => {
      return await getAllUsers()
    }
  }
}

export default resolvers
