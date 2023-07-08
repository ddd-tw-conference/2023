declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.jpg" {
  const value: string;
  export default value;
}

declare module "@theme/IdealImage" {
  const Image: ({ img: string }) => JSX.Element;
  export default Image;
}
