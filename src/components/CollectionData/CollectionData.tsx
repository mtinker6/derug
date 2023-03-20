import { Box, Button, Text } from "@primer/react";
import React, { useContext } from "react";
import { CollectionContext } from "../../stores/collectionContext";
import { FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";

const CollectionData = () => {
  const { collection, chainCollectionData } = useContext(CollectionContext);
  return (
    <Box className="flex flex-col gap-5 pr-2 text-white">
      <Box className="flex flex-row items-start gap-5">
        {collection?.image ? (
          <img
            src={collection?.image}
            alt="collectionImg"
            className="rounded-[50%] w-32"
          />
        ) : (
          <Skeleton
            height={128}
            width={128}
            circle={true}
            baseColor="rgb(22,27,34)"
            highlightColor="rgb(29,35,44)"
            className="rounded-[50%]"
          />
        )}
        <Box className="flex flex-col gap-4 items-start">
          <Text className="font-bold font-monospace text-white-500 text-4xl">
            {collection?.name ?? (
              <Skeleton
                width={200}
                baseColor="rgb(22,27,34)"
                highlightColor="rgb(29,35,44)"
                className="rounded-[50%]"
              />
            )}
          </Text>
          {chainCollectionData ? (
            <Text>
              Rugged by:
              <span
                style={{
                  color: "rgb(154 52 18)",
                  filter: "drop-shadow(rgb(223, 46, 56),0 0 15px)",
                  fontSize: "1em",
                  marginLeft: "0.5em",
                }}
              >
                {chainCollectionData.rugUpdateAuthority}
              </span>
            </Text>
          ) : (
            <Skeleton
              width={200}
              baseColor="rgb(22,27,34)"
              highlightColor="rgb(29,35,44)"
            />
          )}
          <Box className="flex flex-row gap-5">
            {collection?.discord ? (
              <a href={collection.discord} target={"_blank"} rel="noreferrer">
                <FaDiscord
                  style={{
                    cursor: "pointer",
                    fontSize: "1.75em",
                    color: "rgb(88 101 242)",
                  }}
                />
              </a>
            ) : (
              <Skeleton
                height={32}
                width={32}
                baseColor="rgb(22,27,34)"
                highlightColor="rgb(29,35,44)"
              />
            )}
            {collection?.twitter ? (
              <a href={collection.twitter} target={"_blank"} rel="noreferrer">
                <FaTwitter
                  style={{
                    cursor: "pointer",
                    fontSize: "1.75em",
                    color: "rgb(29 161 242)",
                  }}
                />
              </a>
            ) : (
              <Skeleton
                height={32}
                width={32}
                baseColor="rgb(22,27,34)"
                highlightColor="rgb(29,35,44)"
              />
            )}
          </Box>
        </Box>
      </Box>
      <Text className="text-left text-lg text-white opacity-80 font-mono max-h-24 overflow-auto">
        {collection?.description ?? (
          <Skeleton
            baseColor="rgb(22,27,34)"
            highlightColor="rgb(29,35,44m)"
            height={32}
          ></Skeleton>
        )}
      </Text>
    </Box>
  );
};

export default CollectionData;