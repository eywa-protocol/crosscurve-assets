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

#### 4. Create a pull request

Commit and push your changes to your forked repository and create a pull request to the main repository for review.

## Preview

<!--PREVIEW_BEGIN-->

### taiko

<div>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/taiko/0xa51894664a773981c6c112c43ce576f315d5b1b6.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/taiko/0xa51894664a773981c6c112c43ce576f315d5b1b6.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/taiko/0x0000000000000000000000000000000000000000.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/taiko/0x0000000000000000000000000000000000000000.webp" width="64" height="64" /></a>
</div>

### polygon

<div>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/polygon/0xe7a24ef0c5e95ffb0f6684b813a78f2a3ad7d171.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/polygon/0xe7a24ef0c5e95ffb0f6684b813a78f2a3ad7d171.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/polygon/0xc2132d05d31c914a87c6611c10748aeb04b58e8f.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/polygon/0xc2132d05d31c914a87c6611c10748aeb04b58e8f.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/polygon/0x8f3cf7ad23cd3cadbd9735aff958023239c6a063.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/polygon/0x8f3cf7ad23cd3cadbd9735aff958023239c6a063.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/polygon/0x60d55f02a771d515e077c9c2403a1ef324885cec.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/polygon/0x60d55f02a771d515e077c9c2403a1ef324885cec.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/polygon/0x27f8d03b3a2196956ed754badc28d73be8830a6e.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/polygon/0x27f8d03b3a2196956ed754badc28d73be8830a6e.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/polygon/0x2791bca1f2de4661ed88a30c99a7a9449aa84174.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/polygon/0x2791bca1f2de4661ed88a30c99a7a9449aa84174.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/polygon/0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/polygon/0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/polygon/0x1a13f4ca1d028320a707d99520abfefca3998b7f.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/polygon/0x1a13f4ca1d028320a707d99520abfefca3998b7f.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/polygon/0x0000000000000000000000000000000000000000.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/polygon/0x0000000000000000000000000000000000000000.webp" width="64" height="64" /></a>
</div>

### optimism

<div>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/optimism/0xda10009cbd5d07dd0cecc66161fc93d7c9000da1.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/optimism/0xda10009cbd5d07dd0cecc66161fc93d7c9000da1.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/optimism/0x94b008aa00579c1307b0ef2c499ad98a8ce58e58.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/optimism/0x94b008aa00579c1307b0ef2c499ad98a8ce58e58.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/optimism/0x7f5c764cbc14f9669b88837ca1490cca17c31607.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/optimism/0x7f5c764cbc14f9669b88837ca1490cca17c31607.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/optimism/0x6c84a8f1c29108f47a79964b5fe888d4f4d0de40.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/optimism/0x6c84a8f1c29108f47a79964b5fe888d4f4d0de40.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/optimism/0x68f180fcce6836688e9084f035309e29bf0a2095.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/optimism/0x68f180fcce6836688e9084f035309e29bf0a2095.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/optimism/0x4200000000000000000000000000000000000006.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/optimism/0x4200000000000000000000000000000000000006.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/optimism/0x1dc5c0f8668a9f54ed922171d578011850ca0341.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/optimism/0x1dc5c0f8668a9f54ed922171d578011850ca0341.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/optimism/0x1337bedc9d22ecbe766df105c9623922a27963ec.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/optimism/0x1337bedc9d22ecbe766df105c9623922a27963ec.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/optimism/0x0000000000000000000000000000000000000000.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/optimism/0x0000000000000000000000000000000000000000.webp" width="64" height="64" /></a>
</div>

### mantle

<div>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/mantle/0xdeaddeaddeaddeaddeaddeaddeaddeaddead1111.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/mantle/0xdeaddeaddeaddeaddeaddeaddeaddeaddead1111.webp" width="64" height="64" /></a>
</div>

### linea

<div>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/linea/0xe5d7c2a44ffddf6b295a15c148167daaaf5cf34f.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/linea/0xe5d7c2a44ffddf6b295a15c148167daaaf5cf34f.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/linea/0x3aab2285ddcddad8edf438c1bab47e1a9d05a9b4.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/linea/0x3aab2285ddcddad8edf438c1bab47e1a9d05a9b4.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/linea/0x0000000000000000000000000000000000000000.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/linea/0x0000000000000000000000000000000000000000.webp" width="64" height="64" /></a>
</div>

### gnosis

