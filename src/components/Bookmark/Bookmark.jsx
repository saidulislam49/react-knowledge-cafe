function Bookmark({ bookmark }) {
  const { title } = bookmark;
  return (
    <div className="bg-slate-400">
      <h2 className="text-2xl">{title}</h2>
    </div>
  );
}

export default Bookmark;
