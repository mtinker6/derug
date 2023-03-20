import React, { FC, useContext, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { CollectionContext } from "../../stores/collectionContext";
import { generateSkeletonArrays } from "../../utilities/nft-fetching";
import ListedNftItem from "./ListedNftItem";

const ListedNfts: FC = () => {
  const { activeListings, loading } = useContext(CollectionContext);

  const renderListedNfts = () => {
    return activeListings?.map((ln) => {
      return <ListedNftItem listedNft={ln} key={ln.mint} />;
    });
  };

  return (
    <div className="grid grid-cols-5">
      {!loading
        ? renderListedNfts()
        : generateSkeletonArrays(25).map((_, i) => (
            <Skeleton
              height={128}
              width={128}
              baseColor="rgb(22,27,34)"
              highlightColor="rgb(29,35,44)"
            />
          ))}
    </div>
  );
};

export default ListedNfts;