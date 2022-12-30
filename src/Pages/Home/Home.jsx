import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../Context/AuthProvider";

const Home = () => {
  // const { data: userIn = [] } = useQuery({
  //   queryKey: ["userIn"],
  //   queryFn: () =>
  //     fetch("https://purple-media-server-mu.vercel.app/userinfo").then((res) => res.json()),
  // });

  const imageHostKey = '6e5dec7cfd34ab5c29cf48f980fd3e76';

  const { user } = useContext(AuthContext);
  console.log(user)
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const handleSub = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const post = {
            status: data.caption,
            image: imgData.data.url,
            email: user?.email,
            name: user?.displayName,
            likes: 0,
          };
          console.log(post);
          fetch("https://purple-media-server-mu.vercel.app/posts", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(post),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success("post uploaded");
              reset();
            });
        }
      });
  };

  return (
    <div className="bg-[#ffffff]">
      <h1 className="text-3xl font-bold text-center pt-5 pb-5">
        Add a Post 😃😃
      </h1>
      <p className="text-xl font-semibold text-center pt-3 pb-2 text-black">
        Hello👋 {user?.displayName}
      </p>
      <div className="h-[400px] flex justify-center  bg-[#ffffff] pb-5">
        <div className="w-96 p-7 border">
          <form onSubmit={handleSubmit(handleSub)} className=''>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text">Caption</span>
              </label>
              <input
                type="text"
                {...register("caption", {
                  required: "caption Address is required",
                })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.caption && (
                <p className="text-red-600">{errors.caption?.message}</p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text">Upload Image</span>
              </label>
              <input
                type="file"
                {...register("image", {
                  required: "image is required",
                })}
                className="file-input file-input-bordered file-input-warning w-full max-w-xs"
              />

              {errors.image && (
                <p className="text-red-600">{errors.image?.message}</p>
              )}
            </div>
            <input
              className="btn btn-accent w-full mt-5 bg-[#1B74E4] text-white hover:bg-[#1B74E4]"
              value="upload"
              type="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
