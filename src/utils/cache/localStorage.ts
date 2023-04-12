import cacheKey from "@/constants/cacheKey";

export const getSidebarStatus = () => {
  return localStorage.getItem(cacheKey.SIDEBAR_STATUS) || ""
}

export const setSidebarStatus = (siderbarStatus: "opened" | "closed") => {
  localStorage.setItem(cacheKey.SIDEBAR_STATUS, siderbarStatus)
}