"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getChannels } from "@/features/channel/channel.slice";
import ChannelCard from "@/components/ui/ChannelCard";

export default function ChannelPage() {
  const dispatch = useDispatch();
  const { channels, loading } = useSelector((state) => state.channel);

  useEffect(() => {
    dispatch(getChannels());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="channel-grid">
      {channels.map((ch) => (
        <ChannelCard key={ch._id} channel={ch} />
      ))}
    </div>
  );
}