<div>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/gnosis/0xe91d153e0b41518a2ce8dd3d7944fa863463a97d.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/gnosis/0xe91d153e0b41518a2ce8dd3d7944fa863463a97d.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/gnosis/0xddafbb505ad214d7b80b1f830fccc89b60fb7a83.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/gnosis/0xddafbb505ad214d7b80b1f830fccc89b60fb7a83.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/gnosis/0x4ecaba5870353805a9f068101a40e0f32ed605c6.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/gnosis/0x4ecaba5870353805a9f068101a40e0f32ed605c6.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/gnosis/0x1337bedc9d22ecbe766df105c9623922a27963ec.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/gnosis/0x1337bedc9d22ecbe766df105c9623922a27963ec.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/gnosis/0x0000000000000000000000000000000000000000.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/gnosis/0x0000000000000000000000000000000000000000.webp" width="64" height="64" /></a>
</div>

### fantom

<div>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0xfea2c4377f556e35b1dde85e80a2816f601c8d6c.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0xfea2c4377f556e35b1dde85e80a2816f601c8d6c.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0xfc2c4d0703d3522b74e0e06f364ba2515df6a74e.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0xfc2c4d0703d3522b74e0e06f364ba2515df6a74e.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0xf91eb98d5ff86718234ac0e400175a05df6cfcf1.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0xf91eb98d5ff86718234ac0e400175a05df6cfcf1.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0xf1738b8c7b805d86671d258d5ffe85204db4de4d.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0xf1738b8c7b805d86671d258d5ffe85204db4de4d.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0xee4c758c85a2b4dd7375c1f1d4b59518770846c6.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0xee4c758c85a2b4dd7375c1f1d4b59518770846c6.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0xe71286fc887189c562410af12ed521c8e58e5fa3.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0xe71286fc887189c562410af12ed521c8e58e5fa3.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0xcd9f2b048fa2284fa7d79bcacdf8c758d96e9ba3.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0xcd9f2b048fa2284fa7d79bcacdf8c758d96e9ba3.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0xcaf01ac3fa0ac969da7a399388f02791f0471955.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0xcaf01ac3fa0ac969da7a399388f02791f0471955.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0xc9be2d86262805ce9e848b76be6123132dc1a43a.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0xc9be2d86262805ce9e848b76be6123132dc1a43a.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0xc7fbc3b9bc1f095189c6143d29e83ee89325377e.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0xc7fbc3b9bc1f095189c6143d29e83ee89325377e.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0xc6cd50e6085a5f037b638813483dd244e3e4bcaa.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0xc6cd50e6085a5f037b638813483dd244e3e4bcaa.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0xab72e7f7bcfe09a9105f24ffe45038f50f45ca5c.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0xab72e7f7bcfe09a9105f24ffe45038f50f45ca5c.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0xa6c60e1c7431561971398b79fe6b0bf02e9f0e6c.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0xa6c60e1c7431561971398b79fe6b0bf02e9f0e6c.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x9be1ae6175b106f26439cebaf2217d7815f684af.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x9be1ae6175b106f26439cebaf2217d7815f684af.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x9bde91f652b78f6ab22084bde4ecc0767f360df0.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x9bde91f652b78f6ab22084bde4ecc0767f360df0.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x904603366bc8acf881a35cd4c7e0d514f0477ffc.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x904603366bc8acf881a35cd4c7e0d514f0477ffc.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x8fd195b2ff1506c1c26091422768cc2a40285ce7.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x8fd195b2ff1506c1c26091422768cc2a40285ce7.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x8b697f95d8c9fbbcc597a89223b10b80369490a1.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x8b697f95d8c9fbbcc597a89223b10b80369490a1.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x7d04f016749c215e52138b06bb35ee8491e739fd.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x7d04f016749c215e52138b06bb35ee8491e739fd.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x795b38c85d6f1524b434f14aa37c1c808c2bbd6b.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x795b38c85d6f1524b434f14aa37c1c808c2bbd6b.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x77e1886bf34d7dc0dcf8d5407ed6a239b66ae2ee.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x77e1886bf34d7dc0dcf8d5407ed6a239b66ae2ee.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x740568006c07888216649632aace6620288c7078.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x740568006c07888216649632aace6620288c7078.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x66917b3b128760295bf48a5382951bc63bb1768e.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x66917b3b128760295bf48a5382951bc63bb1768e.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x636cc0ab717be347ff3acf9763afbaf7d2cf47a9.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x636cc0ab717be347ff3acf9763afbaf7d2cf47a9.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x62c8359b2734e5dd6adb528ad2c78159a3f2607e.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x62c8359b2734e5dd6adb528ad2c78159a3f2607e.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x5ecac5fb1d9634f9e1c2dab2381b9adaada5f80b.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x5ecac5fb1d9634f9e1c2dab2381b9adaada5f80b.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x513a766f7b4269590850d566b64916d691a96927.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x513a766f7b4269590850d566b64916d691a96927.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x4ac215b8b0acf9da8ef50636145bc80afca30d79.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x4ac215b8b0acf9da8ef50636145bc80afca30d79.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x4636a4efba1c02917d0584505e47bb2d22afe359.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x4636a4efba1c02917d0584505e47bb2d22afe359.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x41a4dd96f623818ebf95fb2bd98978229614af64.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x41a4dd96f623818ebf95fb2bd98978229614af64.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x3ee81e8a9368c891cf54b19265ef2df348142ab9.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x3ee81e8a9368c891cf54b19265ef2df348142ab9.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x3d52baa6b38f2f61d7f1499aa00f1eb86e916150.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x3d52baa6b38f2f61d7f1499aa00f1eb86e916150.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x3c2fcf53f742345c5c1b3dcb2612a1949bc1f18d.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x3c2fcf53f742345c5c1b3dcb2612a1949bc1f18d.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x389b72effa551ddec93cbb9259b27780f9f7a043.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x389b72effa551ddec93cbb9259b27780f9f7a043.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x37f5dae6039c8ec4c32ad7d3e2a07acaa55c08f9.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x37f5dae6039c8ec4c32ad7d3e2a07acaa55c08f9.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x353bb1dfbc52bc3b0e7d264216b1455df00f50be.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x353bb1dfbc52bc3b0e7d264216b1455df00f50be.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x309faa41ebf82063efa822b5030fc0795c82feb2.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x309faa41ebf82063efa822b5030fc0795c82feb2.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x2dadf589f616876e21c8ba63f59af764479a422d.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x2dadf589f616876e21c8ba63f59af764479a422d.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x2902257ba817e1436b93f9f959ed50b95560b7d5.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x2902257ba817e1436b93f9f959ed50b95560b7d5.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x210b2adde074a220bcea99051f90acd049977814.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x210b2adde074a220bcea99051f90acd049977814.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x1d28d76a49d25d3c97f50ac93da433ebedbe05c8.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x1d28d76a49d25d3c97f50ac93da433ebedbe05c8.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x14f8e5851879a18e0fea77b5a17f15523262a99e.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x14f8e5851879a18e0fea77b5a17f15523262a99e.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x0cf1aa18ab7020973705aa9c46bbec6150e2782b.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x0cf1aa18ab7020973705aa9c46bbec6150e2782b.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x0c935328a69155dd43aa57f23288d868bae440fe.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x0c935328a69155dd43aa57f23288d868bae440fe.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x0000000000000000000000000000000000000000.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/fantom/0x0000000000000000000000000000000000000000.webp" width="64" height="64" /></a>
</div>

