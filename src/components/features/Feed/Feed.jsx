import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../../../utils/feedSlice";
import { useEffect, useState } from "react";
import axiosInstance from "../../../config/axiosInstance";
import UserCard from "../../Cards/UserCard";
import { motion, AnimatePresence } from "framer-motion";

import toast, { Toaster } from "react-hot-toast";  // <--- import toast
import EmptyFeed from "./EmptyFeed";
import FeedShimmer from "./FeedShimmer";

const Feed = () => {
  const user = useSelector((store) => store.user);
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();

  const [limit, setLimit] = useState(9);
  const [loading, setLoading] = useState(false);

  const getFeed = async () => {
    setLoading(true);
    try {
      const res = await axiosInstance.get(`/feed?limit=${limit}`);
      dispatch(addFeed(res?.data?.data));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
 // Only fetch feed if empty or limit changes
  useEffect(() => {
    if (!feed || feed.length < limit) {
      getFeed();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [limit]);

  const handleLoadMore = () => {
    setLimit((prev) => prev + 6);
    toast.success("More users loaded! 🎉", {
      position: "top-center",
      duration: 2500,
    });
  };

  if (!feed) return null;

 

  return (
    <div className="w-full px-4 py-6 bg-[#F8F3D9] min-h-screen">
      {/* Toast container */}
      <Toaster />

      {/* Welcome Message */}
      <motion.h1
        className="text-3xl font-semibold mb-6 text-center"
        style={{ color: "#504B38" }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        👋 Welcome back, {user?.firstName || "Dev"}!
      </motion.h1>

      {/* Message Div */}
      <motion.div
        className="max-w-xl text-lg font-bold mx-auto mb-8 px-6 py-4 rounded-lg shadow-md text-center"
        style={{
          backgroundColor: "#EBE5C2",
          color: "#504B38",
          border: "1.5px solid #E5DFB9",
          opacity: 0.9,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Here are some developers you might want to connect with. Feel free to explore and reach out!
      </motion.div>

        {/* Empty Feed Message */}
  {feed.length === 0 ? (
        <EmptyFeed />
      ) : (
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto"
        >
          <AnimatePresence>
            {feed.map((user) => (
              <motion.div
                layout
                key={user._id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="bg-[#EBE5C2] p-3 rounded-xl shadow-lg border border-[#E5DFB9]"
              >
                <UserCard user={user} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}

      {/* Show Load More only if there are potentially more users */}
      {feed.length >= limit && !loading && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleLoadMore}
            className="px-6 py-2 bg-[#B9B28A] text-white rounded hover:bg-[#A29D74] transition"
          >
            Load More
          </button>
        </div>
      )}

     {loading && <FeedShimmer />}

    </div>
  );
};

export default Feed;
