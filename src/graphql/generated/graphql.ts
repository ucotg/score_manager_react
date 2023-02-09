/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  float8: any;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["Int"]>;
  _gt?: InputMaybe<Scalars["Int"]>;
  _gte?: InputMaybe<Scalars["Int"]>;
  _in?: InputMaybe<Array<Scalars["Int"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["Int"]>;
  _lte?: InputMaybe<Scalars["Int"]>;
  _neq?: InputMaybe<Scalars["Int"]>;
  _nin?: InputMaybe<Array<Scalars["Int"]>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["String"]>;
  _gt?: InputMaybe<Scalars["String"]>;
  _gte?: InputMaybe<Scalars["String"]>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars["String"]>;
  _in?: InputMaybe<Array<Scalars["String"]>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars["String"]>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars["String"]>;
  _lt?: InputMaybe<Scalars["String"]>;
  _lte?: InputMaybe<Scalars["String"]>;
  _neq?: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars["String"]>;
  _nin?: InputMaybe<Array<Scalars["String"]>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars["String"]>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars["String"]>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars["String"]>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = "ASC",
  /** descending ordering of the cursor */
  Desc = "DESC",
}

/** Boolean expression to compare columns of type "float8". All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["float8"]>;
  _gt?: InputMaybe<Scalars["float8"]>;
  _gte?: InputMaybe<Scalars["float8"]>;
  _in?: InputMaybe<Array<Scalars["float8"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["float8"]>;
  _lte?: InputMaybe<Scalars["float8"]>;
  _neq?: InputMaybe<Scalars["float8"]>;
  _nin?: InputMaybe<Array<Scalars["float8"]>>;
};

/** columns and relationships of "musics" */
export type Musics = {
  __typename?: "musics";
  bpm: Scalars["String"];
  difficulty: Scalars["String"];
  genre: Scalars["String"];
  level: Scalars["Int"];
  notes: Scalars["Int"];
  title: Scalars["String"];
  version: Scalars["float8"];
};

/** aggregated selection of "musics" */
export type Musics_Aggregate = {
  __typename?: "musics_aggregate";
  aggregate?: Maybe<Musics_Aggregate_Fields>;
  nodes: Array<Musics>;
};

/** aggregate fields of "musics" */
export type Musics_Aggregate_Fields = {
  __typename?: "musics_aggregate_fields";
  avg?: Maybe<Musics_Avg_Fields>;
  count: Scalars["Int"];
  max?: Maybe<Musics_Max_Fields>;
  min?: Maybe<Musics_Min_Fields>;
  stddev?: Maybe<Musics_Stddev_Fields>;
  stddev_pop?: Maybe<Musics_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Musics_Stddev_Samp_Fields>;
  sum?: Maybe<Musics_Sum_Fields>;
  var_pop?: Maybe<Musics_Var_Pop_Fields>;
  var_samp?: Maybe<Musics_Var_Samp_Fields>;
  variance?: Maybe<Musics_Variance_Fields>;
};

/** aggregate fields of "musics" */
export type Musics_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Musics_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate avg on columns */
export type Musics_Avg_Fields = {
  __typename?: "musics_avg_fields";
  level?: Maybe<Scalars["Float"]>;
  notes?: Maybe<Scalars["Float"]>;
  version?: Maybe<Scalars["Float"]>;
};

/** Boolean expression to filter rows from the table "musics". All fields are combined with a logical 'AND'. */
export type Musics_Bool_Exp = {
  _and?: InputMaybe<Array<Musics_Bool_Exp>>;
  _not?: InputMaybe<Musics_Bool_Exp>;
  _or?: InputMaybe<Array<Musics_Bool_Exp>>;
  bpm?: InputMaybe<String_Comparison_Exp>;
  difficulty?: InputMaybe<String_Comparison_Exp>;
  genre?: InputMaybe<String_Comparison_Exp>;
  level?: InputMaybe<Int_Comparison_Exp>;
  notes?: InputMaybe<Int_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  version?: InputMaybe<Float8_Comparison_Exp>;
};

