export default function View({ children }) {
  return (
    <>
      <div className={`col-sm-12 col-md-9 col-10 p-0 h-auto`}>
        {children}
      </div>
    </>
  );
}
