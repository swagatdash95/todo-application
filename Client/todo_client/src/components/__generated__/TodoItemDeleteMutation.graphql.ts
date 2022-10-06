/**
 * @generated SignedSource<<c4e554f741726ab350d9a436f4067dba>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type TodoItemDeleteMutation$variables = {
  id: any;
};
export type TodoItemDeleteMutation$data = {
  readonly deleteTodo: {
    readonly description: string;
    readonly id: string;
    readonly isDone: boolean;
    readonly name: string;
  } | null;
};
export type TodoItemDeleteMutation = {
  response: TodoItemDeleteMutation$data;
  variables: TodoItemDeleteMutation$variables;
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
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "Todo",
    "kind": "LinkedField",
    "name": "deleteTodo",
    "plural": false,
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
        "name": "id",
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "TodoItemDeleteMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TodoItemDeleteMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "bcef2fe25c25f28ce99bd73489f31451",
    "id": null,
    "metadata": {},
    "name": "TodoItemDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation TodoItemDeleteMutation(\n  $id: UUID!\n) {\n  deleteTodo(id: $id) {\n    isDone\n    name\n    id\n    description\n  }\n}\n"
  }
};
})();

(node as any).hash = "1e206426946ebd6300ce0f44f35b8a08";

export default node;
