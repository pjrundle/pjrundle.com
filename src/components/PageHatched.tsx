export const PageHatched = ({
  children,
  as = "article",
}: {
  children: React.ReactNode;
  as?: "article" | "section";
}) => {
  const Tag = as;

  return (
    <Tag>
      <div className="page-gutter">
        <div className="page-container-lg pattern-diag px:7.5x pb:7.5x bb:border-b bx:border-b">
          <div className="bg:color-gray-25 bx:border-b bb:border-b pb:7.5x">
            {children}
          </div>
        </div>
      </div>
    </Tag>
  );
};
