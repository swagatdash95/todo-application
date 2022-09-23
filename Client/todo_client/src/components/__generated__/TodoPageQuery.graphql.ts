/**
 * @generated SignedSource<<fbf05e9e591e89ba08b41e95bd738f3d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type TodoPageQuery$variables = {};
export type TodoPageQuery$data = {
  readonly todos: ReadonlyArray<{
    readonly description: string;
    readonly isDone: boolean;
    readonly name: string;
    readonly todoId: string;
  }>;
};
export type TodoPageQuery = {
  response: TodoPageQuery$data;
  variables: TodoPageQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Todo",
    "kind": "LinkedField",
    "name": "todos",
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
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "TodoPageQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "TodoPageQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "b2eeb9d258958a3faecca0d27e71ae54",
    "id": null,
    "metadata": {},
    "name": "TodoPageQuery",
    "operationKind": "query",
    "text": "query TodoPageQuery {\n  todos {\n    isDone\n    name\n    todoId\n    description\n  }\n}\n"
  }
};
})();

(node as any).hash = "e11101950e47baec56c390212d695881";

export default node;
