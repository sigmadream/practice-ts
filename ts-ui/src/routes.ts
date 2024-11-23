import Accordions from "./components/accordion";
import TabMenus from "@/components/tabMenu";
import ToolTips from "@/components/toolTip";
import TextBoxes from "./components/textBox";
import LineClamps from "./components/lineClamp";

export const routePaths = ["/", "/accordion", "/tabMenu", "/toolTip", "/textBox", "/lineClamp"] as const;

export type ROUTE_PATH = (typeof routePaths)[number];

type BaseRoute = {
  key: ROUTE_PATH;
  link: ROUTE_PATH;
  name: string;
};
export type ParentRoute = BaseRoute & {
  children: ROUTE_PATH[];
};
export type ChildRoute = BaseRoute & {
  children: ((props: unknown) => JSX.Element) | null;
};
export type ROUTE = ParentRoute | ChildRoute;

export const routes: Record<ROUTE_PATH, ROUTE> = {
  "/": {
    key: "/",
    link: "/",
    name: "root",
    children: ["/accordion", "/tabMenu", "/toolTip", "/textBox", "/lineClamp"],
  },
  "/accordion": {
    key: "/accordion",
    link: "/accordion",
    name: "01. 아코디언",
    children: Accordions,
  },
  "/tabMenu": {
    key: "/tabMenu",
    link: "/tabMenu",
    name: "02. 탭매뉴",
    children: TabMenus,
  },
  "/toolTip": {
    key: "/toolTip",
    link: "/toolTip",
    name: "03. 툴팁",
    children: ToolTips,
  },
  "/textBox": {
    key: "/textBox",
    link: "/textBox",
    name: "04. 텍스트박스",
    children: TextBoxes,
  },
  "/lineClamp": {
    key: "/lineClamp",
    link: "/lineClamp",
    name: "05. 말줄임",
    children: LineClamps,
  },
};

export const isParentRoute = (route: ROUTE): route is ParentRoute =>
  Array.isArray(route.children);

export const gnbRootList = (routes["/"] as ParentRoute).children.map(
  (r) => routes[r]
);
