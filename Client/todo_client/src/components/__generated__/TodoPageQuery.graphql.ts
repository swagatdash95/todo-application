/**
 * @generated SignedSource<<c3cb81753331b8197ca8a6c28d8550cf>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TodoPageQuery$variables = {
  id: any;
};
export type TodoPageQuery$data = {
  readonly todos: {
    readonly " $fragmentSpreads": FragmentRefs<"TodoList_todos">;
  } | null;
};
export type TodoPageQuery = {
  response: TodoPageQuery$data;
  variables: TodoPageQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "TodoPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TodoPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Todos",
        "kind": "LinkedField",
        "name": "todos",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "count",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Todo",
            "kind": "LinkedField",
            "name": "items",
            "plural": true,
            "selections": [
              (v2/*: any*/),
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
              },
              {
                "kind": "ClientExtension",
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "__id",
                    "storageKey": null
                  }
                ]
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
    "cacheID": "1a2b4898a7820be93b2d0a8fc6c553c9",
    "id": null,
    "metadata": {},
    "name": "TodoPageQuery",
    "operationKind": "query",
    "text": "query TodoPageQuery(\n  $id: UUID!\n) {\n  todos(id: $id) {\n    ...TodoList_todos\n    id\n  }\n}\n\nfragment TodoItem_item on Todo {\n  id\n  name\n  isDone\n  description\n}\n\nfragment TodoList_todos on Todos {\n  id\n  count\n  items {\n    id\n    ...TodoItem_item\n  }\n}\n"
  }
};
})();

(node as any).hash = "eaa09d3b1aea0fdf75079be9513080fd";

export default node;
