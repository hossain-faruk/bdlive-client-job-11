import http from "@/services/http";

export const getAllChannels = async () => {
  const res = await http.get("/channels");
  return res.data.data;
};
