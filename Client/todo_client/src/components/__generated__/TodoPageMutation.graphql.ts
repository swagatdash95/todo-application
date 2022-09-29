/**
 * @generated SignedSource<<ded0a4e56aa4fe51c7c0660f1ef52d2e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TodoPageMutation$variables = {
  description?: string | null;
  name: string;
};
export type TodoPageMutation$data = {
  readonly addTodo: {
    readonly " $fragmentSpreads": FragmentRefs<"TodoList_todos">;
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
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Todos",
        "kind": "LinkedField",
        "name": "addTodo",
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
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Todos",
        "kind": "LinkedField",
        "name": "addTodo",
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
    "cacheID": "c032016d0303aac1118f2af9110fb8af",
    "id": null,
    "metadata": {},
    "name": "TodoPageMutation",
    "operationKind": "mutation",
    "text": "mutation TodoPageMutation(\n  $name: String!\n  $description: String\n) {\n  addTodo(name: $name, isDone: false, description: $description) {\n    ...TodoList_todos\n  }\n}\n\nfragment TodoItem_item on Todo {\n  todoId\n  name\n  isDone\n}\n\nfragment TodoList_todos on Todos {\n  items {\n    ...TodoItem_item\n  }\n}\n"
  }
};
})();

(node as any).hash = "838f5b596c9988640502ee4ec01fc2e2";

export default node;
