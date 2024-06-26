import React from "react";
import serive from "../appwrite/config";
import { Link } from "react-router-dom";

const PostCard = ({ $id, title, featuredImage }) => {
  return (
    <div className="w-full bg-gray-100 rounded-xl p-4">
      <div className="w-full justify-center mb-4">
        <img
          src={serive.getFilePreview(featuredImage)}
          alt={title}
          className="rounded-xl"
        />
      </div>
      <h2 className="text-xl font-bold">{title}</h2>
    </div>
  );
};

export default PostCard;
