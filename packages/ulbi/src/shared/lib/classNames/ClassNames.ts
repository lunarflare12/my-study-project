type TMods = Record<string, boolean | string>;

function classNames(cls: string, mods: TMods = {}, additional: string[] = []): string {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([className]) => className),
  ]
    .join(" ");
}

export { classNames };
