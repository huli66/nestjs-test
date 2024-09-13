# nestjs-test

nest.js study notes

## Nest CLI

```bash
# npx 创建
npx nestjs@cli new project-name

# 安装到本地
npm install -g @nestjs/cli

# 创建项目
nest new project-name

# 创建模块
nest generate module module-name
```

# 设置本项目 git 用户
git config user.name "your-name"
# 查看版本
nest --version

# 创建项目
nest new project-name

# 创建模块，--no-spec 是不生成测试文件 --flat 平铺不生成目录
nest generate module module-name --no-spec --flat

# 创建一个模块的所有代码
nest generate resource module-name
```

## 设置本项目 git 用户

```bash
# 设置本项目 git 用户
git config user.name "your-name"
git config user.email "your-email"
```

## 设置 npm 镜像

```.npmrc
# 使用淘宝镜像
registry=https://registry.npmmirror.com
```
