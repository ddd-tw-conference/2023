type ComponentType<P = {}> = import("react").ComponentType<P>;

type Img = {
  __brand: "Img";
};

declare module "*.png" {
  const value: Img;
  export default value;
}

declare module "*.jpg" {
  const value: Img;
  export default value;
}

declare module "@theme/IdealImage" {
  type Props = {
    img: Img;
  };
  declare const Image: ComponentType<Props>;
  export default Image;
}
