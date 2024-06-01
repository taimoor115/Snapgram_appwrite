import {
  useDeletePost,
  useGetCurrentUser,
  useLikePost,
  useSavePost,
} from "@/lib/react-query/queriesAndMutations";
import { checkIsLiked } from "@/lib/utils";
import { Models } from "appwrite";
import { useEffect, useState } from "react";
import Loader from "./Loader";

type PostStatProps = {
  userId: string;
  post?: Models.Document;
};
const PostStat = ({ userId, post }: PostStatProps) => {
  const likesList = post?.likes.map((user: Models.Document) => user.$id);
  const [likes, setLikes] = useState<string[]>(likesList);
  const [isSaved, setIsSaved] = useState(false);
  const { mutate: likePost } = useLikePost();
  const { mutate: savedPost, isPending: isSavingPost } = useSavePost();
  const { mutate: deleteSavedPost, isPending: isDeletingPost } =
    useDeletePost();
  const { data: currentUser } = useGetCurrentUser();
  const savedPostRecord = currentUser?.save.find(
    (record: Models.Document) => record.post.$id === post?.$id
  );
  useEffect(() => {
    setIsSaved(!!savedPostRecord);
  }, [currentUser]);

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
    likePost({ postId: post?.$id || "", likesArray: newLikes });
  };

  const handleSavePost = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (savedPostRecord) {
      setIsSaved(false);
      deleteSavedPost(savedPostRecord.$id);
    } else {
      savedPost({ postId: post?.$id || "", userId });
      setIsSaved(true);
    }
  };

  console.log(checkIsLiked(likesList, userId));

  return (
    <div className="flex justify-between items-center z-20">
      <div className="flex gap-2 mr-5">
        <img
          src={
            checkIsLiked(likes, userId)
              ? "/assets/icons/liked.svg"
              : "/assets/icons/like.svg"
          }
          alt="like"
          height={20}
          width={20}
          className="cursor-pointer"
          onClick={(e) => {
            handleLikePost(e);
            console.log("hello");
          }}
        />
        <p className="small-medium lg:base-medium">{likes.length}</p>
      </div>
      <div className="flex gap-2">
        {isDeletingPost || isSavingPost ? (
          <Loader />
        ) : (
          <img
            src={`${
              isSaved ? "/assets/icons/saved.svg" : "/assets/icons/save.svg"
            }`}
            alt="save"
            height={20}
            width={20}
            className="cursor-pointer"
            onClick={(e) => handleSavePost(e)}
          />
        )}
      </div>
    </div>
  );
};

export default PostStat;
