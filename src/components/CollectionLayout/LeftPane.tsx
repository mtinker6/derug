import { Box, Text } from "@primer/react";
import { motion } from "framer-motion";
import { FC, useState } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { useSearchParams } from "react-router-dom";
import { FADE_DOWN_ANIMATION_VARIANTS } from "../../utilities/constants";
import CollectionData from "../CollectionData/CollectionData";
import tensorLogo from "../../assets/tensorLogo.png";
import magicEdenLogo from "../../assets/magicEdenLogo.png";

export const LeftPane: FC<{
  selectedInfo: string;
}> = ({ selectedInfo }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const slug = useSearchParams()[0].get("symbol");
  return (
    <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS}>
      <motion.div
        variants={FADE_DOWN_ANIMATION_VARIANTS}
        className="pl-10 sticky"
      >
        <Box
          sx={{
            "@media screen and (max-width: 768px)": {
              display: "flex",
              flexDirection: "column",
              width: "100%",
            },
          }}
        >
          {(selectedInfo === "description" || selectedInfo === "") && (
            <Box
              sx={{
                "@media screen and (max-width: 768px)": {
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                },
              }}
            >
              <Text
                id="description"
                as="p"
                sx={{ p: 2, maxHeight: "32em", overflow: "none" }}
              >
                <Box className="flex flex-col items-end">
                  <div className="flex gap-3 items-center">
                    <AiOutlineStar
                      style={{ color: isFavorite ? "#F0CF65" : "white" }}
                      className="text-4xl text-red cursor-pointer"
                      onClick={() => setIsFavorite(!isFavorite)}
                    />
                    <img
                      src={tensorLogo}
                      alt="tensorLogo"
                      className="w-8 h-8 rounded-full cursor-pointer"
                      onClick={() =>
                        window.open(
                          `https://www.tensor.trade/trade/${slug}`,
                          "_blank"
                        )
                      }
                    />
                    <img
                      src={magicEdenLogo}
                      alt="magicEden"
                      className="w-8 h-8 rounded-full cursor-pointer"
                      onClick={() =>
                        window.open(
                          `https://magiceden.io/marketplace/${slug}`,
                          "_blank"
                        )
                      }
                    />
                  </div>
                </Box>
              </Text>
              <CollectionData />
            </Box>
          )}
        </Box>
      </motion.div>
    </motion.div>
  );
};
