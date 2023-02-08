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

/** columns and relationships of "music" */
export type Music = {
  __typename?: "music";
  bpm: Scalars["String"];
  difficulty: Scalars["String"];
  genre: Scalars["String"];
  level: Scalars["Int"];
  notes: Scalars["Int"];
  title: Scalars["String"];
};

/** aggregated selection of "music" */
export type Music_Aggregate = {
  __typename?: "music_aggregate";
  aggregate?: Maybe<Music_Aggregate_Fields>;
  nodes: Array<Music>;
};

/** aggregate fields of "music" */
export type Music_Aggregate_Fields = {
  __typename?: "music_aggregate_fields";
  avg?: Maybe<Music_Avg_Fields>;
  count: Scalars["Int"];
  max?: Maybe<Music_Max_Fields>;
  min?: Maybe<Music_Min_Fields>;
  stddev?: Maybe<Music_Stddev_Fields>;
  stddev_pop?: Maybe<Music_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Music_Stddev_Samp_Fields>;
  sum?: Maybe<Music_Sum_Fields>;
  var_pop?: Maybe<Music_Var_Pop_Fields>;
  var_samp?: Maybe<Music_Var_Samp_Fields>;
  variance?: Maybe<Music_Variance_Fields>;
};

/** aggregate fields of "music" */
export type Music_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Music_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate avg on columns */
export type Music_Avg_Fields = {
  __typename?: "music_avg_fields";
  level?: Maybe<Scalars["Float"]>;
  notes?: Maybe<Scalars["Float"]>;
};

