export default function textToURL(title) {
  const lowercase = title.toLowerCase();
  const trim = lowercase.trim();
  const replace = trim.replace(" ", "-");

  return replace;
}
