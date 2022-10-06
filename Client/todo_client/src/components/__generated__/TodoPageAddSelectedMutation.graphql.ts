/**
 * @generated SignedSource<<78797ab9e8a525231c41fcba433b0d16>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type TodoPageAddSelectedMutation$variables = {
  todoIds: ReadonlyArray<any>;
};
export type TodoPageAddSelectedMutation$data = {
  readonly checkSelectedTodos: ReadonlyArray<{
    readonly description: string;
    readonly id: string;
    readonly isDone: boolean;
    readonly name: string;
  }> | null;
};
export type TodoPageAddSelectedMutation = {
  response: TodoPageAddSelectedMutation$data;
  variables: TodoPageAddSelectedMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "todoIds"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "todoIds",
        "variableName": "todoIds"
      }
    ],
    "concreteType": "Todo",
    "kind": "LinkedField",
    "name": "checkSelectedTodos",
    "plural": true,
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
        "name": "id",
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
    "name": "TodoPageAddSelectedMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TodoPageAddSelectedMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "0eba8cd0a7430723b55b4566394476da",
    "id": null,
    "metadata": {},
    "name": "TodoPageAddSelectedMutation",
    "operationKind": "mutation",
    "text": "mutation TodoPageAddSelectedMutation(\n  $todoIds: [UUID!]!\n) {\n  checkSelectedTodos(todoIds: $todoIds) {\n    description\n    isDone\n    name\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "d65c4cf25a525ef9cfe868a6211cf147";

export default node;
