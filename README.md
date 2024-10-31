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

Ensure that Node.js version 20 or higher is installed. This is required for running pre-commit checks.

#### 1. Prepare the icon

- The icon should be in **jpg, jpeg, png, webp, or svg** format.
- The recommended size is **256x256 pixels** to ensure clarity.
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

<img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0xf91eb98d5ff86718234ac0e400175a05df6cfcf1.webp" width="64" height="64" />
<img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0xc6cd50e6085a5f037b638813483dd244e3e4bcaa.webp" width="64" height="64" />
<img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x8fd195b2ff1506c1c26091422768cc2a40285ce7.webp" width="64" height="64" />
<img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x77e1886bf34d7dc0dcf8d5407ed6a239b66ae2ee.webp" width="64" height="64" />
<img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x66917b3b128760295bf48a5382951bc63bb1768e.webp" width="64" height="64" />
<img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x62c8359b2734e5dd6adb528ad2c78159a3f2607e.webp" width="64" height="64" />
<img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x3c2fcf53f742345c5c1b3dcb2612a1949bc1f18d.webp" width="64" height="64" />
<img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x389b72effa551ddec93cbb9259b27780f9f7a043.webp" width="64" height="64" />
<img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x0c935328a69155dd43aa57f23288d868bae440fe.webp" width="64" height="64" />

<!--PREVIEW_END -->
