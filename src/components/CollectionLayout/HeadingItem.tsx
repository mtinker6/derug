import { Heading, Text } from "@primer/react";
import dayjs from "dayjs";
import React, { FC } from "react";
import Countdown from "react-countdown";
const HeadingItem: FC<{
  title: string;
  amount?: number | string;
  desc?: string;
  descColor: string;
  isCounter?: boolean;
  date?: Date;
}> = ({ title, amount, desc, descColor, isCounter, date }) => {
  return (
    <Heading className="flex flex-row items-center justify-between w-full">
      <Text
        className="text-sm border-1 p-2 w-1/2"
        sx={{
          fontFamily: "monospace",
          color: "white",
          fontWeight: 200,
          border: "1px solid rgba(9,194,246,.15)",
          "@media (max-width: 768px)": {
            fontSize: "0.6rem",
          },
        }}
      >
        {title}
      </Text>
      {!isCounter ? (
        <Text
          className="text-sm p-2 w-1/2 "
          sx={{
            fontFamily: "monospace",
            border: "1px solid rgba(9,194,246,.15)",
            color: "rgba(9,194,246)",
            "@media (max-width: 768px)": {
              fontSize: "0.6rem",
            },
          }}
        >
          {amount} <span>{desc}</span>
        </Text>
      ) : (
        <div
          className="flex w-1/2 items-center justify-center"
          style={{
            border: "1px solid rgb(154 52 18)",
          }}
        >
          <Countdown
            className="font-mono text-sm
   text-orange-800 p-2"
            date={date}
          />
        </div>
      )}
    </Heading>
  );
};

export default HeadingItem;
