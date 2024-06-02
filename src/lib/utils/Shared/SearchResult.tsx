import { Models } from "appwrite";
import Loader from "./Loader";
import { searchPosts } from "@/lib/appwrite/api";
import GridPostList from "./GridPostList";

type SearchResultProps = {
  isSearchFetching: boolean;
  searchPosts: Models.Document[];
};
const SearchResult = ({ isSearchFetching, searchPosts }: SearchResultProps) => {
  if (isSearchFetching) {
    return <Loader />;
  }
  if (searchPosts && searchPosts?.documents.length > 0) {
    return <GridPostList posts={searchPosts?.documents} />;
  }
  return (
    <div>
      <p className="text-light-4 mt-10 text-center w-full">No results found</p>
    </div>
  );
};

export default SearchResult;