/** unique or primary key constraints on table "musics" */
export enum Musics_Constraint {
  /** unique or primary key constraint on columns "difficulty", "title" */
  MusicsPkey = "musics_pkey",
}

/** input type for incrementing numeric columns in table "musics" */
export type Musics_Inc_Input = {
  level?: InputMaybe<Scalars["Int"]>;
  notes?: InputMaybe<Scalars["Int"]>;
  version?: InputMaybe<Scalars["float8"]>;
};

/** input type for inserting data into table "musics" */
export type Musics_Insert_Input = {
  bpm?: InputMaybe<Scalars["String"]>;
  difficulty?: InputMaybe<Scalars["String"]>;
  genre?: InputMaybe<Scalars["String"]>;
  level?: InputMaybe<Scalars["Int"]>;
  notes?: InputMaybe<Scalars["Int"]>;
  title?: InputMaybe<Scalars["String"]>;
  version?: InputMaybe<Scalars["float8"]>;
};

/** aggregate max on columns */
export type Musics_Max_Fields = {
  __typename?: "musics_max_fields";
  bpm?: Maybe<Scalars["String"]>;
  difficulty?: Maybe<Scalars["String"]>;
  genre?: Maybe<Scalars["String"]>;
  level?: Maybe<Scalars["Int"]>;
  notes?: Maybe<Scalars["Int"]>;
  title?: Maybe<Scalars["String"]>;
  version?: Maybe<Scalars["float8"]>;
};

/** aggregate min on columns */
export type Musics_Min_Fields = {
  __typename?: "musics_min_fields";
  bpm?: Maybe<Scalars["String"]>;
  difficulty?: Maybe<Scalars["String"]>;
  genre?: Maybe<Scalars["String"]>;
  level?: Maybe<Scalars["Int"]>;
  notes?: Maybe<Scalars["Int"]>;
  title?: Maybe<Scalars["String"]>;
  version?: Maybe<Scalars["float8"]>;
};

/** response of any mutation on the table "musics" */
export type Musics_Mutation_Response = {
  __typename?: "musics_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Musics>;
};

/** on_conflict condition type for table "musics" */
export type Musics_On_Conflict = {
  constraint: Musics_Constraint;
  update_columns?: Array<Musics_Update_Column>;
  where?: InputMaybe<Musics_Bool_Exp>;
};

/** Ordering options when selecting data from "musics". */
export type Musics_Order_By = {
  bpm?: InputMaybe<Order_By>;
  difficulty?: InputMaybe<Order_By>;
  genre?: InputMaybe<Order_By>;
  level?: InputMaybe<Order_By>;
  notes?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
};

/** primary key columns input for table: musics */
export type Musics_Pk_Columns_Input = {
  difficulty: Scalars["String"];
  title: Scalars["String"];
};

/** select columns of table "musics" */
export enum Musics_Select_Column {
  /** column name */
  Bpm = "bpm",
  /** column name */
  Difficulty = "difficulty",
  /** column name */
  Genre = "genre",
  /** column name */
  Level = "level",
  /** column name */
  Notes = "notes",
  /** column name */
  Title = "title",
  /** column name */
  Version = "version",
}

/** input type for updating data in table "musics" */
export type Musics_Set_Input = {
  bpm?: InputMaybe<Scalars["String"]>;
  difficulty?: InputMaybe<Scalars["String"]>;
  genre?: InputMaybe<Scalars["String"]>;
  level?: InputMaybe<Scalars["Int"]>;
  notes?: InputMaybe<Scalars["Int"]>;
  title?: InputMaybe<Scalars["String"]>;
  version?: InputMaybe<Scalars["float8"]>;
};

