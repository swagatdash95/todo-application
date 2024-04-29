/**
 * @generated SignedSource<<3aa118639c10e57a64d784ec517f0ff5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type TodoPageMutation$variables = {
  description?: string | null;
  name: string;
};
export type TodoPageMutation$data = {
  readonly addTodo: {
    readonly description: string;
    readonly isDone: boolean;
    readonly name: string;
    readonly todoId: string;
  } | null;
};
export type TodoPageMutation = {
  response: TodoPageMutation$data;
  variables: TodoPageMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "description"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "name"
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "description",
        "variableName": "description"
      },
      {
        "kind": "Literal",
        "name": "isDone",
        "value": false
      },
      {
        "kind": "Variable",
        "name": "name",
        "variableName": "name"
      }
    ],
    "concreteType": "Todo",
    "kind": "LinkedField",
    "name": "addTodo",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "description",
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
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "TodoPageMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "TodoPageMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "923091b8bacd0f6fdea4d43889b6336c",
    "id": null,
    "metadata": {},
    "name": "TodoPageMutation",
    "operationKind": "mutation",
    "text": "mutation TodoPageMutation(\n  $name: String!\n  $description: String\n) {\n  addTodo(name: $name, isDone: false, description: $description) {\n    description\n    isDone\n    name\n    todoId\n  }\n}\n"
  }
};
})();

(node as any).hash = "16ecbeca8edb7b7836a3ef7c2f52fc67";

export default node;
