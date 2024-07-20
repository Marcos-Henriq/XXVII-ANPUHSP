import React from "react";
import Header from "../header/header";

interface PageDefaultProps {
  title: string;
  backPath?: string;
  children: React.ReactNode;
}

const PageDefault: React.FC<PageDefaultProps> = ({
  title,
  backPath,
  children,
}) => {
  const isBasePage = backPath === undefined;
  const margin = isBasePage ? 76 : 65;

  return (
    <div>
      <Header title={title} />
      <main style={{ marginTop: margin }}>{children}</main>
    </div>
  );
};



export default PageDefault;
