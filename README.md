## How to use token icons

We recommend using [jsDelivr](https://github.com/jsdelivr/jsdelivr) for accessing token icons, as it provides fast and reliable CDN delivery. To use an icon from this repository, use the following URL structure:

```
https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/{blockchain}/{address}.webp
```

- `{blockchain}` - represents the blockchain network to which the token belongs (e.g., ethereum, fantom). Ensure you use the correct identifier for the blockchain as specified in the repository's structure.
- `{address}` - the token contract address on the specified blockchain. The address must always be in lowercase format to match the repository's naming convention.

#### Example

```html
<img
  src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x3c2fcf53f742345c5c1b3dcb2612a1949bc1f18d.webp"
  alt="xWETH"
  width="32"
  height="32"
/>
```

## Token icon submission guide

If you want to add an icon for your token, please follow these steps to ensure everything is done correctly.

#### Prerequisites

Ensure that Node.js version 20 or higher is installed. This is required for running pre-commit script.

#### 1. Prepare the icon

- The icon should be in **jpg, jpeg, png, webp, or svg** format.
- The recommended size is **256x256 pixels**, aspect ratio should be **1:1**.
- The file name must match your token address (case-insensitive). For example: `0x8d9241935453120825c4a95446e351fbc338527d.png`.

#### 2. Fork the repository

Fork this repository to your GitHub account so you can add your icon.

#### 3. Add the icon

Navigate to the appropriate folder and add your icon according to the blockchain of your token. The directory structure should look like this:

```
images/
  └── tokens/
      └── {blockchain}/
          └── {token-address}.{ext} ← your icon
```

#### 4. Commit your changes

Once you have added the icon, commit your changes. The pre-commit script will run automatically to check the file name format and compress the image if needed.

```bash
git add .
git commit -m "Add icon for xSTABLE"
```

#### 5. Create a pull request

After the commit is successful and the checks have passed, push your changes to your forked repository and create a pull request to the main repository for review.

## Preview

<!--PREVIEW_BEGIN-->

### fantom

<div>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0xfc2c4d0703d3522b74e0e06f364ba2515df6a74e.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0xfc2c4d0703d3522b74e0e06f364ba2515df6a74e.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0xf91eb98d5ff86718234ac0e400175a05df6cfcf1.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0xf91eb98d5ff86718234ac0e400175a05df6cfcf1.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0xf1738b8c7b805d86671d258d5ffe85204db4de4d.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0xf1738b8c7b805d86671d258d5ffe85204db4de4d.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0xee4c758c85a2b4dd7375c1f1d4b59518770846c6.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0xee4c758c85a2b4dd7375c1f1d4b59518770846c6.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0xe71286fc887189c562410af12ed521c8e58e5fa3.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0xe71286fc887189c562410af12ed521c8e58e5fa3.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0xcd9f2b048fa2284fa7d79bcacdf8c758d96e9ba3.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0xcd9f2b048fa2284fa7d79bcacdf8c758d96e9ba3.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0xc9be2d86262805ce9e848b76be6123132dc1a43a.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0xc9be2d86262805ce9e848b76be6123132dc1a43a.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0xc7fbc3b9bc1f095189c6143d29e83ee89325377e.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0xc7fbc3b9bc1f095189c6143d29e83ee89325377e.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0xc6cd50e6085a5f037b638813483dd244e3e4bcaa.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0xc6cd50e6085a5f037b638813483dd244e3e4bcaa.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0xab72e7f7bcfe09a9105f24ffe45038f50f45ca5c.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0xab72e7f7bcfe09a9105f24ffe45038f50f45ca5c.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x9be1ae6175b106f26439cebaf2217d7815f684af.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x9be1ae6175b106f26439cebaf2217d7815f684af.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x904603366bc8acf881a35cd4c7e0d514f0477ffc.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x904603366bc8acf881a35cd4c7e0d514f0477ffc.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x8fd195b2ff1506c1c26091422768cc2a40285ce7.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x8fd195b2ff1506c1c26091422768cc2a40285ce7.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x8b697f95d8c9fbbcc597a89223b10b80369490a1.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x8b697f95d8c9fbbcc597a89223b10b80369490a1.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x795b38c85d6f1524b434f14aa37c1c808c2bbd6b.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x795b38c85d6f1524b434f14aa37c1c808c2bbd6b.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x77e1886bf34d7dc0dcf8d5407ed6a239b66ae2ee.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x77e1886bf34d7dc0dcf8d5407ed6a239b66ae2ee.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x740568006c07888216649632aace6620288c7078.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x740568006c07888216649632aace6620288c7078.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x66917b3b128760295bf48a5382951bc63bb1768e.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x66917b3b128760295bf48a5382951bc63bb1768e.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x62c8359b2734e5dd6adb528ad2c78159a3f2607e.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x62c8359b2734e5dd6adb528ad2c78159a3f2607e.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x4ac215b8b0acf9da8ef50636145bc80afca30d79.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x4ac215b8b0acf9da8ef50636145bc80afca30d79.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x4636a4efba1c02917d0584505e47bb2d22afe359.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x4636a4efba1c02917d0584505e47bb2d22afe359.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x41a4dd96f623818ebf95fb2bd98978229614af64.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x41a4dd96f623818ebf95fb2bd98978229614af64.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x3ee81e8a9368c891cf54b19265ef2df348142ab9.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x3ee81e8a9368c891cf54b19265ef2df348142ab9.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x3d52baa6b38f2f61d7f1499aa00f1eb86e916150.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x3d52baa6b38f2f61d7f1499aa00f1eb86e916150.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x3c2fcf53f742345c5c1b3dcb2612a1949bc1f18d.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x3c2fcf53f742345c5c1b3dcb2612a1949bc1f18d.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x389b72effa551ddec93cbb9259b27780f9f7a043.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x389b72effa551ddec93cbb9259b27780f9f7a043.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x353bb1dfbc52bc3b0e7d264216b1455df00f50be.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x353bb1dfbc52bc3b0e7d264216b1455df00f50be.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x309faa41ebf82063efa822b5030fc0795c82feb2.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x309faa41ebf82063efa822b5030fc0795c82feb2.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x2902257ba817e1436b93f9f959ed50b95560b7d5.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x2902257ba817e1436b93f9f959ed50b95560b7d5.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x1d28d76a49d25d3c97f50ac93da433ebedbe05c8.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x1d28d76a49d25d3c97f50ac93da433ebedbe05c8.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x14f8e5851879a18e0fea77b5a17f15523262a99e.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x14f8e5851879a18e0fea77b5a17f15523262a99e.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x0cf1aa18ab7020973705aa9c46bbec6150e2782b.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x0cf1aa18ab7020973705aa9c46bbec6150e2782b.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x0c935328a69155dd43aa57f23288d868bae440fe.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x0c935328a69155dd43aa57f23288d868bae440fe.webp" width="64" height="64" /></a>
</div>

<!--PREVIEW_END-->
