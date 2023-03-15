import { Box, Button, ProgressBar, Text, Tooltip } from "@primer/react";
import { useWallet } from "@solana/wallet-adapter-react";
import React, { FC, useContext, useMemo } from "react";
import { IRequest } from "../../interface/collections.interface";
import { claimVictory } from "../../solana/methods/remint";
import { CollectionContext } from "../../stores/collectionContext";
import { toast } from "react-hot-toast";
import { getCollectionDerugData } from "../../solana/methods/derug";
import { DerugStatus } from "../../enums/collections.enums";
const WinningRequest: FC<{ request: IRequest }> = ({ request }) => {
  const { collectionDerug, setCollectionDerug } = useContext(CollectionContext);

  const wallet = useWallet();

  const renderUtilities = useMemo(() => {
    return request.utility.map((u, i) => {
      return (
        <Tooltip
          sx={{
            "::after": {
              fontSize: "1em",
              backgroundColor: "#282C34",
              width: "fit-content",
            },
          }}
          aria-label={u.description}
          noDelay={true}
        >
          <div
            className="text-sm font-mono"
            style={{
              borderRightWidth:
                i !== request.utility.length - 1 ? "1px" : "0px",
              paddingRight: i !== request.utility.length - 1 ? "1em" : "0px",
              color: "rgb(9, 194, 246)",
            }}
          >
            {" "}
            {u.title}
          </div>
        </Tooltip>
      );
    });
  }, []);

  const claimDerugVictory = async () => {
    try {
      if (wallet && collectionDerug && request) {
        await claimVictory(wallet!, collectionDerug, request);
        const updatedDerug = await getCollectionDerugData(
          collectionDerug.address
        );
        setCollectionDerug(updatedDerug);
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <Box className="flex flex-row justify-between items-center w-full relative">
      {/* <Box className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 h-1 w-full absolute top-0"></Box> */}
      <Box
        className="flex flex-col gap-5 w-full px-10"
        sx={{
          border:
            "1px solid animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500",
          boxShadow: "0 0 10px 0 rgba(0,0,0,0.5)",
        }}
        padding="2em"
        margin="2.5rem"
      >
        <Box className="flex flex-row  ">
          <Text className="font-mono text-neutral-400 flex justify-center text-">
            {request.derugger.toString()}
          </Text>
        </Box>
        <Box
          className="flex flex-row gap-3 justify-between w-full items-center"
          sx={{
            color: "rgb(45, 212, 191)",
            border: "1px solid rgba(9,194,246,.15)",
            padding: "1em",
          }}
        >
          <Text className="font-mono text-white">{"Twitter handle"}</Text>
          <Box className="flex flex-row gap-3">{renderUtilities}</Box>
        </Box>
        <Box className="flex flex-col gap-5 items-center w-full">
          <Box className="flex font-mono flex-row items-center justify-between w-full gap-4 ">
            {collectionDerug &&
              collectionDerug.status !== DerugStatus.Reminting && (
                <Button
                  className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 "
                  sx={{
                    color: "white",
                    // background: "rgba(9, 194, 246, 0.6)",
                    padding: "1.25em",
                    borderRadius: 0,
                    width: "30%",
                  }}
                  onClick={claimDerugVictory}
                >
                  <span className="text-xl lowercase">Claim victory</span>
                </Button>
              )}
            <div className="flex items-center gap-5">
              <ProgressBar
                progress={
                  (request.voteCount / (collectionDerug?.totalSupply ?? 1)) *
                  100
                }
                bg="#2DD4BF"
                sx={{
                  width: "380px",
                  // filter: "drop-shadow(white 0px 0px 3px)",
                  height: "30px",
                  borderRadius: 0,
                  color: "rgb(45, 212, 191)",
                }}
              />
              <Text className="text-white font-mono	" color={"rgb(9, 194, 246)"}>
                {request.voteCount} / {collectionDerug?.totalSupply}
              </Text>
            </div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default WinningRequest;
