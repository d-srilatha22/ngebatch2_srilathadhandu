// Lambda code goes here

import { Context, APIGatewayProxyResult, APIGatewayEvent } from "aws-lambda";

export const gigsListHandler = async (
  event: APIGatewayEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  console.log("gigsListHandler invoked");
  console.log('event is', event);
  console.log('context is', context);
  console.log(`Best gig is ${process.env.FAVOURITE_GIG}`);
  const gigLocation = event.gigLocation || "NOT_SET";
  const gigId = event.gigId || "NOT_SET";
  console.log(`PARAMS: gigId = ${gigId}`);
  console.log(`PARAMS: gigLocation = ${gigLocation}`);
  return {
    statusCode: 200,
    body: JSON.stringify({
      list: ["Rolling Stones", "The Doors", "The Beatles"],
    }),
  };
};