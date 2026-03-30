import {
  Button,
  Card,
  Checkbox,
  EXAMPLE_UI_OPTIONS,
  Input,
  SegmentedControl,
  SelectNative,
  Switch,
} from "@theme-os/react";
import { cn } from "@theme-os/utils";
import { useState } from "react";
import { HiMapPin } from "react-icons/hi2";

import { NotificationInline } from "./components/NotificationInline.tsx";

export const AssetRow = ({
  title,
  children,
  withBorderTop = true,
  className,
}: {
  title: string;
  children: React.ReactNode;
  withBorderTop?: boolean;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "p:4x",
        withBorderTop && "bt:1px|solid|color-gray-150",
        className,
      )}
    >
      <div className="typestyle-meta f:8 f:9@xl mb:2x">{title}</div>
      {children}
    </div>
  );
};

export default function ThemeOSHeroAsset() {
  const [switch1IsOn, setSwitch1IsOn] = useState(true);
  const [switch2IsOn, setSwitch2IsOn] = useState(true);
  const [checked, setIsChecked] = useState(true);
  const [segmentedControlValue, setSegmentedControlValue] = useState("option2");
  const [isOpenB, setIsOpenB] = useState(true);
  const [activeB, setActiveB] = useState("home");

  return (
    <div
      className={cn(
        "abs inset:0 flex align-items:center justify-content:center",
        "background-image:linear-gradient(to|bottom|right,color-gray-150,color-gray-0,color-gray-150)",
      )}
    >
      <div className="rel grid grid-cols:3 gap:7x transform:scale(0.8) rel">
        <div className="abs right:0 left:0 top:-30% bottom:-30% pointer-events:none">
          <span className="bl:1px|dashed|color-gray-200 abs top:0 bottom:0 left:-2%" />
          <span className="bl:1px|dashed|color-gray-200 abs top:0 bottom:0 left:32.8%" />
          <span className="bl:1px|dashed|color-gray-200 abs top:0 bottom:0 left:67.1%" />
          <span className="bl:1px|dashed|color-gray-200 abs top:0 bottom:0 right:-1.9%" />
        </div>

        <div className="flex flex-col gap:10x">
          <Card
            label="Card"
            heading="Card Heading"
            prose="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            // className="max-w:400px"
            elevation="floating"
            radius="lg"
            intent="accent"
          />
        </div>

        <div className="f:10 flex flex-col gap:4x">
          <Button label="Submit" variant="solid" accentColor="brand.a" />
          <Button label="Submit" variant="solid" accentColor="brand.b" />
          <Button label="Submit" variant="solid" accentColor="brand.c" />
          {/* <div className="r:radius-default p:4x b:1px|solid|color-gray-200 shadow:shadow-md mt:4x bg:color-gray-0">
            <CodeBlock
              code={`
export const themeOsStore = initThemeOs({ initialTokens: designSystemTokens });

export function App() {
  return (
    <ThemeOsProvider store={themeOsStore}>
      <div>Hello, world!</div>
      <Button label="Submit" variant="solid" accentColor="brand.a" />
    </ThemeOsProvider>
  );
}
              `}
              language="tsx"
            />
          </div> */}
        </div>

        <div className="flex flex-col gap:4x f:10">
          <Input
            label="Name"
            id="name"
            placeholder="Pete Rundle"
            value="Pete Rundle"
          />
          <SelectNative
            label="Location"
            id="location"
            icon={HiMapPin}
            options={["Brighton, UK", "New York, USA", "Tokyo, Japan"]}
          />
          <SegmentedControl
            label="Days in Office"
            id="days-in-office"
            value={segmentedControlValue}
            onChange={(value) => setSegmentedControlValue(value)}
            options={EXAMPLE_UI_OPTIONS}
          />
          <NotificationInline
            intent="info"
            heading="Info"
            copy="This is an info notification"
            button={{ label: "Close" }}
          />

          {/* <div>
            <Menu.Root isOpen={isOpenB} setIsOpen={setIsOpenB}>
              <Menu.Trigger>
                <Button label="Open Menu" icon="chevronDown" className="f:11" />
              </Menu.Trigger>

              <Menu.Content
                className="f:10 w:150px"
                closeOnItemClick={false}
                items={[
                  {
                    label: "Home",
                    icon: HiHome,
                    onClick: () => setActiveB("home"),
                    isActive: activeB === "home",
                  },
                  {
                    label: "About",
                    icon: HiUser,
                    onClick: () => setActiveB("about"),
                    isActive: activeB === "about",
                  },
                  {
                    label: "Contact",
                    icon: HiMail,
                    onClick: () => setActiveB("contact"),
                    isActive: activeB === "contact",
                  },
                ]}
              />
            </Menu.Root>
          </div> */}
        </div>
        <div className="f:10 f:11@lg w:full flex gap-x:4x align-items:start">
          <Switch
            ariaLabel="Example Switch"
            isOn={switch1IsOn}
            toggleIsOn={() => setSwitch1IsOn(!switch1IsOn)}
            accentColor="brand.a"
            className="w:auto"
          />
          <Switch
            ariaLabel="Example Switch"
            isOn={switch2IsOn}
            toggleIsOn={() => setSwitch2IsOn(!switch2IsOn)}
            accentColor="brand.c"
            className="w:auto"
          />
          <div>
            <Checkbox
              ariaLabel="Example Checkbox"
              isChecked={checked}
              accentColor="brand.b"
              onChange={() => setIsChecked(!checked)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
