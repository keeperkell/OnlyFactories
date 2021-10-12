/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      id
      OrderID
      Color
      Email
      Name
      OrderStatus
      Quantity
      TransactionID
      createdAt
      updatedAt
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        OrderID
        Color
        Email
        Name
        OrderStatus
        Quantity
        TransactionID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
