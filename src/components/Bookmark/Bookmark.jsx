function Bookmark({ bookmark }) {
  const { title } = bookmark;
  return (
    <div className="bg-white p-5 rounded-lg mb-4">
      <h2 className="text-[18px]">{title}</h2>
    </div>
  );
}

export default Bookmark;
