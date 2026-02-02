function bundle() {
  return Deno.bundle({
    entrypoints: ["./src/index.html"],
    outputDir: "./dist",
  });
}

if (import.meta.main) {
  await bundle();
}
