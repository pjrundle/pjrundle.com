export const GalleryLoadingIndicator = () => {
  return (
    <div className="grid grid-cols:3 grid-cols:4@sm grid-cols:3@lg gap:2x @skeleton-loading|ease-in|900ms|infinite|alternate {bg:color-gray-150;aspect:16/9}_:where(span)">
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
    </div>
  );
};
