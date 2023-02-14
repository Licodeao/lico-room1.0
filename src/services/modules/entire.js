import liRequest from "..";

export function getEntireRoomList(offset = 0, size = 20) {
  return liRequest.get({
    url: "/entire/list",
    params: {
      offset,
      size
    }
  })
}