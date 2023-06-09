import { ApolloClient, InMemoryCache } from "@apollo/client";
import { Metaplex } from "@metaplex-foundation/js";
import { Connection, PublicKey } from "@solana/web3.js";
export const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT as string;
export const gqlClient = new ApolloClient({
  uri: "https://graphql.tensor.trade/graphql",
  cache: new InMemoryCache(),
});

export const MAINNET_RPC_CONNECTION = new Connection(
  "https://rpc.ankr.com/solana"
);

// export const metaplex = Metaplex.make(MAINNET_RPC_CONNECTION);

export const METAPLEX_PROGRAM = new PublicKey(
  "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
);

export const MAGIC_EDEN_URL = "https://api-mainnet.magiceden.dev/v2";

export const DERUG_PROGRAM_ID = process.env.REACT_APP_DERUG_PROGRAM as string;

export const RPC_CONNECTION = new Connection(
  "https://warmhearted-old-card.solana-devnet.quiknode.pro/",
  "confirmed"
);
