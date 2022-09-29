/**
 * @generated SignedSource<<486b9370f04d9697014f1997a461b38c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TodoPageQuery$variables = {};
export type TodoPageQuery$data = {
  readonly todos: {
    readonly " $fragmentSpreads": FragmentRefs<"TodoList_items">;
  };
};
export type TodoPageQuery = {
  response: TodoPageQuery$data;
  variables: TodoPageQuery$variables;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "TodoPageQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Todos",
        "kind": "LinkedField",
        "name": "todos",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "TodoList_items"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "TodoPageQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Todos",
        "kind": "LinkedField",
        "name": "todos",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Todo",
            "kind": "LinkedField",
            "name": "items",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "todoId",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "name",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "isDone",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "description",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "10574d1752f24ecf194d40ae101ac374",
    "id": null,
    "metadata": {},
    "name": "TodoPageQuery",
    "operationKind": "query",
    "text": "query TodoPageQuery {\n  todos {\n    ...TodoList_items\n  }\n}\n\nfragment TodoItem_item on Todo {\n  todoId\n  name\n  isDone\n  description\n}\n\nfragment TodoList_items on Todos {\n  items {\n    ...TodoItem_item\n  }\n}\n"
  }
};

(node as any).hash = "fdc4b77767c5a1660f17c55bb73c38d5";

export default node;
