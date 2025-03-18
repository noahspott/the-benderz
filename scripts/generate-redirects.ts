import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "scripts", "old-events.xml");

// Debug info
console.log({
  currentDirectory: process.cwd(),
  lookingFor: filePath,
  fileExists: fs.existsSync(filePath),
  publicDirExists: fs.existsSync(path.join(process.cwd(), "public")),
  publicDirContents: fs.readdirSync(path.join(process.cwd(), "public")),
});

try {
  // Read the XML file
  const redirectsFile = fs.readFileSync(filePath, "utf-8");

  // Extract URLs using regex for XML loc tags
  const urlPattern =
    /<loc>https:\/\/www\.thebenderz\.com(\/schedule\/[^<]+)<\/loc>/g;
  const matches = [...redirectsFile.matchAll(urlPattern)];

  // Get unique slugs and clean them
  const oldSlugs = [
    ...new Set(
      matches.map((match) => {
        const fullPath = match[1].replace("/schedule/", "");
        // Get the base slug before any random strings
        return fullPath.split("-")[0];
      }),
    ),
  ];

  // Generate redirect rules
  const redirectRules = oldSlugs
    .map((slug) => `/schedule/${slug}-*    /schedule    301`)
    .join("\n");

  // Add header comment
  const redirectsContent = `# Generated redirects for old event URLs
  # Generated from src/data/old-sitemap.xml
  ${redirectRules}
  `;

  // Write to _redirects file
  fs.writeFileSync(
    path.join(process.cwd(), "public", "_redirects"),
    redirectsContent,
  );

  console.log("Generated _redirects file successfully!");
} catch (error) {
  console.error("Error reading file:", {
    error: error.message,
    path: filePath,
  });
}
