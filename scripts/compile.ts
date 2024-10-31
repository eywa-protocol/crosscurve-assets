import { glob } from "glob";
import path from "path";
import sharp from "sharp";
import fs from "fs-extra";
import { isAddress } from "ethers";

const processTokens = async () => {
  console.group(`🔄 Compressing images...`);

  const images = glob.sync("images/tokens/**/*.{jpg,jpeg,png,webp,svg}");

  for (const imagePath of images) {
    const { name } = path.parse(imagePath);

    if (!isAddress(name.toLowerCase())) {
      throw new Error(`Invalid token address: ${name}`);
    }
  }

  for (const imagePath of images) {
    const { name, dir } = path.parse(imagePath);

    const tokenAddress = name.toLowerCase();

    console.log(`Processing token: ${tokenAddress}`);

    const newImagePath = path.join(dir, `${tokenAddress}.webp`);

    try {
      const fileBuffer = await fs.readFile(imagePath);

      await fs.remove(imagePath);

      await sharp(fileBuffer)
        .webp({
          lossless: true,
        })
        .toFile(newImagePath);
    } catch (err: any) {
      console.error(`Error compressing ${imagePath}`, err);
    }
  }

  console.groupEnd();
  console.log(`✅ Images compressed`);
};

const updateReadme = async () => {
  console.group(`🔄 Updating README...`);

  const readme = await fs.readFile("README.md", "utf-8");

  const images = glob.sync("images/tokens/**/*.webp");

  const imagesMap: Record<string, string[]> = {};

  images.forEach((imagePath) => {
    const [, , blockchain] = imagePath.split(path.sep);

    imagesMap[blockchain] ??= [];
    imagesMap[blockchain].push(
      `https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/${imagePath}`
    );
  });

  let preview = "";

  Object.entries(imagesMap).forEach(([blockchain, images]) => {
    preview += `### ${blockchain}\n\n`;
    preview += `<div>\n`;
    preview += images
      .map((url) => `<img src="${url}" width="64" height="64" />`)
      .join("\n");
    preview += `\n</div>\n\n`;
  });

  const newReadme = readme.replace(
    /<!--PREVIEW_BEGIN-->[\s\S]*?<!--PREVIEW_END -->/,
    `<!--PREVIEW_BEGIN-->\n\n${preview}<!--PREVIEW_END -->`
  );

  await fs.writeFile("README.md", newReadme);

  console.groupEnd();
  console.log(`✅ README updated`);
};

const run = async () => {
  await processTokens();
  console.log("");
  await updateReadme();
};

run();
