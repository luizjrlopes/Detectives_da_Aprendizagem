import fs from "fs";
import { optimize } from "svgo";
import glob from "fast-glob";

(async () => {
  const files = await glob("assets/**/*.svg");
  for (const f of files) {
    const raw = fs.readFileSync(f, "utf8");
    const { data } = optimize(raw, { multipass: true });
    fs.writeFileSync(f, data);
    console.log("SVG otimizado:", f);
  }
})();
