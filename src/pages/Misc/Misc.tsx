import { Button, SelectNative, TextModule } from "@theme-os/react";
import { cn } from "@theme-os/utils";
import { useImmer } from "use-immer";

import { PageHatched } from "../../components/PageHatched.tsx";

// From client:
// Hi both. I'm thinking something like this could work. What do you think?

// I am looking for a (Job Title)
// [Partner, Managing Associate, Senior Associate, Associate, Patent Scientist, Trainee Solicitor, Executive Paralegal, Litigation Paralegal, Paralegal]
// in (Service)
// [Patenting | Litigation | Consulting]
// based in (Location)
// [London, Stockholm, Düsseldorf, Denver, Leeds, Cardiff, Bath].

// I'd like strategic advice focused on (Technologies)
// [Life Sciences | Medtech and Healthcare | Energy | Chemistry and Pharmaceuticals | Engineering | Digital | Semiconductors, electronics and photonics | Quantum technology | (Bio)Pharmaceuticals | Data, open source, software and AI] or Specialism [Oppositions and Challenges | Hybrid intelligence | Design | IP strategy | AI enablement].

const Form = ({
  formData,
  onInputChange,
  className,
  classNameButton,
}: {
  formData: {
    jobTitle: string;
    serviceType: string;
    location: string;
    industry: string;
  };
  onInputChange: (key: keyof typeof formData, value: string) => void;
  className?: string;
  classNameButton?: string;
}) => {
  return (
    <div className={className}>
      <SelectNative
        label="Job Title"
        id="job-title"
        value={formData.jobTitle}
        onChange={(value) => onInputChange("jobTitle", value)}
        options={[
          "Partner",
          "Managing Associate",
          "Senior Associate",
          "Associate",
          "Patent Scientist",
          "Trainee Solicitor",
          "Executive Paralegal",
          "Litigation Paralegal",
          "Paralegal",
        ]}
      />
      <SelectNative
        label="Service Type"
        id="service-type"
        value={formData.serviceType}
        onChange={(value) => onInputChange("serviceType", value)}
        options={["Patenting", "Litigation", "Consulting"]}
      />
      <SelectNative
        label="Location"
        id="location"
        value={formData.location}
        onChange={(value) => onInputChange("location", value)}
        options={[
          "London",
          "Stockholm",
          "Düsseldorf",
          "Denver",
          "Leeds",
          "Cardiff",
          "Bath",
        ]}
      />
      <SelectNative
        label="Industry"
        id="industry"
        value={formData.industry}
        onChange={(value) => onInputChange("industry", value)}
        options={[
          "Life Sciences",
          "Medtech and Healthcare",
          "Energy",
          "Chemistry and Pharmaceuticals",
          "Engineering",
          "Digital",
          "Semiconductors, electronics and photonics",
          "Quantum technology",
          "(Bio)Pharmaceuticals",
          "Data, open source, software and AI",
        ]}
      />
      <Button label="Search" className={classNameButton} variant="solid" />
    </div>
  );
};

const OutputText = ({
  formData,
  className,
}: {
  formData: {
    jobTitle: string;
    serviceType: string;
    industry: string;
    location: string;
  };
  className?: string;
}) => {
  const isEmptyFormData = Object.values(formData).every(
    (value) => value === "",
  );

  if (isEmptyFormData) {
    return null;
  }

  return (
    <div
      className={cn(
        "typestyle-heading leading:1.1 color:color-gray-400",
        className,
      )}
    >
      I’m looking for a{" "}
      <span className="color:color-gray-500">{formData.jobTitle}</span> in{" "}
      <span className="color:color-gray-500">{formData.serviceType}</span>{" "}
      specializing in{" "}
      <span className="color:color-gray-500">{formData.industry}</span> based in{" "}
      <span className="color:color-gray-500">{formData.location}</span>
    </div>
  );
};

const DummyContent = ({
  children,
  withHero = false,
  withBorderTop = true,
}: {
  children: React.ReactNode;
  withHero?: boolean;
  withBorderTop?: boolean;
}) => {
  return (
    <>
      {withHero && (
        <section
          className={cn(
            "blockpad-lg-y px:16x t:center",
            withBorderTop && "bt:border-b",
          )}
        >
          <TextModule
            className="max-w:60% mx:auto"
            variant="block.hero"
            heading="Something Killer"
            copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </section>
      )}

      {children}

      <section className="blockpad-lg-y px:16x bt:border-b">
        <TextModule
          className="max-w:60%"
          variant="block.minor"
          heading="Just Filler"
          copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </section>
    </>
  );
};

