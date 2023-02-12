/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "query AllAnotherMusics {\n  musics(where: {difficulty: {_eq: \"ANOTHER\"}}) {\n    bpm\n    difficulty\n    level\n    genre\n    notes\n    title\n    version\n  }\n}": types.AllAnotherMusicsDocument,
    "query AllLeggendariaMusics {\n  musics(where: {difficulty: {_eq: \"LEGGENDARIA\"}}) {\n    bpm\n    difficulty\n    level\n    genre\n    notes\n    title\n    version\n  }\n}": types.AllLeggendariaMusicsDocument,
    "query AllMusic {\n  musics {\n    bpm\n    difficulty\n    genre\n    level\n    notes\n    title\n    version\n    exscore\n  }\n}": types.AllMusicDocument,
    "query Chord {\n  musics(where: {genre: {_eq: \"CHORD\"}}) {\n    genre\n    bpm\n    difficulty\n    level\n    notes\n    title\n    version\n  }\n}": types.ChordDocument,
    "query Notes {\n  musics(where: {genre: {_eq: \"NOTES\"}}) {\n    genre\n    bpm\n    difficulty\n    level\n    notes\n    title\n    version\n  }\n}": types.NotesDocument,
    "mutation UpdateAnotherScore($title: String!, $exscore: Int!) {\n  update_musics_by_pk(\n    pk_columns: {title: $title, difficulty: \"ANOTHER\"}\n    _set: {exscore: $exscore}\n  ) {\n    exscore\n  }\n}": types.UpdateAnotherScoreDocument,
    "mutation UpdateLeggendariaScore($title: String!, $exscore: Int!) {\n  update_musics_by_pk(\n    pk_columns: {title: $title, difficulty: \"LEGGENDARIA\"}\n    _set: {exscore: $exscore}\n  ) {\n    exscore\n  }\n}": types.UpdateLeggendariaScoreDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query AllAnotherMusics {\n  musics(where: {difficulty: {_eq: \"ANOTHER\"}}) {\n    bpm\n    difficulty\n    level\n    genre\n    notes\n    title\n    version\n  }\n}"): (typeof documents)["query AllAnotherMusics {\n  musics(where: {difficulty: {_eq: \"ANOTHER\"}}) {\n    bpm\n    difficulty\n    level\n    genre\n    notes\n    title\n    version\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query AllLeggendariaMusics {\n  musics(where: {difficulty: {_eq: \"LEGGENDARIA\"}}) {\n    bpm\n    difficulty\n    level\n    genre\n    notes\n    title\n    version\n  }\n}"): (typeof documents)["query AllLeggendariaMusics {\n  musics(where: {difficulty: {_eq: \"LEGGENDARIA\"}}) {\n    bpm\n    difficulty\n    level\n    genre\n    notes\n    title\n    version\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query AllMusic {\n  musics {\n    bpm\n    difficulty\n    genre\n    level\n    notes\n    title\n    version\n    exscore\n  }\n}"): (typeof documents)["query AllMusic {\n  musics {\n    bpm\n    difficulty\n    genre\n    level\n    notes\n    title\n    version\n    exscore\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Chord {\n  musics(where: {genre: {_eq: \"CHORD\"}}) {\n    genre\n    bpm\n    difficulty\n    level\n    notes\n    title\n    version\n  }\n}"): (typeof documents)["query Chord {\n  musics(where: {genre: {_eq: \"CHORD\"}}) {\n    genre\n    bpm\n    difficulty\n    level\n    notes\n    title\n    version\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Notes {\n  musics(where: {genre: {_eq: \"NOTES\"}}) {\n    genre\n    bpm\n    difficulty\n    level\n    notes\n    title\n    version\n  }\n}"): (typeof documents)["query Notes {\n  musics(where: {genre: {_eq: \"NOTES\"}}) {\n    genre\n    bpm\n    difficulty\n    level\n    notes\n    title\n    version\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation UpdateAnotherScore($title: String!, $exscore: Int!) {\n  update_musics_by_pk(\n    pk_columns: {title: $title, difficulty: \"ANOTHER\"}\n    _set: {exscore: $exscore}\n  ) {\n    exscore\n  }\n}"): (typeof documents)["mutation UpdateAnotherScore($title: String!, $exscore: Int!) {\n  update_musics_by_pk(\n    pk_columns: {title: $title, difficulty: \"ANOTHER\"}\n    _set: {exscore: $exscore}\n  ) {\n    exscore\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation UpdateLeggendariaScore($title: String!, $exscore: Int!) {\n  update_musics_by_pk(\n    pk_columns: {title: $title, difficulty: \"LEGGENDARIA\"}\n    _set: {exscore: $exscore}\n  ) {\n    exscore\n  }\n}"): (typeof documents)["mutation UpdateLeggendariaScore($title: String!, $exscore: Int!) {\n  update_musics_by_pk(\n    pk_columns: {title: $title, difficulty: \"LEGGENDARIA\"}\n    _set: {exscore: $exscore}\n  ) {\n    exscore\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;