/** aggregate stddev on columns */
export type Musics_Stddev_Fields = {
  __typename?: "musics_stddev_fields";
  level?: Maybe<Scalars["Float"]>;
  notes?: Maybe<Scalars["Float"]>;
  version?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_pop on columns */
export type Musics_Stddev_Pop_Fields = {
  __typename?: "musics_stddev_pop_fields";
  level?: Maybe<Scalars["Float"]>;
  notes?: Maybe<Scalars["Float"]>;
  version?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_samp on columns */
export type Musics_Stddev_Samp_Fields = {
  __typename?: "musics_stddev_samp_fields";
  level?: Maybe<Scalars["Float"]>;
  notes?: Maybe<Scalars["Float"]>;
  version?: Maybe<Scalars["Float"]>;
};

/** Streaming cursor of the table "musics" */
export type Musics_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Musics_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Musics_Stream_Cursor_Value_Input = {
  bpm?: InputMaybe<Scalars["String"]>;
  difficulty?: InputMaybe<Scalars["String"]>;
  genre?: InputMaybe<Scalars["String"]>;
  level?: InputMaybe<Scalars["Int"]>;
  notes?: InputMaybe<Scalars["Int"]>;
  title?: InputMaybe<Scalars["String"]>;
  version?: InputMaybe<Scalars["float8"]>;
};

/** aggregate sum on columns */
export type Musics_Sum_Fields = {
  __typename?: "musics_sum_fields";
  level?: Maybe<Scalars["Int"]>;
  notes?: Maybe<Scalars["Int"]>;
  version?: Maybe<Scalars["float8"]>;
};

/** update columns of table "musics" */
export enum Musics_Update_Column {
  /** column name */
  Bpm = "bpm",
  /** column name */
  Difficulty = "difficulty",
  /** column name */
  Genre = "genre",
  /** column name */
  Level = "level",
  /** column name */
  Notes = "notes",
  /** column name */
  Title = "title",
  /** column name */
  Version = "version",
}

export type Musics_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Musics_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Musics_Set_Input>;
  /** filter the rows which have to be updated */
  where: Musics_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Musics_Var_Pop_Fields = {
  __typename?: "musics_var_pop_fields";
  level?: Maybe<Scalars["Float"]>;
  notes?: Maybe<Scalars["Float"]>;
  version?: Maybe<Scalars["Float"]>;
};

/** aggregate var_samp on columns */
export type Musics_Var_Samp_Fields = {
  __typename?: "musics_var_samp_fields";
  level?: Maybe<Scalars["Float"]>;
  notes?: Maybe<Scalars["Float"]>;
  version?: Maybe<Scalars["Float"]>;
};

/** aggregate variance on columns */
export type Musics_Variance_Fields = {
  __typename?: "musics_variance_fields";
  level?: Maybe<Scalars["Float"]>;
  notes?: Maybe<Scalars["Float"]>;
  version?: Maybe<Scalars["Float"]>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: "mutation_root";
  /** delete data from the table: "musics" */
  delete_musics?: Maybe<Musics_Mutation_Response>;
  /** delete single row from the table: "musics" */
  delete_musics_by_pk?: Maybe<Musics>;
  /** insert data into the table: "musics" */
  insert_musics?: Maybe<Musics_Mutation_Response>;
  /** insert a single row into the table: "musics" */
  insert_musics_one?: Maybe<Musics>;
  /** update data of the table: "musics" */
  update_musics?: Maybe<Musics_Mutation_Response>;
  /** update single row of the table: "musics" */
  update_musics_by_pk?: Maybe<Musics>;
  /** update multiples rows of table: "musics" */
  update_musics_many?: Maybe<Array<Maybe<Musics_Mutation_Response>>>;
};

/** mutation root */
export type Mutation_RootDelete_MusicsArgs = {
  where: Musics_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Musics_By_PkArgs = {
  difficulty: Scalars["String"];
  title: Scalars["String"];
};

/** mutation root */
export type Mutation_RootInsert_MusicsArgs = {
  objects: Array<Musics_Insert_Input>;
  on_conflict?: InputMaybe<Musics_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Musics_OneArgs = {
  object: Musics_Insert_Input;
  on_conflict?: InputMaybe<Musics_On_Conflict>;
};

/** mutation root */
export type Mutation_RootUpdate_MusicsArgs = {
  _inc?: InputMaybe<Musics_Inc_Input>;
  _set?: InputMaybe<Musics_Set_Input>;
  where: Musics_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Musics_By_PkArgs = {
  _inc?: InputMaybe<Musics_Inc_Input>;
  _set?: InputMaybe<Musics_Set_Input>;
  pk_columns: Musics_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Musics_ManyArgs = {
  updates: Array<Musics_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = "asc",
  /** in ascending order, nulls first */
  AscNullsFirst = "asc_nulls_first",
  /** in ascending order, nulls last */
  AscNullsLast = "asc_nulls_last",
  /** in descending order, nulls first */
  Desc = "desc",
  /** in descending order, nulls first */
  DescNullsFirst = "desc_nulls_first",
  /** in descending order, nulls last */
  DescNullsLast = "desc_nulls_last",
}

export type Query_Root = {
  __typename?: "query_root";
  /** fetch data from the table: "musics" */
  musics: Array<Musics>;
  /** fetch aggregated fields from the table: "musics" */
  musics_aggregate: Musics_Aggregate;
  /** fetch data from the table: "musics" using primary key columns */
  musics_by_pk?: Maybe<Musics>;
};

export type Query_RootMusicsArgs = {
  distinct_on?: InputMaybe<Array<Musics_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Musics_Order_By>>;
  where?: InputMaybe<Musics_Bool_Exp>;
};

export type Query_RootMusics_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Musics_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Musics_Order_By>>;
  where?: InputMaybe<Musics_Bool_Exp>;
};

export type Query_RootMusics_By_PkArgs = {
  difficulty: Scalars["String"];
  title: Scalars["String"];
};

export type Subscription_Root = {
  __typename?: "subscription_root";
  /** fetch data from the table: "musics" */
  musics: Array<Musics>;
  /** fetch aggregated fields from the table: "musics" */
  musics_aggregate: Musics_Aggregate;
  /** fetch data from the table: "musics" using primary key columns */
  musics_by_pk?: Maybe<Musics>;
  /** fetch data from the table in a streaming manner: "musics" */
  musics_stream: Array<Musics>;
};

export type Subscription_RootMusicsArgs = {
  distinct_on?: InputMaybe<Array<Musics_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Musics_Order_By>>;
  where?: InputMaybe<Musics_Bool_Exp>;
};

export type Subscription_RootMusics_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Musics_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Musics_Order_By>>;
  where?: InputMaybe<Musics_Bool_Exp>;
};

export type Subscription_RootMusics_By_PkArgs = {
  difficulty: Scalars["String"];
  title: Scalars["String"];
};

export type Subscription_RootMusics_StreamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<Musics_Stream_Cursor_Input>>;
  where?: InputMaybe<Musics_Bool_Exp>;
};

export type ChordQueryVariables = Exact<{ [key: string]: never }>;

export type ChordQuery = {
  __typename?: "query_root";
  musics: Array<{
    __typename?: "musics";
    genre: string;
    bpm: string;
    difficulty: string;
    level: number;
    notes: number;
    title: string;
  }>;
};

export type NotesQueryVariables = Exact<{ [key: string]: never }>;

export type NotesQuery = {
  __typename?: "query_root";
  musics: Array<{
    __typename?: "musics";
    genre: string;
    bpm: string;
    difficulty: string;
    level: number;
    notes: number;
    title: string;
  }>;
};

export const ChordDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "Chord" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "musics" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "genre" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_eq" },
                            value: {
                              kind: "StringValue",
                              value: "CHORD",
                              block: false,
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "genre" } },
                { kind: "Field", name: { kind: "Name", value: "bpm" } },
                { kind: "Field", name: { kind: "Name", value: "difficulty" } },
                { kind: "Field", name: { kind: "Name", value: "level" } },
                { kind: "Field", name: { kind: "Name", value: "notes" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ChordQuery, ChordQueryVariables>;
export const NotesDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "Notes" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "musics" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "genre" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_eq" },
                            value: {
                              kind: "StringValue",
                              value: "NOTES",
                              block: false,
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "genre" } },
                { kind: "Field", name: { kind: "Name", value: "bpm" } },
                { kind: "Field", name: { kind: "Name", value: "difficulty" } },
                { kind: "Field", name: { kind: "Name", value: "level" } },
                { kind: "Field", name: { kind: "Name", value: "notes" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<NotesQuery, NotesQueryVariables>;
