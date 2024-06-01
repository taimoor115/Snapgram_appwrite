import {
  useDeletePost,
  useLikePost,
  useSavePost,
} from "@/lib/react-query/queriesAndMutations";
import { checkIsLiked } from "@/lib/utils";
import { Models } from "appwrite";
import { useState } from "react";

type PostStatProps = {
  userId: string;
  post: Models.Document;
};
const PostStat = ({ userId, post }: PostStatProps) => {
  const likesList = post.likes.map((user: Models.Document) => user.$id);
  const [likes, setLikes] = useState(likesList);
  const [isSaved, setIsSaved] = useState(false);
  const { mutate: likePost } = useLikePost();
  const { mutate: savedPost } = useSavePost();
  const { mutate: deleteSavedPost } = useDeletePost();

  const handleLikePost = (e: React.MouseEvent) => {
    e.stopPropagation();
    let newLikes = [...likes];
    const hasLiked = newLikes.includes(userId);

    if (hasLiked) {
      newLikes = newLikes.filter((id) => id !== userId);
    } else {
      newLikes.push(userId);
    }

    setLikes(newLikes);
    likePost({ postId: post.$id, likesArray: newLikes });
  };

  const handleSavePost = () => {};

  return (
    <div className="flex justify-between items-center z-20">
      <div className="flex gap-2 mr-5">
        <img
          src={`${
            checkIsLiked(likesList, userId)
              ? "/assets/icons/liked.svg"
              : "/assets/icons/like.svg"
          }`}
          alt="like"
          height={20}
          width={20}
          className="cursor-pointer"
          onClick={handleLikePost}
        />
        <p className="small-medium lg:base-medium">{likes.length}</p>
      </div>
      <div className="flex gap-2">
        <img
          src={`${
            isSaved ? "/assets/icons/saved.svg" : "/assets/icons/save.svg"
          }`}
          alt="save"
          height={20}
          width={20}
          className="cursor-pointer"
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export default PostStat;
