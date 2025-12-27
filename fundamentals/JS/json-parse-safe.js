// Safe JSON parsing helper

function safeParse(text, fallback = null) {
  try {
    return JSON.parse(text);
  } catch (err) {
    console.warn("Bad JSON, returning fallback");
    return fallback;
  }
}

safeParse('{"ok":true}');
safeParse("bad", {});
