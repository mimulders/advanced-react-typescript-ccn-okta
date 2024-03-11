// ccn-okta/src/util/fetchstate.ts
// FetchState is a discriminated union type that represents the state of a fetch operation.
export type FetchState<Data> =
  | {
      status: "loading";
    }
  | {
      status: "success";
      data: Data;
    }
  | {
      status: "error";
      error: any;
    };
