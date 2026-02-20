import { systemFontStack, TThemeOsTokenSet } from "@theme-os/core";

export const tokenSet = {
  schemaVersion: "1.0.0",
  id: "pjrundle.com",
  defaultColorMode: "dark",
  vars: {
    color: {
      brand: {
        a: {
          dark: {
            "0": "oklch(13% 0.006 240)",
            "25": "oklch(15% 0.01 240)",
            "50": "oklch(17.5% 0.015 240)",
            "100": "oklch(20% 0.038 240)",
            "150": "oklch(24% 0.05 240)",
            "200": "oklch(28% 0.077 240)",
            "300": "oklch(40% 0.115 240)",
            "400": "oklch(44% 0.14 240)",
            "500": "oklch(48% 0.16 240)",
            "600": "oklch(52% 0.18 240)",
            "700": "oklch(74% 0.167 240)",
            "800": "oklch(80% 0.14 240)",
            "900": "oklch(95% 0.103 240)",
            "950": "oklch(99.5% 0.036 240)",
          },
          light: {
            "0": "oklch(99.5% 0.005 240)",
            "25": "oklch(98.6% 0.009 240)",
            "50": "oklch(97.1% 0.014 240)",
            "100": "oklch(95.75% 0.018 240)",
            "150": "oklch(93.5% 0.027 240)",
            "200": "oklch(86% 0.077 240)",
            "300": "oklch(74% 0.144 240)",
            "400": "oklch(64% 0.162 240)",
            "500": "oklch(58% 0.171 240)",
            "600": "oklch(52% 0.18 240)",
            "700": "oklch(50% 0.167 240)",
            "800": "oklch(46% 0.14 240)",
            "900": "oklch(36% 0.103 240)",
            "950": "oklch(25% 0.063 240)",
          },
        },
      },
      intent: {
        success: {
          dark: {
            "0": "oklch(13% 0.006 160)",
            "25": "oklch(15% 0.01 160)",
            "50": "oklch(17.5% 0.015 160)",
            "100": "oklch(20% 0.038 160)",
            "150": "oklch(24% 0.05 160)",
            "200": "oklch(28% 0.077 160)",
            "300": "oklch(40% 0.115 160)",
            "400": "oklch(44% 0.14 160)",
            "500": "oklch(48% 0.16 160)",
            "600": "oklch(52% 0.18 160)",
            "700": "oklch(74% 0.167 160)",
            "800": "oklch(80% 0.14 160)",
            "900": "oklch(95% 0.103 160)",
            "950": "oklch(99.5% 0.036 160)",
          },
          light: {
            "0": "oklch(99.5% 0.005 160)",
            "25": "oklch(98.6% 0.009 160)",
            "50": "oklch(97.1% 0.014 160)",
            "100": "oklch(95.75% 0.018 160)",
            "150": "oklch(93.5% 0.027 160)",
            "200": "oklch(86% 0.077 160)",
            "300": "oklch(74% 0.144 160)",
            "400": "oklch(64% 0.162 160)",
            "500": "oklch(58% 0.171 160)",
            "600": "oklch(52% 0.18 160)",
            "700": "oklch(50% 0.167 160)",
            "800": "oklch(46% 0.14 160)",
            "900": "oklch(36% 0.103 160)",
            "950": "oklch(25% 0.063 160)",
          },
        },
        info: {
          dark: {
            "0": "oklch(13% 0.006 240)",
            "25": "oklch(15% 0.01 240)",
            "50": "oklch(17.5% 0.015 240)",
            "100": "oklch(20% 0.038 240)",
            "150": "oklch(24% 0.05 240)",
            "200": "oklch(28% 0.077 240)",
            "300": "oklch(40% 0.115 240)",
            "400": "oklch(44% 0.14 240)",
            "500": "oklch(48% 0.16 240)",
            "600": "oklch(52% 0.18 240)",
            "700": "oklch(74% 0.167 240)",
            "800": "oklch(80% 0.14 240)",
            "900": "oklch(95% 0.103 240)",
            "950": "oklch(99.5% 0.036 240)",
          },
          light: {
            "0": "oklch(99.5% 0.005 240)",
            "25": "oklch(98.6% 0.009 240)",
            "50": "oklch(97.1% 0.014 240)",
            "100": "oklch(95.75% 0.018 240)",
            "150": "oklch(93.5% 0.027 240)",
            "200": "oklch(86% 0.077 240)",
            "300": "oklch(74% 0.144 240)",
            "400": "oklch(64% 0.162 240)",
            "500": "oklch(58% 0.171 240)",
            "600": "oklch(52% 0.18 240)",
            "700": "oklch(50% 0.167 240)",
            "800": "oklch(46% 0.14 240)",
            "900": "oklch(36% 0.103 240)",
            "950": "oklch(25% 0.063 240)",
          },
        },
        warning: {
          dark: {
            "0": "oklch(12% 0.02 43)",
            "25": "oklch(14% 0.04 43)",
            "50": "oklch(16% 0.06 43)",
            "100": "oklch(23% 0.08 43)",
            "150": "oklch(26% 0.1 43)",
            "200": "oklch(34% 0.12 43)",
            "300": "oklch(46% 0.17 43)",
            "400": "oklch(50% 0.18 43)",
            "500": "oklch(54% 0.19 43)",
            "600": "oklch(58% 0.2 43)",
            "700": "oklch(72% 0.2 43)",
            "800": "oklch(85% 0.2 43)",
            "900": "oklch(99% 0.2 43)",
            "950": "oklch(99.5% 0.07 43)",
          },
          light: {
            "0": "oklch(99.5% 0.01 43)",
            "25": "oklch(98.5% 0.02 43)",
            "50": "oklch(97.5% 0.04 43)",
            "100": "oklch(93% 0.06 43)",
            "150": "oklch(89% 0.09 43)",
            "200": "oklch(86% 0.15 43)",
            "300": "oklch(82% 0.18 43)",
            "400": "oklch(78% 0.19 43)",
            "500": "oklch(74% 0.19 43)",
            "600": "oklch(58% 0.2 43)",
            "700": "oklch(66% 0.19 43)",
            "800": "oklch(62% 0.18 43)",
            "900": "oklch(45% 0.16 43)",
            "950": "oklch(26% 0.12 43)",
          },
        },
        danger: {
          dark: {
            "0": "oklch(12% 0.012 17)",
            "25": "oklch(14% 0.024 17)",
            "50": "oklch(16% 0.03 17)",
            "100": "oklch(18% 0.036 17)",
            "150": "oklch(21% 0.048 17)",
            "200": "oklch(24% 0.072 17)",
            "300": "oklch(35% 0.15 17)",
            "400": "oklch(42% 0.18 17)",
            "500": "oklch(47% 0.21 17)",
            "600": "oklch(51% 0.24 17)",
            "700": "oklch(56% 0.222 17)",
            "800": "oklch(61% 0.18 17)",
            "900": "oklch(83% 0.12 17)",
            "950": "oklch(99.8% 0.048 17)",
          },
          light: {
            "0": "oklch(99.5% 0.009 17)",
            "25": "oklch(98.6% 0.024 17)",
            "50": "oklch(97.1% 0.03 17)",
            "100": "oklch(95.75% 0.06 17)",
            "150": "oklch(93.5% 0.09 17)",
            "200": "oklch(89% 0.12 17)",
            "300": "oklch(70% 0.15 17)",
            "400": "oklch(61% 0.18 17)",
            "500": "oklch(56% 0.21 17)",
            "600": "oklch(51% 0.24 17)",
            "700": "oklch(47% 0.222 17)",
            "800": "oklch(42% 0.18 17)",
            "900": "oklch(34% 0.12 17)",
            "950": "oklch(20% 0.06 17)",
          },
        },
      },
      gray: {
        dark: {
          "0": "oklch(14% 0 0)",
          "25": "oklch(17% 0 0)",
          "50": "oklch(18.5% 0 0)",
          "100": "oklch(21.5% 0 0)",
          "150": "oklch(22.5% 0 0)",
          "200": "oklch(30% 0 0)",
          "300": "oklch(40% 0 0)",
          "400": "oklch(48% 0 0)",
          "500": "oklch(62% 0 0)",
          "600": "oklch(72% 0 0)",
          "700": "oklch(82% 0 0)",
          "800": "oklch(90% 0 0)",
          "900": "oklch(95% 0 0)",
          "950": "oklch(99.5% 0 0)",
        },
        light: {
          "0": "oklch(100% 0 0)",
          "25": "oklch(98.75% 0 0)",
          "50": "oklch(97.25% 0 0)",
          "100": "oklch(96% 0 0)",
          "150": "oklch(94% 0 0)",
          "200": "oklch(90% 0 0)",
          "300": "oklch(78% 0 0)",
          "400": "oklch(68% 0 0)",
          "500": "oklch(58% 0 0)",
          "600": "oklch(48% 0 0)",
          "700": "oklch(36% 0 0)",
          "800": "oklch(31% 0 0)",
          "900": "oklch(25% 0 0)",
          "950": "oklch(20% 0 0)",
        },
      },
      alpha: {
        neutral: {
          light: {
            "0": "oklch(0% 0 0 / 0.025)",
            "25": "oklch(0% 0 0 / 0.025)",
            "50": "oklch(0% 0 0 / 0.025)",
            "100": "oklch(0% 0 0 / 0.05)",
            "150": "oklch(0% 0 0 / 0.075)",
            "200": "oklch(0% 0 0 / 0.075)",
            "300": "oklch(0% 0 0 / 0.1)",
            "400": "oklch(0% 0 0 / 0.2)",
            "500": "oklch(0% 0 0 / 0.3)",
            "600": "oklch(0% 0 0 / 0.4)",
            "700": "oklch(0% 0 0 / 0.5)",
            "800": "oklch(0% 0 0 / 0.6)",
            "900": "oklch(0% 0 0 / 0.7)",
            "950": "oklch(0% 0 0 / 0.8)",
          },
          dark: {
            "0": "oklch(100% 0 0 / 0.025)",
            "25": "oklch(100% 0 0 / 0.025)",
            "50": "oklch(100% 0 0 / 0.025)",
            "100": "oklch(100% 0 0 / 0.05)",
            "150": "oklch(100% 0 0 / 0.075)",
            "200": "oklch(100% 0 0 / 0.075)",
            "300": "oklch(100% 0 0 / 0.1)",
            "400": "oklch(100% 0 0 / 0.2)",
            "500": "oklch(100% 0 0 / 0.3)",
            "600": "oklch(100% 0 0 / 0.4)",
            "700": "oklch(100% 0 0 / 0.5)",
            "800": "oklch(100% 0 0 / 0.6)",
            "900": "oklch(100% 0 0 / 0.7)",
            "950": "oklch(100% 0 0 / 0.8)",
          },
        },
      },
    },
    border: {
      neutral: {
        a: {
          widthPx: 1,
          style: "solid",
          light: {
            color: "$vars.color.gray.light.100",
          },
          dark: {
            color: "$vars.color.gray.dark.100",
          },
        },
        b: {
          widthPx: 1,
          style: "solid",
          light: {
            color: "$vars.color.gray.light.150",
          },
          dark: {
            color: "$vars.color.gray.dark.150",
          },
        },
      },
    },
    radius: {
      none: 0,
      sm: 2,
      md: 4,
      lg: 6,
      xl: 8,
      "2xl": 12,
      "3xl": 20,
      default: "$vars.radius.lg",
    },
    shadow: {
      neutral: {
        xs: {
          light: "0 1px 2px rgba(0,0,0,0.05)",
          dark: "0 1px 2px rgba(0,0,0,0.5)",
        },
        sm: {
          light: "0 2px 4px rgba(0,0,0,0.08)",
          dark: "0 2px 4px rgba(0,0,0,0.55)",
        },
        md: {
          light: "0 4px 8px rgba(0,0,0,0.1)",
          dark: "0 4px 8px rgba(0,0,0,0.6)",
        },
        lg: {
          light: "0 8px 16px rgba(0,0,0,0.12)",
          dark: "0 8px 16px rgba(0,0,0,0.65)",
        },
        xl: {
          light: "0 12px 24px rgba(0,0,0,0.16)",
          dark: "0 12px 24px rgba(0,0,0,0.7)",
        },
      },
    },
    gradient: {
      neutral: {
        a: {
          dir: "to bottom",
          from: "$vars.color.brand.a.light.500",
          via: "$vars.color.brand.a.light.700",
          to: "$vars.color.brand.a.light.800",
        },
      },
    },
  },
  base: {
    surface: {
      floating: {
        minor: {
          radius: "$vars.radius.xl",
          elevation: {
            level: "md",
          },
          color: {
            bg: {
              palette: "neutral",
              step: 50,
            },
            border: {
              palette: "neutral",
              step: 200,
            },
          },
        },
        major: {
          radius: "$vars.radius.xl",
          elevation: {
            level: "xl",
          },
          color: {
            bg: {
              palette: "neutral",
              step: 50,
            },
            border: {
              palette: "neutral",
              step: 200,
            },
          },
        },
      },
      card: {
        borderShape: {
          default: {
            widthPx: 1,
            style: "solid",
          },
          strong: {
            widthPx: 2,
            style: "solid",
          },
        },
        radius: {
          default: "$vars.radius.lg",
          lg: "$vars.radius.3xl",
        },
        elevation: {
          none: {
            level: "none",
          },
          raised: {
            level: "md",
          },
          floating: {
            level: "xl",
          },
        },
        intent: {
          neutral: {
            base: {
              color: {
                bg: {
                  palette: "neutral",
                  step: 0,
                },
                border: {
                  palette: "neutral",
                  step: 150,
                },
              },
            },
            soft: {
              color: {
                bg: {
                  palette: "neutral",
                  step: 50,
                },
                border: {
                  palette: "neutral",
                  step: 150,
                },
              },
            },
            strong: {
              color: {
                bg: {
                  palette: "neutral",
                  step: 100,
                },
                border: {
                  palette: "neutral",
                  step: 200,
                },
              },
            },
          },
          accent: {
            base: {
              color: {
                bg: {
                  palette: "accent",
                  step: 50,
                },
                border: {
                  palette: "accent",
                  step: 300,
                },
              },
            },
            a: {
              color: {
                bg: {
                  palette: "brand.a",
                  step: 50,
                },
                border: {
                  palette: "brand.a",
                  step: 400,
                },
              },
            },
            b: {
              color: {
                bg: {
                  palette: "brand.b",
                  step: 100,
                },
                border: {
                  palette: "brand.b",
                  step: 300,
                },
              },
            },
            c: {
              color: {
                bg: {
                  palette: "brand.c",
                  step: 100,
                },
                border: {
                  palette: "brand.c",
                  step: 500,
                },
              },
            },
          },
        },
      },
      block: {
        intent: {
          neutral: {
            base: {
              color: {
                bg: {
                  palette: "neutral",
                  step: 0,
                },
                border: {
                  palette: "neutral",
                  step: 200,
                },
              },
            },
            soft: {
              color: {
                bg: {
                  palette: "neutral",
                  step: 50,
                },
                border: {
                  palette: "neutral",
                  step: 200,
                },
              },
            },
            strong: {
              color: {
                bg: {
                  palette: "neutral",
                  step: 100,
                },
                border: {
                  palette: "neutral",
                  step: 300,
                },
              },
            },
          },
        },
      },
      overlay: {
        modal: {
          color: {
            bg: {
              palette: "neutral",
              step: 50,
              alpha: 0.8,
            },
          },
        },
      },
    },
    ui: {
      structure: {
        default: {
          heightRatio: 2.5,
          paddingXRatio: 0.75,
        },
      },
      palette: {
        accent: "$vars.color.brand.a",
        neutral: "$vars.color.gray",
        text: "$vars.color.gray",
      },
      button: {
        radius: "$vars.radius.lg",
        borderShape: {
          widthPx: 1,
          style: "solid",
        },
        typestyle: "$base.typography.typestyle.ui",
      },
      checkbox: {
        radius: "$base.ui.control.radius",
      },
      control: {
        typestyle: "$base.typography.typestyle.copy",
        radius: "$vars.radius.default",
        borderShape: {
          widthPx: 1,
          style: "solid",
        },
        color: {
          bg: {
            palette: "neutral",
            step: 150,
          },
          border: {
            palette: "neutral",
            step: 200,
          },
          placeholder: {
            palette: "text",
            step: 300,
          },
          icon: {
            palette: "text",
            step: 400,
          },
          focusOutline: {
            palette: "accent",
            step: 500,
          },
        },
      },
      segmentedControl: {
        item: {
          color: {
            bg: {
              palette: "neutral",
              step: 50,
            },
            bgSelected: {
              palette: "neutral",
              step: 150,
            },
            textSelected: {
              palette: "neutral",
              step: 600,
            },
          },
        },
      },
      tabs: {
        item: {
          color: {
            text: {
              palette: "text",
              step: 500,
            },
            textActive: {
              palette: "text",
              step: 700,
            },
            bg: {
              palette: "neutral",
              step: 100,
            },
          },
        },
        indicator: {
          color: {
            palette: "accent",
            step: 500,
          },
          thicknessPx: 2,
        },
      },
    },
    fonts: {
      // default: {
      //   family: "-apple-system",
      //   fallback:
      //     '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      //   source: {
      //     type: "system",
      //   },
      // },
      default: {
        family: "Inter",
        fallback: systemFontStack,
        source: { type: "google" },
      },
      mono: {
        family: "ui-monospace",
        fallback:
          "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
        source: {
          type: "system",
        },
      },
    },
    typography: {
      textHighlight: {
        light: {
          bg: "$vars.color.brand.a.light.200",
        },
        dark: {
          bg: "$vars.color.brand.a.dark.200",
        },
      },
      typestyle: {
        meta: {
          font: "$base.fonts.default",
          weight: "600",
          textTransform: "uppercase",
          leading: 1,
          tracking: 0.12,
          light: {
            color: "$vars.color.gray.light.400",
          },
          dark: {
            color: "$vars.color.gray.dark.500",
          },
        },
        display: {
          font: {
            family: "Inter Tight",
            fallback: systemFontStack,
            source: { type: "google" },
            // size: 0.95,
          },
          weight: "400",
          textTransform: "normal",
          leading: 1.2,
          tracking: 0,
          light: {
            color: "$vars.color.gray.light.900",
            weight: "500",
          },
          dark: {
            color: "$vars.color.gray.dark.900",
          },
          adjustments: {
            leading: {
              sm: 1.15,
              md: 1.15,
              lg: 1.15,
              xl: 1.15,
              "2xl": 1.1,
              "3xl": 1.1,
              "4xl": 1.1,
              "5xl": 1.1,
            },
            tracking: {
              md: -0.005,
              lg: -0.005,
              xl: -0.02,
              "2xl": -0.02,
              "3xl": -0.02,
              "4xl": -0.02,
              "5xl": -0.02,
            },
          },
        },
        heading: {
          font: "$base.fonts.default",
          weight: "500",
          textTransform: "normal",
          leading: 1.2,
          tracking: -0.02,
          light: {
            color: "$vars.color.gray.light.900",
          },
          dark: {
            color: "$vars.color.gray.dark.900",
          },
        },
        copy: {
          font: "$base.fonts.default",
          weight: "400",
          textTransform: "normal",
          leading: 1.6,
          tracking: 0,
          light: {
            color: "$vars.color.gray.light.500",
          },
          dark: {
            color: "$vars.color.gray.dark.600",
          },
          adjustments: {
            strong: {
              weight: "700",
              light: {
                color: "$vars.color.gray.light.700",
              },
              dark: {
                color: "$vars.color.gray.dark.700",
              },
            },
            link: {
              weight: "700",
              textDecoration: "underline",
            },
          },
        },
        label: {
          font: "$base.fonts.default",
          weight: "500",
          textTransform: "normal",
          leading: 1.2,
          tracking: 0,
          light: {
            color: "$vars.color.gray.light.600",
          },
          dark: {
            color: "$vars.color.gray.dark.500",
          },
        },
        ui: {
          font: "$base.fonts.default",
          weight: "500",
          textTransform: "normal",
          leading: 1.2,
          tracking: 0,
          light: {
            color: "$vars.color.gray.light.800",
          },
          dark: {
            color: "$vars.color.gray.dark.700",
          },
        },
        code: {
          font: "$base.fonts.mono",
          weight: "400",
          textTransform: "normal",
          leading: "normal",
          tracking: "normal",
          light: {
            color: "$vars.color.code.light.text",
          },
          dark: {
            color: "$vars.color.code.dark.text",
          },
        },
      },
      mark: {
        bullet: {
          light: {
            color: "$vars.color.gray.light.500",
          },
          dark: {
            color: "$vars.color.gray.dark.500",
          },
        },
        link: {
          light: {
            base: {
              color: "$vars.color.brand.a.light.600",
            },
            hover: {
              color: "$vars.color.brand.a.light.500",
            },
          },
          dark: {
            base: {
              color: "$vars.color.gray.dark.600",
            },
            hover: {
              color: "$vars.color.gray.dark.500",
            },
          },
        },
      },
    },
    code: {
      light: {
        color: {
          bg: "$vars.color.gray.light.100",
          text: "$vars.color.gray.light.800",
          keyword: "$vars.color.brand.a.light.800",
          attrValue: "$base.color.code.light.keyword",
          string: "$vars.color.brand.a.light.900",
          attrName: "$vars.color.brand.c.light.900",
          property: "$vars.color.brand.a.light.800",
          number: "$base.color.code.light.property",
          function: "$vars.color.brand.b.light.800",
          comment: "$vars.color.gray.light.500",
        },
      },
      dark: {
        color: {
          bg: "$vars.color.gray.dark.100",
          text: "$vars.color.gray.dark.800",
          keyword: "$vars.color.brand.a.dark.800",
          attrValue: "$base.color.code.dark.keyword",
          string: "$vars.color.brand.a.dark.900",
          attrName: "$vars.color.brand.c.dark.900",
          property: "$vars.color.brand.a.dark.800",
          number: "$base.color.code.dark.property",
          function: "$vars.color.brand.b.dark.800",
          comment: "$vars.color.gray.dark.500",
        },
      },
    },
  },
  skin: {
    neutral: {
      a: {
        colorMode: "$defaultColorMode",
        surfaceDefaults: {
          block: {
            variant: "neutral.base",
          },
        },
      },
      b: {
        colorMode: "$defaultColorMode",
        surfaceDefaults: {
          block: {
            variant: "neutral.soft",
          },
        },
        baseOverrides: {
          ui: {
            control: {
              color: {
                bg: {
                  step: 0,
                },
              },
            },
          },
        },
      },
    },
    accent: {
      a: {
        colorMode: "dark",
        surfaceDefaults: {
          block: {
            variant: "neutral.base",
          },
        },
        baseOverrides: {
          ui: {
            palette: {
              accent: "$vars.color.brand.b",
            },
          },
        },
      },
    },
    intent: {
      danger: {
        colorMode: "$defaultColorMode",
        surfaceDefaults: {
          block: {
            variant: "neutral.base",
          },
        },
        baseOverrides: {
          typography: {
            typestyle: {
              display: {
                light: {
                  color: "$vars.color.intent.danger.light.800",
                },
                dark: {
                  color: "$vars.color.intent.danger.dark.900",
                },
              },
            },
          },
          ui: {
            palette: {
              accent: "$vars.color.intent.danger",
            },
            button: {
              radius: "9999px",
            },
          },
        },
      },
    },
  },
  structure: {
    layout: {
      container: {
        variant: {
          prose: "70ch",
          md: "1040px",
          lg: "1400px",
          default: "$structure.layout.container.variant.md",
        },
      },
    },
    content: {
      textModule: {
        defaultSize: "block.lg",
        variant: {
          block: {
            hero: {
              overline: {
                fontSize: "f:2xs",
                spaceAfter: "pb:3.75x",
              },
              heading: {
                fontSize:
                  "f:display-md f:32@<sm f:display-lg@sm f:display-xl@lg f:display-2xl@xl f:46@xl",
                spaceAfter: "pb:4.5x",
              },
              copy: {
                fontSize: "f:1.5sm f:sm@xl",
                spaceAfter: "pb:6.5x pb:7x@2xl",
              },
              controls: {
                fontSize: "f:sm f:md@xl",
                spaceAfter: "",
              },
            },
            feature: {
              overline: {
                fontSize: "f:2xs",
                spaceAfter: "pb:3.75x",
              },
              heading: {
                fontSize: "f:display-sm f:display-md@sm f:display-lg@lg",
                spaceAfter: "pb:4.5x",
              },
              copy: {
                fontSize: "f:1.5sm f:sm@xl",
                spaceAfter: "pb:6.5x pb:7x@2xl",
              },
              controls: {
                fontSize: "f:sm f:md@xl",
                spaceAfter: "",
              },
            },
            base: {
              overline: {
                fontSize: "f:2xs",
                spaceAfter: "pb:3.5x",
              },
              heading: {
                fontSize: "f:display-sm f:display-md@lg",
                spaceAfter: "pb:4x",
              },
              copy: {
                fontSize: "f:sm f:md@lg",
                spaceAfter: "pb:5.5x",
              },
              controls: {
                fontSize: "f:xs f:sm@md",
                spaceAfter: "",
              },
            },
            minor: {
              overline: {
                fontSize: "f:1.5xs",
                spaceAfter: "pb:3.5x",
              },
              heading: {
                fontSize: "f:display-4xs f:display-2xs@sm",
                spaceAfter: "pb:3.5x",
              },
              copy: {
                fontSize: "f:xs f:sm@lg",
                spaceAfter: "pb:4.5x",
              },
              controls: {
                fontSize: "f:2xs f:xs@lg",
                spaceAfter: "",
              },
            },
          },
          card: {
            feature: {
              overline: {
                fontSize: "f:2xs",
                spaceAfter: "pb:1.5x pb:2x@xl",
              },
              heading: {
                fontSize: "f:lg f:xl@sm f:2xl@2xl",
                spaceAfter: "pb:1x pb:2x@xl",
              },
              copy: {
                fontSize: "f:1.5sm",
                spaceAfter: "pb:4.5x",
              },
              controls: {
                fontSize: "f:2xs",
                spaceAfter: "",
              },
            },
            base: {
              overline: {
                fontSize: "f:2xs",
                spaceAfter: "pb:2x",
              },
              heading: {
                fontSize: "f:md f:lg@lg",
                spaceAfter: "pb:2x pb:3x@xl",
              },
              copy: {
                fontSize: "f:xs f:1.5sm@xl",
                spaceAfter: "pb:3.5x",
              },
              controls: {
                fontSize: "f:2xs",
                spaceAfter: "",
              },
            },
          },
        },
      },
    },
  },
} satisfies TThemeOsTokenSet;
