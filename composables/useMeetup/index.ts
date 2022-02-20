import { ComputedRef } from "nuxt3/dist/app/compat/capi";
import MeetupGroup from "./meetup";
import * as Response from "./response";

export default async function (
  url: URL | string = "/api/meetup",
  body?: any
): Promise<ComputedRef<MeetupGroup>> {
  const resp = await useFetch<Response.GroupResponse>(url.toString(), {
    method: "POST",
    body: body,
  });
  return computed(() => new MeetupGroup(resp.data.value.data.group));
}
