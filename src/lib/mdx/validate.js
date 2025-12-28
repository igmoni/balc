export function validate(frontmatter, source) {
  const required = ["title", "date"];

  required.forEach((key) => {
    if (!frontmatter[key]) {
      throw new Error(`Missing "${key} in ${source}"`);
    }
  });

  if (frontmatter.tags && !Array.isArray(frontmatter.tags)) {
    throw new Error(`"Tags" must be an array in ${source}`);
  }
}
