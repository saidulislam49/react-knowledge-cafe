import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks }) => {
  return (
    <div className="md:w-1/3">
      <h2 className="text-3xl">Bookmarks: {bookmarks.length}</h2>

      <div>
        {bookmarks.map((bookmark) => (
          <Bookmark key={bookmark} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;
