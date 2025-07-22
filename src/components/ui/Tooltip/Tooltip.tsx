import React from "react";

type Props = {
  children: React.ReactNode;
  content: string;
};

const Tooltip = ({ children, content }: Props) => {
  return (
    <div className="tooltip tooltip-top">
      <div className="tooltip-content max-w-[250px]" style={{ zIndex: 99999 }}>
        <div
          className="font-black"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </div>
      {children}
    </div>
  );
};

export default Tooltip;
