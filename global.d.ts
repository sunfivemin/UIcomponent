declare module "*.md";

/// <reference types="react" />
/// <reference types="react-dom" />

declare global {
  namespace JSX {
    interface Element extends React.ReactElement<any, any> {}
    interface IntrinsicElements extends React.JSX.IntrinsicElements {}
  }
}
