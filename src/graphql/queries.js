/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getWhiteboard = /* GraphQL */ `
  query GetWhiteboard($id: Int!) {
    getWhiteboard(id: $id) {
      id
      content
      context_data
      app_created_by
      app_last_updated_by
      created_at
      external_share_enabled
      external_share_hash
      name
      product_type
      tenant_id_str
      updated_at
    }
  }
`;
export const listWhiteboards = /* GraphQL */ `
  query ListWhiteboards(
    $filter: TableWhiteboardFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWhiteboards(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        context_data
        app_created_by
        app_last_updated_by
        created_at
        external_share_enabled
        external_share_hash
        name
        product_type
        tenant_id_str
        updated_at
      }
      nextToken
    }
  }
`;
