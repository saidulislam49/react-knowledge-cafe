import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3">
      <div className="bg-purple-200 border-2 border-purple-400 rounded-md p-7 ml-6 mb-5">
        <h4 className="text-2xl">Spent time on read : {readingTime} min</h4>
      </div>
      <div className="bg-gray-200 rounded-md p-7 ml-6">
        <h2 className="text-3xl mb-4">Bookmarks: {bookmarks.length}</h2>
        <div>
          {bookmarks.map((bookmark) => (
            <Bookmark key={bookmark} bookmark={bookmark}></Bookmark>
          ))}
        </div>
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.object.isRequired,
  readingTime: PropTypes.object,
}
 
export default Bookmarks;
