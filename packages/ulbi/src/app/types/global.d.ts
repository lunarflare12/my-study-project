type TCSSModule = Record<string, string>;

declare module "*.css" {
  const content: TCSSModule; export default content;
}
declare module "*.module.css" {
  const content: TCSSModule; export default content;
}
declare module "*.scss" {
  const content: TCSSModule; export default content;
}
declare module "*.module.scss" {
  const content: TCSSModule; export default content;
}
declare module "*.sass" {
  const content: TCSSModule; export default content;
}
declare module "*.module.sass" {
  const content: TCSSModule; export default content;
}

declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>; export default content;
}

declare module "*.png";
declare module "*.jpeg";
