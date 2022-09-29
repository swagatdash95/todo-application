/**
 * @generated SignedSource<<d98ce89e545955e5cdb322d5caa530c5>>
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
    readonly " $fragmentSpreads": FragmentRefs<"TodoList_todos">;
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
            "name": "TodoList_todos"
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
    "cacheID": "0762b21988c05f9f3e5efbfc9da358ff",
    "id": null,
    "metadata": {},
    "name": "TodoPageQuery",
    "operationKind": "query",
    "text": "query TodoPageQuery {\n  todos {\n    ...TodoList_todos\n  }\n}\n\nfragment TodoItem_item on Todo {\n  todoId\n  name\n  isDone\n}\n\nfragment TodoList_todos on Todos {\n  items {\n    ...TodoItem_item\n  }\n}\n"
  }
};

(node as any).hash = "475d41aba52bb23173d346e6768e660b";

export default node;
