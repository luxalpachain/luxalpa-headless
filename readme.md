1概述
本文档主要用于luxalpa之headless的安装部署及操作说明，适用于系统测试和运维人员。
2headless部署
本节将详细说明headless（即内部账户节点）安装部署过程。
2.1 安装软件
luxalpa-headless。
2.2 安装环境 
Ubuntu 16.04 64位。
2.3 方法步骤 
Step1： 安装curl
在服务器上执行如下命令
	sudo apt install curl
然后一路默认完成安装。
Step2： 安装nvm
在服务器上分别执行两个命令：
	curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.1/install.sh | bash
	source ~/.bashrc
Step3： 安装nodejs
在服务器上执行如下命令安装nodejs 5.12（注意以后使用前最好使用命令node –v查看当前使用的nodejs版本是否是5.12，如果不是则使用命令nvm use 5切换到5.12版本）：
	nvm install 5.12
Step4： 安装screen
在服务器上执行如下命令安装screen。
	sudo apt-get install screen
Step5： 安装witness
将witness安装包放入服务器/home目录下，然后在服务器上执行以下命令解压即可： 
	unzip luxalpa-headless.zip
Step6：启动luxalpa-headless
在服务器上执行如下命令进入luxalpa-headless根目录：
	cd luxalpa-headless
然后执行如下命令启动luxalpa-headless：（启动前需要确定node版本是否为5.12）
	node play/rpc_service.js
Step7：luxalpa-headless启动成功，部署完成。