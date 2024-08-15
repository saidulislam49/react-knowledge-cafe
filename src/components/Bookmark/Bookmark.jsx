import PropTypes from "prop-types";

function Bookmark({ bookmark }) {
  const { title } = bookmark;
  return (
    <div className="bg-white p-5 rounded-lg mb-4">
      <h2 className="text-[18px]">{title}</h2>
    </div>
  );
}

Bookmark.proptypes = {
  bookmark: PropTypes.object.isRequired,
}
export default Bookmark;
