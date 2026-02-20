import React from "react";

type TState = { hasError: boolean };

export class ArticleErrorBoundary extends React.Component<
  {
    children: React.ReactNode;
  },
  TState
> {
  state: TState = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    console.error("Article render failed:", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <p className="py:12x t:center typestyle-copy">
          Something went wrong rendering this article.
        </p>
      );
    }

    return this.props.children;
  }
}
