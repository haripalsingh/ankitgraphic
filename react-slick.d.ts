declare module "react-slick" {
  import { Component } from "react";
  export interface Settings {
    dots?: boolean;
    infinite?: boolean;
    speed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    autoplay?: boolean;
    autoplaySpeed?: number;
    fade?: boolean;
    arrows?: boolean;
    appendDots?: (dots: React.ReactNode) => React.ReactElement;
    customPaging?: (index: number) => React.ReactElement;
    responsive?: { breakpoint: number; settings: Partial<Settings> }[];
  }
  export default class Slider extends Component<{ children?: React.ReactNode } & Settings> {}
}
