export function pexelsImage(url: string, width: number) {
  const base = url.split('?')[0];
  return `${base}?auto=compress&cs=tinysrgb&w=${width}`;
}
