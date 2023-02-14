import liRequest from "..";

export function getHomeGoodPriceData() {
  return liRequest.get({
    url: "/home/goodprice"
  })
}

export function getHomeHighScoreData() {
  return liRequest.get({
    url: "/home/highscore"
  })
}

export function getHomeDiscountData() {
  return liRequest.get({
    url: "/home/discount"
  })
}

export function getHomeHotRecommendData() {
  return liRequest.get({
    url: "/home/hotrecommenddest"
  })
}

export function getHomeLongForData() {
  return liRequest.get({
    url: '/home/longfor'
  })
}

export function getHomePlusData() {
  return liRequest.get({
    url: '/home/plus'
  })
}