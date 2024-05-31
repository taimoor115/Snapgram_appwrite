import { Models } from "appwrite";

type PostStatProps = {
  userId: string;
  post: Models.Document;
};
const PostStat = ({ userId, post }: PostStatProps) => {
  return (
    <div className="flex justify-between items-center z-20">
      <div className="flex gap-2 mr-5">
        <img
          src="/assets/icons/like.svg"
          alt="like"
          height={20}
          width={20}
          className="cursor-pointer"
          onClick={() => {}}
        />
        <p className="small-medium lg:base-medium">0</p>
      </div>
      <div className="flex gap-2">
        <img
          src="/assets/icons/save.svg"
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
