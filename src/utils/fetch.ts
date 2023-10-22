async function fetchJSON(input: string) {
  const res = await fetch(input);
  return await res.json();
}

export default fetchJSON;