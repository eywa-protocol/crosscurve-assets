import { glob } from "glob";
import path from "path";
import sharp from "sharp";
import fs from "fs-extra";
import { isAddress } from "ethers";

const processTokens = async () => {
  console.group(`🔄 Processing tokens...`);

  const images = glob.sync("images/tokens/**/*.{jpg,jpeg,png,webp,svg}");

  for (const imagePath of images) {
    const { name } = path.parse(imagePath);

    if (!isAddress(name.toLowerCase())) {
      throw new Error(`Invalid token address: ${name}`);
    }
  }

  let completed = 0;

  for (const imagePath of images) {
    const { name, dir } = path.parse(imagePath);

    const tokenAddress = name.toLowerCase();
    const newImagePath = path.join(dir, `${tokenAddress}.webp`);

    if (imagePath === newImagePath) {
      console.log(`🟡 skipped: ${tokenAddress}`);
      continue;
    }

    try {
      const fileBuffer = await fs.readFile(imagePath);

      await fs.remove(imagePath);

      await sharp(fileBuffer)
        .webp({
          lossless: true,
        })
        .toFile(newImagePath);
    } catch (err: any) {
      console.error(`🔴 error: ${tokenAddress}`, err);
    }

    completed += 1;

    console.log(`🟢 processed: ${tokenAddress}`);
  }

  console.groupEnd();
  console.log(`✅ ${completed}/${images.length} tokens processed`);
};

const processChains = async () => {
  console.group(`🔄 Processing chains...`);

  const images = glob.sync("images/chains/*.{jpg,jpeg,png,webp,svg}");

  let completed = 0;

  for (const imagePath of images) {
    const { name, dir } = path.parse(imagePath);

    const chain = name.toLowerCase();
    const newChainPath = path.join(dir, `${chain}.webp`);

    if (imagePath === newChainPath) {
      console.log(`🟡 skipped: ${chain}`);
      continue;
    }

    try {
      const fileBuffer = await fs.readFile(imagePath);

      await fs.remove(imagePath);

      await sharp(fileBuffer)
        .webp({
          lossless: true,
        })
        .toFile(newChainPath);
    } catch (err: any) {
      console.error(`🔴 error: ${chain}`, err);
    }

    completed += 1;

    console.log(`🟢 processed: ${chain}`);
  }

  console.groupEnd();
  console.log(`✅ ${completed}/${images.length} chains processed`);
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
    const chainImage = `https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/chains/${blockchain}.webp`;

    preview += `### ${blockchain}\n\n`;
    preview += `<div>\n`;
    preview += `<a href="${chainImage}"><img src="${chainImage}" width="80" height="80" /></a>\n`;
    preview += images
      .map(
        (url) =>
          `<a href="${url}"><img src="${url}" width="64" height="64" /></a>`
      )
      .join("\n");
    preview += `\n</div>\n\n`;
  });

  const newReadme = readme.replace(
    /<!--PREVIEW_BEGIN-->[\s\S]*?<!--PREVIEW_END-->/,
    `<!--PREVIEW_BEGIN-->\n\n${preview}<!--PREVIEW_END-->`
  );

  await fs.writeFile("README.md", newReadme);

  console.groupEnd();
  console.log(`✅ README updated`);
};

const run = async () => {
  await processTokens();
  console.log("");
  await processChains();
  console.log("");
  await updateReadme();
};

run();
