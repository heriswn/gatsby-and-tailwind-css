import React from "react";

const Backtotop = () => {

  return (
    <>
      {/* Back to top Start */}
      <a
        id="to-top"
        href="#home"
        className="fixed bottom-4 right-4 z-[9999] hidden h-14 w-14 items-center justify-center rounded-full bg-primary p-4 hover:animate-pulse"
      >
        <span className="mt-2 block h-5 w-5 rotate-45 border-t-2 border-l-2" />
      </a>
      {/* Back to top End */}
    </>
  );
};

export default Backtotop;
