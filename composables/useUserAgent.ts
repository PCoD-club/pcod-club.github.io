import UAParser from "ua-parser-js";

export default function () {
  const ua =
    useRequestHeaders(["user-agent"])["user-agent"] ?? navigator.userAgent;
  return UAParser(ua);
}
