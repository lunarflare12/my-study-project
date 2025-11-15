type TMods = Record<string, boolean | string>;

const classNames = (
  cls: string,
  mods: TMods,
  additional: string[],
): string => [
  cls,
  ...additional,
  ...Object.entries(mods)
    .filter(([, value]) => Boolean(value))
    .map(([className]) => className),
].join(" ");

export { classNames };