export const MiscPage = () => {
  const [formData, setFormaData] = useImmer({
    jobTitle: "Partner",
    serviceType: "Patenting",
    location: "London",
    industry: "Life Sciences",
  });

  const onInputChange = (key: keyof typeof formData, value: string) => {
    setFormaData((draft) => {
      draft[key] = value;
    });
  };

  return (
    <PageHatched>
      <DummyContent withBorderTop={false} withHero={true}>
        <section className="blockpad-lg-y px:16x bt:border-b bg:color-gray-0">
          <div className="flex justify-content:space-between align-items:end bb:border-b pb:6x">
            <TextModule
              variant="block.feature"
              heading="Find your match"
              overline="Version 1.0"
            />
            <TextModule
              className="max-w:60%"
              variant="block.feature"
              copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </div>

          <Form
            formData={formData}
            onInputChange={onInputChange}
            className="grid grid-cols:3 gap-x:6x gap-y:2x mt:8x align-items:end f:14"
            classNameButton="grid-col-span:2"
          />

          <OutputText
            formData={formData}
            className="f:display-lg mt:20x bl:4px|solid|color-gray-200 pl:7x"
          />
        </section>
      </DummyContent>

      <DummyContent withBorderTop={false}>
        <section className="blockpad-lg-y px:16x bt:border-b bg:color-gray-0">
          <div className="flex justify-content:space-between align-items:end bb:border-b pb:6x">
            <TextModule
              variant="block.feature"
              heading="Find your match"
              overline="Version 1.1"
            />
            <TextModule
              className="max-w:60%"
              variant="block.feature"
              copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </div>

          <Form
            formData={formData}
            onInputChange={onInputChange}
            className="grid grid-cols:2 gap-x:6x gap-y:2x mt:8x align-items:end f:14"
            classNameButton="grid-col-span:2 mt:5x"
          />

          <OutputText
            formData={formData}
            className="f:display-lg mt:20x bl:4px|solid|color-gray-200 pl:7x"
          />
        </section>
      </DummyContent>

      <DummyContent withBorderTop={false}>
        <section className="blockpad-lg-y px:16x bt:border-b bg:color-gray-0">
          <div className="flex justify-content:space-between align-items:end bb:border-b pb:6x">
            <TextModule
              variant="block.feature"
              heading="Find your match"
              overline="Version 1.2"
            />
            <TextModule
              className="max-w:60%"
              variant="block.feature"
              copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </div>

          <Form
            formData={formData}
            onInputChange={onInputChange}
            className="grid grid-cols:2 gap-x:6x gap-y:2x mt:8x align-items:end f:14"
            classNameButton="hidden!"
          />

          <OutputText
            formData={formData}
            className="f:display-lg mt:10x bl:4px|solid|color-gray-200 pl:7x"
          />

          <div className="flex justify-content:end bt:border-b mt:12x pt:4x">
            <Button label="Search" variant="solid" className="wfull" />
          </div>
        </section>
      </DummyContent>

      <DummyContent withBorderTop={false}>
        <section className="blockpad-lg-y px:16x bt:border-b bg:color-gray-0">
          <div className="flex justify-content:space-between align-items:end bb:border-b pb:6x">
            <TextModule
              variant="block.feature"
              heading="Find your match"
              overline="Version 1.3"
            />
            <TextModule
              className="max-w:60%"
              variant="block.feature"
              copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </div>

          <Form
            formData={formData}
            onInputChange={onInputChange}
            className="grid grid-cols:2 gap-x:6x gap-y:2x mt:8x align-items:end f:14"
            classNameButton="hidden!"
          />

          <OutputText
            formData={formData}
            className="f:display-lg mt:10x bl:4px|solid|color-gray-200 pl:7x"
          />

          <Button label="Search" className="w:full mt:10x" />
        </section>
      </DummyContent>

      <DummyContent>
        <section className="blockpad-lg-y px:16x bt:border-b bg:color-gray-0">
          <div className="flex justify-content:space-between align-items:end bb:border-b pb:6x">
            <TextModule
              variant="block.feature"
              heading="Find your match"
              overline="Version 2.0"
            />
            <TextModule
              className="max-w:60%"
              variant="block.feature"
              copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </div>

          <div className="flex gap-x:14x align-items:start mt:12x">
            <Form
              formData={formData}
              onInputChange={onInputChange}
              className="grid grid-cols:1 gap-y:2x f:14 min-w:40%"
              classNameButton="mt:4x"
            />
            <OutputText
              formData={formData}
              className="f:display-lg br:4px|solid|color-gray-200 pr:7x mt:3.5x t:right"
            />
          </div>
        </section>
      </DummyContent>

      <DummyContent>
        <section className="blockpad-lg-y px:16x bt:border-b bg:color-gray-0">
          <div className="flex justify-content:space-between align-items:end bb:border-b pb:6x">
            <TextModule
              variant="block.feature"
              heading="Find your match"
              classNameHeading="f:60px"
              overline="Version 2.1"
            />
            <TextModule
              className="max-w:60% mb:2x"
              variant="block.feature"
              copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </div>

          <div className="flex gap-x:14x align-items:start mt:12x">
            <Form
              formData={formData}
              onInputChange={onInputChange}
              className="grid grid-cols:1 gap-y:2x f:14 min-w:40%"
              classNameButton="mt:4x"
            />
            <OutputText
              formData={formData}
              className="f:display-lg br:4px|solid|color-gray-200 pr:7x mt:2.5x t:right"
            />
          </div>
        </section>
      </DummyContent>
    </PageHatched>
  );
};