### ethereum

<div>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/ethereum/0xdac17f958d2ee523a2206206994597c13d831ec7.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/ethereum/0xdac17f958d2ee523a2206206994597c13d831ec7.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/ethereum/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/ethereum/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/ethereum/0xb7ecb2aa52aa64a717180e030241bc75cd946726.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/ethereum/0xb7ecb2aa52aa64a717180e030241bc75cd946726.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/ethereum/0xb0afa681ead9219d25c57bd17bb207a3afcc4aa1.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/ethereum/0xb0afa681ead9219d25c57bd17bb207a3afcc4aa1.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/ethereum/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/ethereum/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/ethereum/0x6c3f90f043a72fa612cbac8115ee7e52bde6e490.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/ethereum/0x6c3f90f043a72fa612cbac8115ee7e52bde6e490.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/ethereum/0x6b175474e89094c44da98b954eedeac495271d0f.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/ethereum/0x6b175474e89094c44da98b954eedeac495271d0f.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/ethereum/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/ethereum/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/ethereum/0x18084fba666a33d37592fa2633fd49a74dd93a88.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/ethereum/0x18084fba666a33d37592fa2633fd49a74dd93a88.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/ethereum/0x0000000000000000000000000000000000000000.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/ethereum/0x0000000000000000000000000000000000000000.webp" width="64" height="64" /></a>
</div>

### bnb

<div>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/bnb/0xc5f0f7b66764f6ec8c8dff7ba683102295e16409.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/bnb/0xc5f0f7b66764f6ec8c8dff7ba683102295e16409.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/bnb/0xa5e0e46462970c9ee8c2ecadcde254c483748ec4.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/bnb/0xa5e0e46462970c9ee8c2ecadcde254c483748ec4.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/bnb/0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/bnb/0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/bnb/0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/bnb/0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/bnb/0x55d398326f99059ff775485246999027b3197955.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/bnb/0x55d398326f99059ff775485246999027b3197955.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/bnb/0x0000000000000000000000000000000000000000.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/bnb/0x0000000000000000000000000000000000000000.webp" width="64" height="64" /></a>
</div>

### blast

