const container = ({ children }) => {
  return (
    <div className="Container max-w-[1550px] h-full mx-auto relative px-10">
      {children}
    </div>
  );
};

export default container;
