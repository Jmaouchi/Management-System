// get the projects data and the clients data 
const { projects , clients} = require('../sampleData')

const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLSchema, GraphQLList} = require('graphql')

// project Types 
const ProjectType = new GraphQLObjectType ({
  name: 'Project',
  fields:() => ({
    id:{type: GraphQLID},
    name: {type: GraphQLString},
    description: {type: GraphQLString},
    status: {type: GraphQLString},

  })
})


// Clients Types 
const ClientType = new GraphQLObjectType ({
  name: 'Client',
  fields:() => ({
    id:{type: GraphQLID},
    name: {type: GraphQLString},
    email: {type: GraphQLString},
    phone: {type: GraphQLString},

  })
})

// set the query to get the data back
const RootQuery = new GraphQLObjectType ({
  name : "RootQueryType",
  fields: {
    // first query
    clients: {
      type: new GraphQLList(ClientType),
      resolve(parent, args){
        return clients;
      }
    },
    // second query 
    client: {
      type: ClientType,
      args:{ id : {type: GraphQLID}},
      resolve(parent , args){
          return clients.find(client => client.id === args.id);
      }
    },

    projects: {
      type: new GraphQLList(ProjectType),
      resolve(parent, args){
        return projects;
      }
    },
    // second query 
    project: {
      type: ProjectType,
      args:{ id : {type: GraphQLID}},
      resolve(parent , args){
          return projects.find(project => project.id === args.id);
      }
    },

  }
})


module.exports = new GraphQLSchema({
  query: RootQuery,
})