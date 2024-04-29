/**
 * @generated SignedSource<<5f9676009aa55657204a15c718a36565>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type TodoPageDeleteSelectedMutation$variables = {
  todoIds: ReadonlyArray<any>;
};
export type TodoPageDeleteSelectedMutation$data = {
  readonly deleteSelectedTodos: ReadonlyArray<{
    readonly description: string;
    readonly id: string;
    readonly isDone: boolean;
    readonly name: string;
  }> | null;
};
export type TodoPageDeleteSelectedMutation = {
  response: TodoPageDeleteSelectedMutation$data;
  variables: TodoPageDeleteSelectedMutation$variables;
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
    "name": "deleteSelectedTodos",
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
    "name": "TodoPageDeleteSelectedMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TodoPageDeleteSelectedMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "f7c5307b1b6755a1f40c3d18f985d700",
    "id": null,
    "metadata": {},
    "name": "TodoPageDeleteSelectedMutation",
    "operationKind": "mutation",
    "text": "mutation TodoPageDeleteSelectedMutation(\n  $todoIds: [UUID!]!\n) {\n  deleteSelectedTodos(todoIds: $todoIds) {\n    description\n    isDone\n    name\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "2ab963ce98a47716795e557db4e1fe27";

export default node;
