# 📱 微信小程序上传完整指南

## ✅ 已完成

- [x] 游戏代码已创建
- [x] AppID 已配置：`wxb15d075a9ecc2094`
- [x] 项目已提交到 GitHub

---

## 🔑 获取项目密钥（必需）

### 第 1 步：下载密钥文件

1. 访问：https://mp.weixin.qq.com/
2. 登录你的小程序账号
3. 进入 **开发** → **开发管理** → **开发设置**
4. 找到 **"代码上传密钥"** 部分
5. 点击 **"下载密钥"**
6. 保存为 `private.key` 文件

### 第 2 步：放置密钥文件

将下载的 `private.key` 文件放到以下位置：
```
/Users/zhangzhenbang/.openclaw/workspace/agents/code-coder/workspace/yang-game-miniprogram/private.key
```

---

## 🚀 上传方式一：使用微信开发者工具（推荐）

### 下载安装

1. 访问：https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html
2. 下载 **Mac** 版本
3. 安装并打开

### 导入项目

1. 点击 **"+"** 或 **"导入项目"**
2. 项目目录：
   ```
   /Users/zhangzhenbang/.openclaw/workspace/agents/code-coder/workspace/yang-game-miniprogram
   ```
3. AppID 已自动配置：`wxb15d075a9ecc2094`
4. 点击 **"导入"**

### 预览和上传

1. 点击顶部 **"预览"** 按钮
2. 微信扫码在手机上测试
3. 测试通过后，点击 **"上传"** 按钮
4. 填写版本信息：
   - 版本号：`1.0.0`
   - 项目备注：`羊羊消消乐 - 初始版本`
5. 点击上传

---

## 🚀 上传方式二：使用 CI 工具（命令行）

### 安装 CI 工具

```bash
npm install -g miniprogram-ci
```

### 上传代码

```bash
cd /Users/zhangzhenbang/.openclaw/workspace/agents/code-coder/workspace/yang-game-miniprogram

npx miniprogram-ci \
  -i wxb15d075a9ecc2094 \
  -p ./private.key \
  -u 1.0.0 \
  -d . \
  -o ./output.zip \
  --desc "羊羊消消乐 - 初始版本"
```

### 参数说明

- `-i`: AppID
- `-p`: 项目密钥文件路径
- `-u`: 版本号
- `-d`: 项目目录
- `-o`: 输出文件
- `--desc`: 版本备注

---

## 📋 提交审核

上传完成后：

1. 访问：https://mp.weixin.qq.com
2. 进入 **版本管理**
3. 找到刚上传的版本（开发版本）
4. 点击 **"提交审核"**
5. 填写审核信息：
   - 功能页面：首页
   - 测试账号：（如有需要）
   - 补充说明：消除类休闲游戏
6. 提交等待审核

---

## ⚠️ 注意事项

### 类目选择

测试号默认是 **"小游戏"** 类目，如果是普通小程序：

- 个人开发者：选择 "工具 - 娱乐"
- 企业开发者：可以申请 "游戏" 类目（需要资质）

### 审核要求

1. 游戏内容健康，无违规内容
2. 功能完整可玩
3. 无闪退和严重 bug
4. 符合微信小程序运营规范

### 测试号限制

- 测试号只能用于开发和测试
- 不能正式发布到线上
- 最多 100 个体验者

---

## 🔗 相关链接

- [微信小程序官方文档](https://developers.weixin.qq.com/miniprogram/dev/framework/)
- [小游戏文档](https://developers.weixin.qq.com/minigame/dev/guide/)
- [代码上传 CI 文档](https://developers.weixin.qq.com/miniprogram/dev/devtools/ci.html)

---

## 📦 项目文件

```
yang-game-miniprogram/
├── app.js
├── app.json
├── project.config.json    # 项目配置（AppID 已配置）
├── private.key            # 密钥文件（需自行下载）
├── README.md
└── pages/
    └── index/
        ├── index.js
        ├── index.wxml
        └── index.wxss
```

---

**GitHub:** https://github.com/zzb-zjqz1207/yang-game-miniprogram

**更新时间：** 2026-03-12
