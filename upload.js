#!/usr/bin/env node

/**
 * 微信小程序自动上传脚本
 * 使用微信开发者工具的 HTTP 接口进行上传
 */

const http = require('http');
const path = require('path');
const fs = require('fs');

// 配置
const config = {
  appid: 'wxb15d075a9ecc2094',
  projectPath: path.join(__dirname),
  version: '1.0.0',
  desc: '羊羊消消乐 - 初始版本',
  // 微信开发者工具 HTTP 服务端口 (默认 14563)
  port: 14563
};

// 上传函数
function upload() {
  console.log('开始上传微信小程序...');
  console.log('AppID:', config.appid);
  console.log('项目路径:', config.projectPath);
  console.log('版本:', config.version);
  console.log('描述:', config.desc);

  // 使用 miniprogram-ci 上传
  const { exec } = require('child_process');
  
  // 检查是否有 private.key 文件
  const keyPath = path.join(config.projectPath, 'private.key');
  
  let cmd = `cd "${config.projectPath}" && npx miniprogram-ci upload ` +
    `-i ${config.appid} ` +
    `-u ${config.version} ` +
    `-d "${config.projectPath}" ` +
    `--desc "${config.desc}" ` +
    `--robot 1`;

  if (fs.existsSync(keyPath)) {
    cmd += ` -p ${keyPath}`;
    console.log('使用项目密钥:', keyPath);
  } else {
    console.log('警告：未找到 private.key 文件，将尝试使用测试号免密钥模式');
  }

  console.log('执行命令:', cmd);
  
  exec(cmd, (error, stdout, stderr) => {
    if (error) {
      console.error('上传失败:', error.message);
      console.error('stderr:', stderr);
      process.exit(1);
    }
    
    console.log('上传成功!');
    console.log('stdout:', stdout);
  });
}

upload();
