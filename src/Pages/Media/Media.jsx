import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";

const Media = () => {
  const { data: posts = [] } = useQuery({
    queryKey: ["posts"],
    queryFn: () =>
      fetch("https://purple-media-server-mu.vercel.app/allposts").then((res) => res.json()),
  });
  return (
    <div className="bg-[#4267B2]">
      <h1 className="text-4xl text-white pt-5 pb-10 font-bold text-center">
        See all the {posts.length} Posts here
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-3">
        {posts.map((post) => (
          <PostCard key={post._id} post={post}></PostCard>
        ))}
      </div>
    </div>
  );
};

export default Media;
