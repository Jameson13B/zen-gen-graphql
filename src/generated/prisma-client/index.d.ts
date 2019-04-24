// Code generated by Prisma (prisma@1.31.1). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  package: (where?: PackageWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  package: (where: PackageWhereUniqueInput) => PackagePromise;
  packages: (args?: {
    where?: PackageWhereInput;
    orderBy?: PackageOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Package>;
  packagesConnection: (args?: {
    where?: PackageWhereInput;
    orderBy?: PackageOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => PackageConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createPackage: (data: PackageCreateInput) => PackagePromise;
  updatePackage: (args: {
    data: PackageUpdateInput;
    where: PackageWhereUniqueInput;
  }) => PackagePromise;
  updateManyPackages: (args: {
    data: PackageUpdateManyMutationInput;
    where?: PackageWhereInput;
  }) => BatchPayloadPromise;
  upsertPackage: (args: {
    where: PackageWhereUniqueInput;
    create: PackageCreateInput;
    update: PackageUpdateInput;
  }) => PackagePromise;
  deletePackage: (where: PackageWhereUniqueInput) => PackagePromise;
  deleteManyPackages: (where?: PackageWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  package: (
    where?: PackageSubscriptionWhereInput
  ) => PackageSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type PackageOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "date_ASC"
  | "date_DESC"
  | "advice_ASC"
  | "advice_DESC"
  | "picture_ASC"
  | "picture_DESC";

export type PackageWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface PackageCreateInput {
  id?: ID_Input;
  date: Float;
  advice: String;
  picture: String;
  comments?: PackageCreatecommentsInput;
}

export interface PackageCreatecommentsInput {
  set?: String[] | String;
}

export interface PackageUpdateInput {
  date?: Float;
  advice?: String;
  picture?: String;
  comments?: PackageUpdatecommentsInput;
}

export interface PackageUpdatecommentsInput {
  set?: String[] | String;
}

export interface PackageSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: PackageWhereInput;
  AND?: PackageSubscriptionWhereInput[] | PackageSubscriptionWhereInput;
  OR?: PackageSubscriptionWhereInput[] | PackageSubscriptionWhereInput;
  NOT?: PackageSubscriptionWhereInput[] | PackageSubscriptionWhereInput;
}

export interface PackageWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  date?: Float;
  date_not?: Float;
  date_in?: Float[] | Float;
  date_not_in?: Float[] | Float;
  date_lt?: Float;
  date_lte?: Float;
  date_gt?: Float;
  date_gte?: Float;
  advice?: String;
  advice_not?: String;
  advice_in?: String[] | String;
  advice_not_in?: String[] | String;
  advice_lt?: String;
  advice_lte?: String;
  advice_gt?: String;
  advice_gte?: String;
  advice_contains?: String;
  advice_not_contains?: String;
  advice_starts_with?: String;
  advice_not_starts_with?: String;
  advice_ends_with?: String;
  advice_not_ends_with?: String;
  picture?: String;
  picture_not?: String;
  picture_in?: String[] | String;
  picture_not_in?: String[] | String;
  picture_lt?: String;
  picture_lte?: String;
  picture_gt?: String;
  picture_gte?: String;
  picture_contains?: String;
  picture_not_contains?: String;
  picture_starts_with?: String;
  picture_not_starts_with?: String;
  picture_ends_with?: String;
  picture_not_ends_with?: String;
  AND?: PackageWhereInput[] | PackageWhereInput;
  OR?: PackageWhereInput[] | PackageWhereInput;
  NOT?: PackageWhereInput[] | PackageWhereInput;
}

export interface PackageUpdateManyMutationInput {
  date?: Float;
  advice?: String;
  picture?: String;
  comments?: PackageUpdatecommentsInput;
}

export interface NodeNode {
  id: ID_Output;
}

export interface AggregatePackage {
  count: Int;
}

export interface AggregatePackagePromise
  extends Promise<AggregatePackage>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregatePackageSubscription
  extends Promise<AsyncIterator<AggregatePackage>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface PackageEdge {
  node: Package;
  cursor: String;
}

export interface PackageEdgePromise extends Promise<PackageEdge>, Fragmentable {
  node: <T = PackagePromise>() => T;
  cursor: () => Promise<String>;
}

export interface PackageEdgeSubscription
  extends Promise<AsyncIterator<PackageEdge>>,
    Fragmentable {
  node: <T = PackageSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface Package {
  id: ID_Output;
  date: Float;
  advice: String;
  picture: String;
  comments: String[];
}

export interface PackagePromise extends Promise<Package>, Fragmentable {
  id: () => Promise<ID_Output>;
  date: () => Promise<Float>;
  advice: () => Promise<String>;
  picture: () => Promise<String>;
  comments: () => Promise<String[]>;
}

export interface PackageSubscription
  extends Promise<AsyncIterator<Package>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  date: () => Promise<AsyncIterator<Float>>;
  advice: () => Promise<AsyncIterator<String>>;
  picture: () => Promise<AsyncIterator<String>>;
  comments: () => Promise<AsyncIterator<String[]>>;
}

export interface PackageConnection {
  pageInfo: PageInfo;
  edges: PackageEdge[];
}

export interface PackageConnectionPromise
  extends Promise<PackageConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<PackageEdge>>() => T;
  aggregate: <T = AggregatePackagePromise>() => T;
}

export interface PackageConnectionSubscription
  extends Promise<AsyncIterator<PackageConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<PackageEdgeSubscription>>>() => T;
  aggregate: <T = AggregatePackageSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface PackageSubscriptionPayload {
  mutation: MutationType;
  node: Package;
  updatedFields: String[];
  previousValues: PackagePreviousValues;
}

export interface PackageSubscriptionPayloadPromise
  extends Promise<PackageSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = PackagePromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = PackagePreviousValuesPromise>() => T;
}

export interface PackageSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<PackageSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = PackageSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = PackagePreviousValuesSubscription>() => T;
}

export interface PackagePreviousValues {
  id: ID_Output;
  date: Float;
  advice: String;
  picture: String;
  comments: String[];
}

export interface PackagePreviousValuesPromise
  extends Promise<PackagePreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  date: () => Promise<Float>;
  advice: () => Promise<String>;
  picture: () => Promise<String>;
  comments: () => Promise<String[]>;
}

export interface PackagePreviousValuesSubscription
  extends Promise<AsyncIterator<PackagePreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  date: () => Promise<AsyncIterator<Float>>;
  advice: () => Promise<AsyncIterator<String>>;
  picture: () => Promise<AsyncIterator<String>>;
  comments: () => Promise<AsyncIterator<String[]>>;
}

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). 
*/
export type Float = number;

export type Long = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Package",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
