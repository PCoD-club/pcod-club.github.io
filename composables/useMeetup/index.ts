import { Ref } from "nuxt3/dist/app/compat/capi";
import MeetupGroup from "./meetup";
import * as Response from "./response";

export default function (
  url: URL | string = "/api/meetup",
  body?: any
): Ref<MeetupGroup> {
  const resp = useFetch<Response.GroupResponse>(url.toString(), {
    method: "POST",
    body: body,
  });
  return computed(() => new MeetupGroup(resp.data.value.data.group));
}
