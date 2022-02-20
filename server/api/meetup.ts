import type { IncomingMessage, ServerResponse } from "http";
import { assertMethod, useBody } from "h3";
import axios, { AxiosError } from "axios";
import config from "#config";
import _ from "lodash";

const defaultQuery = `
query ($groupId: ID) {
  group(id: $groupId) {
    id
    name
    description
    link
    logo {
      baseUrl
      id
    }
    memberships {
      count
    }
    upcomingEvents(input: {}) {
      edges {
        node {
          id
          title
          eventUrl
          description
          eventType
          venue {
            name
            address
            city
            state
            postalCode
          }
          dateTime
          going
          image {
            baseUrl
            id
          }
        }
      }
    }
  }
}`;

export default async (req: IncomingMessage, res: ServerResponse) => {
  assertMethod(req, "POST");
  const body = (await useBody(req)) || {};
  body.query ||= defaultQuery;
  body.variables = _.defaults(body.variables || {}, {
    groupId: config.MEETUP_GROUP_ID,
  });
  try {
    return (await axios.post(config.MEETUP_GQL, body)).data;
  } catch (_e) {
    const err: AxiosError = _e;
    res.statusCode = err.response.status;
    return err.response.data;
  }
};
