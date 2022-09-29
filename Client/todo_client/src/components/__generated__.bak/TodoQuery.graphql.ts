/**
 * @generated SignedSource<<33a58b94203547e5a0f8eb6046576349>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type TodoQuery$variables = {};
export type TodoQuery$data = {
  readonly todos: {
    readonly items: ReadonlyArray<{
      readonly isDone: boolean;
      readonly name: string;
      readonly todoId: string;
    }>;
  };
};
export type TodoQuery = {
  response: TodoQuery$data;
  variables: TodoQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
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
            "name": "isDone",
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
            "name": "todoId",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "TodoQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "TodoQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "4990b5ed5c107b4702fec6f84d90587f",
    "id": null,
    "metadata": {},
    "name": "TodoQuery",
    "operationKind": "query",
    "text": "query TodoQuery {\n  todos {\n    items {\n      isDone\n      name\n      todoId\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "ae9a6f5294ac0afffdad346410d23f91";

export default node;
