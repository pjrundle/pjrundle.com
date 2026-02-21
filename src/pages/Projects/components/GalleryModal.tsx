import { IconButton } from "@theme-os/react";
import { PDialog } from "@theme-os/react-primitives";
import { cn } from "@theme-os/utils";
import { useEffect, useRef } from "react";
import { HiX } from "react-icons/hi";

import { useStepper } from "../../../temp/useStepper.ts";
import { TGalleryItemImage } from "./Gallery.tsx";

const sharedIconButtonProps = {
  className: cn(
    "z:1",
    "bg:color-gray-0!",
    "transition:opacity|0.3s|0.3s|linear",
  ),
  style: {
    opacity: 0,
    position: "fixed",
  },
} as const;

export const GalleryModal = ({
  isOpen,
  closeFn,
  items,
  initialIndex = 0,
  loop = true,
}: {
  isOpen: boolean;
  closeFn: () => void;
  items: TGalleryItemImage[];
  initialIndex?: number;
  loop?: boolean;
}) => {
  const stepper = useStepper({
    count: items.length,
    initialIndex,
    loop,
  });

  const refPrevButton = useRef<HTMLButtonElement>(null);
  const refNextButton = useRef<HTMLButtonElement>(null);

  const currentItem = items[stepper.index];

  useEffect(() => {
    if (isOpen) {
      stepper.setIndex(initialIndex);
    }
  }, [isOpen, initialIndex]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      const isLeft = e.key === "ArrowLeft";
      const isRight = e.key === "ArrowRight";

      const willHandle =
        (isLeft && !stepper.atStart) || (isRight && !stepper.atEnd);

      if (!willHandle) return;

      e.preventDefault();

      if (isLeft) {
        stepper.prev();
        refPrevButton.current?.focus();
      } else if (isRight) {
        stepper.next();
        refNextButton.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, stepper.atStart, stepper.atEnd, stepper.prev, stepper.next]);

  return (
    <PDialog
      withOverlay={true}
      isOpen={isOpen}
      closeFn={closeFn}
      autoFocus="last"
      classNameChildrenWrapper="dark-mode"
      closeOnClickOutside={false}
    >
      <IconButton
        icon={HiX}
        onClick={closeFn}
        aria-label="Close"
        style={sharedIconButtonProps.style}
        className={cn(
          sharedIconButtonProps.className,
          "top:8x right:6x",
          isOpen && "opacity:1!",
        )}
      />

      <div className="w:100vw h:100vh py:26x px:6x p:20x@sm flex align-items:stretch justify-content:center">
        <div className="w:full max-w:1440px rel user-select:none">
          <img
            key={currentItem.src}
            src={currentItem.src}
            alt={currentItem.alt}
            className="abs-center max-h:100% max-w:100% b:1px|solid|color-alpha-200"
            style={{ opacity: 0, transition: "opacity 0.2s" }}
            onLoad={(e) => (e.currentTarget.style.opacity = "1")}
            onClick={(e) => {
              e.stopPropagation();
              stepper.next();
            }}
          />
        </div>
      </div>

      <IconButton
        ref={refPrevButton}
        icon="arrowLeft"
        onClick={stepper.prev}
        disabled={stepper.atStart}
        aria-label="Previous"
        style={sharedIconButtonProps.style}
        className={cn(
          sharedIconButtonProps.className,
          "bottom:8x left:6x {top:50%;transform:translateY(-50%)}@sm",
          isOpen && "opacity:1!",
        )}
      />

      <IconButton
        ref={refNextButton}
        icon="arrowRight"
        onClick={stepper.next}
        disabled={stepper.atEnd}
        aria-label="Next"
        style={sharedIconButtonProps.style}
        className={cn(
          sharedIconButtonProps.className,
          "bottom:8x right:6x {top:50%;transform:translateY(-50%)}@sm",
          isOpen && "opacity:1!",
        )}
      />

      {currentItem.alt && (
        <div className="abs-center-x w:50% t:center bottom:8x typestyle-copy f:11">
          {currentItem.alt}
        </div>
      )}
    </PDialog>
  );
};
