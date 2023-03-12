import { ICollectionData } from "../interface/collections.interface";
import { get } from "./request.api";
import { MAGIC_EDEN_COLLECTIONS, NAME, RANDOM, LISTINGS } from "./url.api";

export async function getRandomCollections(): Promise<ICollectionData[]> {
  return get(`${MAGIC_EDEN_COLLECTIONS}${RANDOM}`);
}

export async function getByNameOrSlug(
  name: string
): Promise<ICollectionData[]> {
  return get(`${MAGIC_EDEN_COLLECTIONS}${NAME}/${name}`);
}

export async function getListedNfts(
  symbol: string
): Promise<ICollectionData[]> {
  return get(`${MAGIC_EDEN_COLLECTIONS}${LISTINGS}/${symbol}`);
}
