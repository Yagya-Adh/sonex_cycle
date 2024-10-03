interface ISectionHead {
  sectionName: string;
  linkName?: string;
  linkTextColor?: string;
}

const SectionHead = ({
  sectionName,
  linkName,
  linkTextColor,
}: ISectionHead) => {
  return (
    <div className="max-w-screen-2xl mx-auto px-10 py-5">
      <div className="flex justify-between">
        <h1 className="text-5xl font-extrabold font-sonexFamily tracking-tighter max-w-20 ">
          {sectionName}
        </h1>

        {linkName && (
          <button
            className={`font-bold text-sm underline ${
              linkTextColor ? linkTextColor : "text-black"
            }`}
          >
            {linkName}
          </button>
        )}
      </div>
    </div>
  );
};

export default SectionHead;