<div>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/blast/0x4300000000000000000000000000000000000004.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/blast/0x4300000000000000000000000000000000000004.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/blast/0x0000000000000000000000000000000000000000.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/blast/0x0000000000000000000000000000000000000000.webp" width="64" height="64" /></a>
</div>

### base

<div>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/base/0xf6c5f01c7f3148891ad0e19df78743d31e390d1f.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/base/0xf6c5f01c7f3148891ad0e19df78743d31e390d1f.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/base/0xeb466342c4d449bc9f53a865d5cb90586f405215.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/base/0xeb466342c4d449bc9f53a865d5cb90586f405215.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/base/0xd9aaec86b65d86f6a7b5b1b0c42ffa531710b6ca.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/base/0xd9aaec86b65d86f6a7b5b1b0c42ffa531710b6ca.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/base/0xcbb7c0000ab88b473b1f5afd9ef808440eed33bf.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/base/0xcbb7c0000ab88b473b1f5afd9ef808440eed33bf.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/base/0x833589fcd6edb6e08f4c7c32d4f71b54bda02913.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/base/0x833589fcd6edb6e08f4c7c32d4f71b54bda02913.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/base/0x4200000000000000000000000000000000000006.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/base/0x4200000000000000000000000000000000000006.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/base/0x417ac0e078398c154edfadd9ef675d30be60af93.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/base/0x417ac0e078398c154edfadd9ef675d30be60af93.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/base/0x0000000000000000000000000000000000000000.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/base/0x0000000000000000000000000000000000000000.webp" width="64" height="64" /></a>
</div>

### avalanche

<div>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/avalanche/0xd586e7f844cea2f87f50152665bcbc2c279d8d70.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/avalanche/0xd586e7f844cea2f87f50152665bcbc2c279d8d70.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/avalanche/0xc7198437980c041c805a1edcba50c1ce5db95118.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/avalanche/0xc7198437980c041c805a1edcba50c1ce5db95118.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/avalanche/0xa7d7079b0fead91f3e65f86e8915cb59c1a4c664.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/avalanche/0xa7d7079b0fead91f3e65f86e8915cb59c1a4c664.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/avalanche/0x532e6537fea298397212f09a61e03311686f548e.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/avalanche/0x532e6537fea298397212f09a61e03311686f548e.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/avalanche/0x47afa96cdc9fab46904a55a6ad4bf6660b53c38a.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/avalanche/0x47afa96cdc9fab46904a55a6ad4bf6660b53c38a.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/avalanche/0x46a51127c3ce23fb7ab1de06226147f446e4a857.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/avalanche/0x46a51127c3ce23fb7ab1de06226147f446e4a857.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/avalanche/0x152b9d0fdc40c096757f570a51e494bd4b943e50.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/avalanche/0x152b9d0fdc40c096757f570a51e494bd4b943e50.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/avalanche/0x1337bedc9d22ecbe766df105c9623922a27963ec.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/avalanche/0x1337bedc9d22ecbe766df105c9623922a27963ec.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/avalanche/0x0000000000000000000000000000000000000000.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/avalanche/0x0000000000000000000000000000000000000000.webp" width="64" height="64" /></a>
</div>

### arbitrum

<div>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/arbitrum/0xff970a61a04b1ca14834a43f5de4533ebddb5cc8.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/arbitrum/0xff970a61a04b1ca14834a43f5de4533ebddb5cc8.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/arbitrum/0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/arbitrum/0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/arbitrum/0xd9879d9dbdc5042d8f1c2710be293909b985dc90.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/arbitrum/0xd9879d9dbdc5042d8f1c2710be293909b985dc90.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/arbitrum/0x82af49447d8a07e3bd95bd0d56f35241523fbab1.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/arbitrum/0x82af49447d8a07e3bd95bd0d56f35241523fbab1.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/arbitrum/0x7f90122bf0700f9e7e1f688fe926940e8839f353.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/arbitrum/0x7f90122bf0700f9e7e1f688fe926940e8839f353.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/arbitrum/0x6c84a8f1c29108f47a79964b5fe888d4f4d0de40.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/arbitrum/0x6c84a8f1c29108f47a79964b5fe888d4f4d0de40.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/arbitrum/0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/arbitrum/0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/arbitrum/0x186cf879186986a20aadfb7ead50e3c20cb26cec.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/arbitrum/0x186cf879186986a20aadfb7ead50e3c20cb26cec.webp" width="64" height="64" /></a>
<a href="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/arbitrum/0x0000000000000000000000000000000000000000.webp"><img src="https://cdn.jsdelivr.net/gh/eywa-protocol/crosscurve-assets/images/tokens/arbitrum/0x0000000000000000000000000000000000000000.webp" width="64" height="64" /></a>
</div>

<!--PREVIEW_END-->
