export const ArticleLoadingIndicator = () => {
  return (
    <div className="flex flex-col gap:1.5em max-w:620px @skeleton-loading|ease-in|900ms|infinite|alternate {bg:color-gray-150;r:radius-full;p:0.5em}_:where(span)">
      <span className="w:full p:0.8em!" />
      <div className="flex flex-col gap:0.5em">
        <span className="w:80% p:0.5em" />
        <span className="w:70% p:0.5em" />
        <span className="w:75% p:0.5em" />
        <span className="w:70% p:0.5em" />
      </div>
      <div className="flex flex-col gap:0.5em">
        <span className="w:60% p:0.5em" />
        <span className="w:70% p:0.5em" />
        <span className="w:60% p:0.5em" />
        <span className="w:65% p:0.5em" />
      </div>
      <div className="flex flex-col gap:0.5em">
        <span className="w:80% p:0.5em" />
        <span className="w:70% p:0.5em" />
        <span className="w:80% p:0.5em" />
        <span className="w:70% p:0.5em" />
      </div>
      <div className="flex flex-col gap:0.5em">
        <span className="w:60% p:0.5em" />
        <span className="w:70% p:0.5em" />
        <span className="w:60% p:0.5em" />
        <span className="w:65% p:0.5em" />
      </div>
    </div>
  );
};
