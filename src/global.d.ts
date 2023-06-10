type Png = string;

declare module "*.png" {
  const value: Png;
  export default value;
}

declare module "@theme/IdealImage" {
  const Image: ({ img: Png }) => JSX.Element;
  export default Image;
}
