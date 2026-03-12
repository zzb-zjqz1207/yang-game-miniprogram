# 🤖 微信小程序自动化上传方案

## 当前状态

- ✅ 微信开发者工具已安装：`/Applications/wechatwebdevtools.app`
- ✅ 项目已准备就绪
- ✅ AppID 已配置：`wxb15d075a9ecc2094`
- ⚠️ 需要项目密钥文件才能使用 CI 上传

## 自动化方案

### 方案一：使用 miniprogram-ci（需要密钥）

**获取密钥步骤：**
1. 访问 https://mp.weixin.qq.com
2. 进入 开发 → 开发管理 → 开发设置
3. 找到"代码上传密钥"
4. 下载 `private.key`
5. 放到项目根目录

**上传命令：**
```bash
cd /Users/zhangzhenbang/.openclaw/workspace/agents/code-coder/workspace/yang-game-miniprogram
npx miniprogram-ci upload \
  -i wxb15d075a9ecc2094 \
  -p ./private.key \
  -u 1.0.0 \
  -d . \
  --desc "羊羊消消乐 - 初始版本"
```

### 方案二：使用微信开发者工具 GUI（当前方案）

微信开发者工具已启动，项目已准备就绪。

**项目路径：** `/Users/zhangzhenbang/.openclaw/workspace/agents/code-coder/workspace/yang-game-miniprogram`

**手动操作步骤（只需 2 步）：**
1. 在微信开发者工具中点击"导入项目"
2. 选择上述目录，点击上传

### 方案三：使用自动化脚本（开发中）

可以通过 AppleScript 或 UI 自动化来操作微信开发者工具界面。

---

## 下一步

由于微信小程序上传需要项目密钥文件（安全要求），而密钥文件需要从微信后台下载，这是微信的安全机制。

**最佳实践：**
1. 下载一次密钥文件，永久使用
2. 将密钥文件加入 Git 忽略列表（不要提交到版本控制）
3. 后续上传可以完全自动化

---

**更新时间：** 2026-03-12 23:28
