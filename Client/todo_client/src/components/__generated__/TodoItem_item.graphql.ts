/**
 * @generated SignedSource<<7290e67f510ae9d802ebb7a896d7f482>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TodoItem_item$data = {
  readonly description: string;
  readonly id: string;
  readonly isDone: boolean;
  readonly name: string;
  readonly " $fragmentType": "TodoItem_item";
};
export type TodoItem_item$key = {
  readonly " $data"?: TodoItem_item$data;
  readonly " $fragmentSpreads": FragmentRefs<"TodoItem_item">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TodoItem_item",
  "selections": [
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
    }
  ],
  "type": "Todo",
  "abstractKey": null
};

(node as any).hash = "5db549ae8d23491b75f717988660e791";

export default node;
