type TMods = Record<string, boolean | string>;

const classNames = (
  cls: string = "",
  mods: TMods = {},
  additional: (string | undefined)[] = [],
): string => [
  cls,
  ...additional.filter(Boolean),
  ...Object.entries(mods)
    .filter(([, value]) => Boolean(value))
    .map(([className]) => className),
].join(" ");

export { classNames };
