export default function isBrowserEnv(...obj) {
  if (window && window !== "undefined") {
    return obj.length > 1 ? obj.reduce((p, c) => window[p][c]) : window[obj];
  }
  return false;
}