/** Boolean expression to filter rows from the table "music". All fields are combined with a logical 'AND'. */
export type Music_Bool_Exp = {
  _and?: InputMaybe<Array<Music_Bool_Exp>>;
  _not?: InputMaybe<Music_Bool_Exp>;
  _or?: InputMaybe<Array<Music_Bool_Exp>>;
  bpm?: InputMaybe<String_Comparison_Exp>;
  difficulty?: InputMaybe<String_Comparison_Exp>;
  genre?: InputMaybe<String_Comparison_Exp>;
  level?: InputMaybe<Int_Comparison_Exp>;
  notes?: InputMaybe<Int_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "music" */
export enum Music_Constraint {
  /** unique or primary key constraint on columns "difficulty", "title" */
  MusicPkey = "music_pkey",
}

/** input type for incrementing numeric columns in table "music" */
export type Music_Inc_Input = {
  level?: InputMaybe<Scalars["Int"]>;
  notes?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "music" */
export type Music_Insert_Input = {
  bpm?: InputMaybe<Scalars["String"]>;
  difficulty?: InputMaybe<Scalars["String"]>;
  genre?: InputMaybe<Scalars["String"]>;
  level?: InputMaybe<Scalars["Int"]>;
  notes?: InputMaybe<Scalars["Int"]>;
  title?: InputMaybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Music_Max_Fields = {
  __typename?: "music_max_fields";
  bpm?: Maybe<Scalars["String"]>;
  difficulty?: Maybe<Scalars["String"]>;
  genre?: Maybe<Scalars["String"]>;
  level?: Maybe<Scalars["Int"]>;
  notes?: Maybe<Scalars["Int"]>;
  title?: Maybe<Scalars["String"]>;
};

/** aggregate min on columns */
export type Music_Min_Fields = {
  __typename?: "music_min_fields";
  bpm?: Maybe<Scalars["String"]>;
  difficulty?: Maybe<Scalars["String"]>;
  genre?: Maybe<Scalars["String"]>;
  level?: Maybe<Scalars["Int"]>;
  notes?: Maybe<Scalars["Int"]>;
  title?: Maybe<Scalars["String"]>;
};

/** response of any mutation on the table "music" */
export type Music_Mutation_Response = {
  __typename?: "music_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Music>;
};

/** on_conflict condition type for table "music" */
export type Music_On_Conflict = {
  constraint: Music_Constraint;
  update_columns?: Array<Music_Update_Column>;
  where?: InputMaybe<Music_Bool_Exp>;
};

/** Ordering options when selecting data from "music". */
export type Music_Order_By = {
  bpm?: InputMaybe<Order_By>;
  difficulty?: InputMaybe<Order_By>;
  genre?: InputMaybe<Order_By>;
  level?: InputMaybe<Order_By>;
  notes?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** primary key columns input for table: music */
export type Music_Pk_Columns_Input = {
  difficulty: Scalars["String"];
  title: Scalars["String"];
};

/** select columns of table "music" */
export enum Music_Select_Column {
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
}

/** input type for updating data in table "music" */
export type Music_Set_Input = {
  bpm?: InputMaybe<Scalars["String"]>;
  difficulty?: InputMaybe<Scalars["String"]>;
  genre?: InputMaybe<Scalars["String"]>;
  level?: InputMaybe<Scalars["Int"]>;
  notes?: InputMaybe<Scalars["Int"]>;
  title?: InputMaybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type Music_Stddev_Fields = {
  __typename?: "music_stddev_fields";
  level?: Maybe<Scalars["Float"]>;
  notes?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_pop on columns */
export type Music_Stddev_Pop_Fields = {
  __typename?: "music_stddev_pop_fields";
  level?: Maybe<Scalars["Float"]>;
  notes?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_samp on columns */
export type Music_Stddev_Samp_Fields = {
  __typename?: "music_stddev_samp_fields";
  level?: Maybe<Scalars["Float"]>;
  notes?: Maybe<Scalars["Float"]>;
};

/** Streaming cursor of the table "music" */
export type Music_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Music_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Music_Stream_Cursor_Value_Input = {
  bpm?: InputMaybe<Scalars["String"]>;
  difficulty?: InputMaybe<Scalars["String"]>;
  genre?: InputMaybe<Scalars["String"]>;
  level?: InputMaybe<Scalars["Int"]>;
  notes?: InputMaybe<Scalars["Int"]>;
  title?: InputMaybe<Scalars["String"]>;
};

/** aggregate sum on columns */
export type Music_Sum_Fields = {
  __typename?: "music_sum_fields";
  level?: Maybe<Scalars["Int"]>;
  notes?: Maybe<Scalars["Int"]>;
};

/** update columns of table "music" */
export enum Music_Update_Column {
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
}

export type Music_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Music_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Music_Set_Input>;
  /** filter the rows which have to be updated */
  where: Music_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Music_Var_Pop_Fields = {
  __typename?: "music_var_pop_fields";
  level?: Maybe<Scalars["Float"]>;
  notes?: Maybe<Scalars["Float"]>;
};

/** aggregate var_samp on columns */
export type Music_Var_Samp_Fields = {
  __typename?: "music_var_samp_fields";
  level?: Maybe<Scalars["Float"]>;
  notes?: Maybe<Scalars["Float"]>;
};

/** aggregate variance on columns */
export type Music_Variance_Fields = {
  __typename?: "music_variance_fields";
  level?: Maybe<Scalars["Float"]>;
  notes?: Maybe<Scalars["Float"]>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: "mutation_root";
  /** delete data from the table: "music" */
  delete_music?: Maybe<Music_Mutation_Response>;
  /** delete single row from the table: "music" */
  delete_music_by_pk?: Maybe<Music>;
  /** insert data into the table: "music" */
  insert_music?: Maybe<Music_Mutation_Response>;
  /** insert a single row into the table: "music" */
  insert_music_one?: Maybe<Music>;
  /** update data of the table: "music" */
  update_music?: Maybe<Music_Mutation_Response>;
  /** update single row of the table: "music" */
  update_music_by_pk?: Maybe<Music>;
  /** update multiples rows of table: "music" */
  update_music_many?: Maybe<Array<Maybe<Music_Mutation_Response>>>;
};

/** mutation root */
export type Mutation_RootDelete_MusicArgs = {
  where: Music_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Music_By_PkArgs = {
  difficulty: Scalars["String"];
  title: Scalars["String"];
};

/** mutation root */
export type Mutation_RootInsert_MusicArgs = {
  objects: Array<Music_Insert_Input>;
  on_conflict?: InputMaybe<Music_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Music_OneArgs = {
  object: Music_Insert_Input;
  on_conflict?: InputMaybe<Music_On_Conflict>;
};

/** mutation root */
export type Mutation_RootUpdate_MusicArgs = {
  _inc?: InputMaybe<Music_Inc_Input>;
  _set?: InputMaybe<Music_Set_Input>;
  where: Music_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Music_By_PkArgs = {
  _inc?: InputMaybe<Music_Inc_Input>;
  _set?: InputMaybe<Music_Set_Input>;
  pk_columns: Music_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Music_ManyArgs = {
  updates: Array<Music_Updates>;
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
  /** fetch data from the table: "music" */
  music: Array<Music>;
  /** fetch aggregated fields from the table: "music" */
  music_aggregate: Music_Aggregate;
  /** fetch data from the table: "music" using primary key columns */
  music_by_pk?: Maybe<Music>;
};

export type Query_RootMusicArgs = {
  distinct_on?: InputMaybe<Array<Music_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Music_Order_By>>;
  where?: InputMaybe<Music_Bool_Exp>;
};

export type Query_RootMusic_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Music_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Music_Order_By>>;
  where?: InputMaybe<Music_Bool_Exp>;
};

export type Query_RootMusic_By_PkArgs = {
  difficulty: Scalars["String"];
  title: Scalars["String"];
};

export type Subscription_Root = {
  __typename?: "subscription_root";
  /** fetch data from the table: "music" */
  music: Array<Music>;
  /** fetch aggregated fields from the table: "music" */
  music_aggregate: Music_Aggregate;
  /** fetch data from the table: "music" using primary key columns */
  music_by_pk?: Maybe<Music>;
  /** fetch data from the table in a streaming manner: "music" */
  music_stream: Array<Music>;
};

export type Subscription_RootMusicArgs = {
  distinct_on?: InputMaybe<Array<Music_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Music_Order_By>>;
  where?: InputMaybe<Music_Bool_Exp>;
};

export type Subscription_RootMusic_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Music_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  order_by?: InputMaybe<Array<Music_Order_By>>;
  where?: InputMaybe<Music_Bool_Exp>;
};

export type Subscription_RootMusic_By_PkArgs = {
  difficulty: Scalars["String"];
  title: Scalars["String"];
};

export type Subscription_RootMusic_StreamArgs = {
  batch_size: Scalars["Int"];
  cursor: Array<InputMaybe<Music_Stream_Cursor_Input>>;
  where?: InputMaybe<Music_Bool_Exp>;
};

export type ChordQueryVariables = Exact<{ [key: string]: never }>;

export type ChordQuery = {
  __typename?: "query_root";
  music: Array<{
    __typename?: "music";
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
  music: Array<{
    __typename?: "music";
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
            name: { kind: "Name", value: "music" },
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
            name: { kind: "Name", value: "music" },
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
