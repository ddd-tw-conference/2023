import type { WrapperProps } from "@docusaurus/types";
import { MDXProvider } from "@mdx-js/react";
import {
  CssVarsProvider,
  getInitColorSchemeScript,
  useColorScheme,
} from "@mui/joy/styles";
import Layout from "@theme-original/Layout";
import type LayoutType from "@theme/Layout";
import React, { ComponentProps, ReactNode, memo, useEffect } from "react";

import { useColorMode } from "@docusaurus/theme-common";
import {
  Alert,
  AlertProps,
  CssBaseline,
  Link,
  LinkProps,
  Stack,
  StackProps,
  Typography,
  TypographyProps,
} from "@mui/joy";

import { extendTheme } from "@mui/joy/styles";

type Props = WrapperProps<typeof LayoutType> & {
  children: ReactNode;
};

const components: ComponentProps<typeof MDXProvider>["components"] = {
  h1: memo(function H1(props: TypographyProps<"h1">) {
    return <Typography {...props} level="h1" />;
  }),
  h2: memo(function H2(props: TypographyProps<"h2">) {
    return <Typography {...props} level="h2" />;
  }),
  h3: memo(function H3(props: TypographyProps<"h3">) {
    return <Typography {...props} level="h3" />;
  }),
  h4: memo(function H4(props: TypographyProps<"h4">) {
    return <Typography {...props} level="h4" />;
  }),
  h5: memo(function H5(props: TypographyProps<"h5">) {
    return <Typography {...props} level="h5" />;
  }),
  h6: memo(function H6(props: TypographyProps<"h6">) {
    return <Typography {...props} level="h6" />;
  }),
  p: memo(function H6(props: TypographyProps<"p">) {
    return <Typography {...props} level="body1" />;
  }),
  a: memo(function A(props: LinkProps) {
    return <Link {...props} />;
  }),
  ul: memo(function Ul(props: TypographyProps<"ul">) {
    return <Typography {...props} component="ul" />;
  }),
  ol: memo(function Ol(props: TypographyProps<"ol">) {
    return <Typography {...props} component="ol" />;
  }),
  li: memo(function Li(props: ComponentProps<"li">) {
    return <li {...props} />;
  }),
  blockquote: memo(function Blockquote(props: AlertProps<"blockquote">) {
    return <Alert {...props} component="blockquote" />;
  }),
  wrapper: memo(function Wrapper(props: StackProps<"section">) {
    return <Stack {...props} component="section" className="markdown" />;
  }),
};

const JoyMdxProvider = memo(function JoyMdxProvider({
  children,
}: {
  children: ReactNode;
}) {
  return <MDXProvider components={components}>{children}</MDXProvider>;
});

const SyncJoyTheme = memo(function SyncJoyTheme() {
  const colorMode = useColorMode();
  const { setMode } = useColorScheme();
  useEffect(() => {
    setMode(colorMode.isDarkTheme ? "dark" : "light");
  }, [colorMode.isDarkTheme, setMode]);
  return null;
});

const theme = extendTheme({
  fontFamily: {
    display: "var(--ifm-font-family-base)",
    body: "var(--ifm-font-family-base)",
    fallback: "var(--ifm-font-family-base)",
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          100: "#e6eef5",
          200: "#597da7",
          300: "#4e6e94",
          400: "#4b6a8e",
          500: "#446081",
          600: "#3d5674",
          700: "#3a526e",
          800: "#30435a",
          900: "#2b3a4f",
        },
        background: {
          body: "var(--ifm-background-color)",
        },
      },
    },
    dark: {
      palette: {
        primary: {
          100: "#ffffff",
          200: "#ffffff",
          300: "#dfeaf8",
          400: "#cedff5",
          500: "#acc9ee",
          600: "#8ab3e7",
          700: "#79a8e4",
          800: "#4687d9",
          900: "#2b3a4f",
        },
        background: {
          body: "var(--ifm-background-color)",
        },
      },
    },
  },
});

const BindJoyTheme = memo(function BindJoyTheme({
  children,
}: {
  children: ReactNode;
}) {
  const colorMode = useColorMode();
  return (
    <>
      {getInitColorSchemeScript()}
      <CssVarsProvider
        defaultMode={colorMode.isDarkTheme ? "dark" : "light"}
        theme={theme}
      >
        <CssBaseline />
        <SyncJoyTheme />
        {children}
      </CssVarsProvider>
    </>
  );
});

export default function LayoutWrapper({
  children,
  ...props
}: Props): JSX.Element {
  return (
    <Layout {...props}>
      <BindJoyTheme>
        <JoyMdxProvider>{children}</JoyMdxProvider>
      </BindJoyTheme>
    </Layout>
  );
}
