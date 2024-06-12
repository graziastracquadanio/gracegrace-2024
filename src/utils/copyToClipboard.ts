export const copyToClipboard = (value: string, callback?: (v: string) => void) => {
  navigator.clipboard.writeText(value);
  if (callback) callback(value);
};
