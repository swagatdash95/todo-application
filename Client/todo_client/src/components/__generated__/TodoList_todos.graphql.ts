/**
 * @generated SignedSource<<d88e1a3ef6d6356825e033698190a5b8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TodoList_todos$data = {
  readonly items: ReadonlyArray<{
    readonly " $fragmentSpreads": FragmentRefs<"TodoItem_item">;
  }>;
  readonly " $fragmentType": "TodoList_todos";
};
export type TodoList_todos$key = {
  readonly " $data"?: TodoList_todos$data;
  readonly " $fragmentSpreads": FragmentRefs<"TodoList_todos">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TodoList_todos",
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
          "args": null,
          "kind": "FragmentSpread",
          "name": "TodoItem_item"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Todos",
  "abstractKey": null
};

(node as any).hash = "dbc2e5af1438c5372cd6aea585dfb6c6";

export default node;
