module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.31.1). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregatePackage {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar Long

type Mutation {
  createPackage(data: PackageCreateInput!): Package!
  updatePackage(data: PackageUpdateInput!, where: PackageWhereUniqueInput!): Package
  updateManyPackages(data: PackageUpdateManyMutationInput!, where: PackageWhereInput): BatchPayload!
  upsertPackage(where: PackageWhereUniqueInput!, create: PackageCreateInput!, update: PackageUpdateInput!): Package!
  deletePackage(where: PackageWhereUniqueInput!): Package
  deleteManyPackages(where: PackageWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type Package {
  id: ID!
  date: String!
  advice: String!
  picture: String!
  comments: [String!]!
}

type PackageConnection {
  pageInfo: PageInfo!
  edges: [PackageEdge]!
  aggregate: AggregatePackage!
}

input PackageCreatecommentsInput {
  set: [String!]
}

input PackageCreateInput {
  id: ID
  date: String!
  advice: String!
  picture: String!
  comments: PackageCreatecommentsInput
}

type PackageEdge {
  node: Package!
  cursor: String!
}

enum PackageOrderByInput {
  id_ASC
  id_DESC
  date_ASC
  date_DESC
  advice_ASC
  advice_DESC
  picture_ASC
  picture_DESC
}

type PackagePreviousValues {
  id: ID!
  date: String!
  advice: String!
  picture: String!
  comments: [String!]!
}

type PackageSubscriptionPayload {
  mutation: MutationType!
  node: Package
  updatedFields: [String!]
  previousValues: PackagePreviousValues
}

input PackageSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PackageWhereInput
  AND: [PackageSubscriptionWhereInput!]
  OR: [PackageSubscriptionWhereInput!]
  NOT: [PackageSubscriptionWhereInput!]
}

input PackageUpdatecommentsInput {
  set: [String!]
}

input PackageUpdateInput {
  date: String
  advice: String
  picture: String
  comments: PackageUpdatecommentsInput
}

input PackageUpdateManyMutationInput {
  date: String
  advice: String
  picture: String
  comments: PackageUpdatecommentsInput
}

input PackageWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  date: String
  date_not: String
  date_in: [String!]
  date_not_in: [String!]
  date_lt: String
  date_lte: String
  date_gt: String
  date_gte: String
  date_contains: String
  date_not_contains: String
  date_starts_with: String
  date_not_starts_with: String
  date_ends_with: String
  date_not_ends_with: String
  advice: String
  advice_not: String
  advice_in: [String!]
  advice_not_in: [String!]
  advice_lt: String
  advice_lte: String
  advice_gt: String
  advice_gte: String
  advice_contains: String
  advice_not_contains: String
  advice_starts_with: String
  advice_not_starts_with: String
  advice_ends_with: String
  advice_not_ends_with: String
  picture: String
  picture_not: String
  picture_in: [String!]
  picture_not_in: [String!]
  picture_lt: String
  picture_lte: String
  picture_gt: String
  picture_gte: String
  picture_contains: String
  picture_not_contains: String
  picture_starts_with: String
  picture_not_starts_with: String
  picture_ends_with: String
  picture_not_ends_with: String
  AND: [PackageWhereInput!]
  OR: [PackageWhereInput!]
  NOT: [PackageWhereInput!]
}

input PackageWhereUniqueInput {
  id: ID
  date: String
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  package(where: PackageWhereUniqueInput!): Package
  packages(where: PackageWhereInput, orderBy: PackageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Package]!
  packagesConnection(where: PackageWhereInput, orderBy: PackageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PackageConnection!
  node(id: ID!): Node
}

type Subscription {
  package(where: PackageSubscriptionWhereInput): PackageSubscriptionPayload
}
`
      }
    