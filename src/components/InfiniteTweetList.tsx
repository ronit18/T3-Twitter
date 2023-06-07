import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

type Tweet = {
  id: string;
  createdAt: Date;
  content: string;
  likedByMe: boolean;
  likeCount: number;
  user: {
    id: string;
    image: string | null;
    name: string | null;
  };
};

type InfiniteTweetListProps = {
  isLoading: boolean;
  isError: boolean;
  hasMore: boolean;
  tweets: Tweet[];
  fetchNewTweets: () => Promise<unknown>;
};

const InfiniteTweetList = ({
  tweets,
  isError,
  isLoading,
  fetchNewTweets,
  hasMore,
}: InfiniteTweetListProps) => {
  if (isLoading) return <h1>Loading.....</h1>;
  if (isError) return <h1>Error.....</h1>;
  if (tweets == null) return null;
  if (tweets?.length == 0 || tweets == null) {
    return (
      <h2 className="my-4 text-center text-2xl text-gray-500">No Tweets</h2>
    );
  }
  console.log("tweets", tweets);
  return (
    <ul>
      <InfiniteScroll
        dataLength={tweets.length}
        next={fetchNewTweets}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
      >
        {/* {tweets.map((tweet) => {
          return <div key={tweet.id}>{tweet.content}</div>;
        })} */}
      </InfiniteScroll>
    </ul>
  );
};

export default InfiniteTweetList;
