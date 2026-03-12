# 📱 微信小程序上传指南

## ✅ 已完成

- [x] 游戏代码已改造为微信小程序格式
- [x] 项目配置文件已创建
- [x] 本地 Git 仓库已初始化

---

## 🚀 上传到微信小程序平台

### 第 1 步：下载微信开发者工具

访问：https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html

下载并安装适合你系统的版本（Mac/Windows）

---

### 第 2 步：登录微信开发者工具

1. 打开微信开发者工具
2. 使用微信扫码登录
3. 登录后进入主界面

---

### 第 3 步：导入项目

1. 点击 **"+"** 或 **"导入项目"**
2. 项目目录选择：
   ```
   /Users/zhangzhenbang/.openclaw/workspace/agents/code-coder/workspace/yang-game-miniprogram
   ```
3. AppID 填写：
   - 如果你有小程序账号，填写你的 AppID
   - 如果没有，选择 **"测试号"** 或 **"小程序测试账号"**

---

### 第 4 步：修改 AppID

打开 `project.config.json`，修改 `appid` 字段：

```json
{
  "appid": "你的小程序 AppID"
}
```

**获取 AppID：**
1. 访问 https://mp.weixin.qq.com
2. 登录你的小程序账号
3. 进入 "开发" → "开发管理" → "开发设置"
4. 复制 AppID(小程序 ID)

---

### 第 5 步：预览和调试

1. 导入后，微信开发者工具会自动编译项目
2. 在模拟器中预览游戏效果
3. 可以使用 "真机预览" 在手机上测试

---

### 第 6 步：上传代码

1. 点击右上角 **"上传"** 按钮
2. 填写版本号和备注
   - 版本号：`1.0.0`
   - 备注：`羊羊消消乐 - 初始版本`
3. 点击上传

---

### 第 7 步：提交审核

1. 访问 https://mp.weixin.qq.com
2. 登录小程序后台
3. 进入 "版本管理"
4. 找到刚上传的版本，点击 **"提交审核"**
5. 填写审核信息（游戏类目等）
6. 提交等待审核

---

## 📋 项目结构

```
yang-game-miniprogram/
├── app.js                      # 小程序入口
├── app.json                    # 小程序配置
├── project.config.json         # 项目配置
├── project.private.config.json # 私有配置
├── sitemap.json                # 站点地图
└── pages/
    └── index/
        ├── index.js            # 游戏逻辑
        ├── index.wxml          # 页面结构
        └── index.wxss          # 样式
```

---

## ⚠️ 注意事项

1. **小程序类目：** 游戏类小程序需要特殊资质
   - 个人开发者建议选择 "工具 - 娱乐" 类目
   - 企业开发者可以申请 "游戏" 类目

2. **审核要求：**
   - 确保游戏内容健康
   - 不要涉及敏感内容
   - 功能完整可玩

3. **测试账号：**
   - 如果只是学习测试，可以用测试账号
   - 测试账号不需要审核

---

## 🔗 相关链接

- [微信小程序官方文档](https://developers.weixin.qq.com/miniprogram/dev/framework/)
- [小程序开发指南](https://developers.weixin.qq.com/miniprogram/dev/guide/)
- [小游戏文档](https://developers.weixin.qq.com/minigame/dev/guide/)

---

**项目 GitHub：** https://github.com/zzb-zjqz1207/yang-game
