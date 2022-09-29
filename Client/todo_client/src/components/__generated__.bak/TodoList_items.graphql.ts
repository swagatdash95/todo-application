/**
 * @generated SignedSource<<a37f60ae49d19d1a89a7afc24f224af6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TodoList_items$data = {
  readonly items: ReadonlyArray<{
    readonly " $fragmentSpreads": FragmentRefs<"TodoItem_item">;
  }>;
  readonly " $fragmentType": "TodoList_items";
};
export type TodoList_items$key = {
  readonly " $data"?: TodoList_items$data;
  readonly " $fragmentSpreads": FragmentRefs<"TodoList_items">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TodoList_items",
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

(node as any).hash = "da8528cd0210cae9f801d8f76f29d2dc";

export default node;
