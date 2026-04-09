import { Button, SelectNative, TextModule } from "@theme-os/react";
import { useState } from "react";

import { PageHatched } from "../../components/PageHatched.tsx";

export const MiscPage = () => {
  const [state, setState] = useState<"find-your-match" | "contact-us">(
    "find-your-match",
  );
  return (
    <PageHatched>
      <section className="blockpad-lg-y px:16x">
        <TextModule
          className="max-w:60%"
          variant="block.hero"
          heading="The quick brown fox jumps over the lazy dog"
          copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </section>

      <section className="blockpad-lg-y px:16x bt:border-b">
        <div className="flex justify-content:space-between bb:border-b pb:5x">
          <TextModule variant="block.hero" heading="Find your match" />
          <TextModule
            className="max-w:60%"
            variant="block.hero"
            copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>

        <div className="grid grid-cols:3 gap:6x mt:8x align-items:end">
          <SelectNative
            label="Select a topic"
            id="topic"
            options={["Topic 1", "Topic 2", "Topic 3"]}
          />
          <SelectNative
            label="Select a topic"
            id="topic"
            options={["Topic 1", "Topic 2", "Topic 3"]}
          />
          <SelectNative
            label="Select a topic"
            id="topic"
            options={["Topic 1", "Topic 2", "Topic 3"]}
          />
          <SelectNative
            label="Select a topic"
            id="topic"
            options={["Topic 1", "Topic 2", "Topic 3"]}
          />
          <Button label="Search" className="grid-col-span:2" />
        </div>
      </section>
    </PageHatched>
  );
};
