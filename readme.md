1����
���ĵ���Ҫ����luxalpa֮headless�İ�װ���𼰲���˵����������ϵͳ���Ժ���ά��Ա��
2headless����
���ڽ���ϸ˵��headless�����ڲ��˻��ڵ㣩��װ������̡�
2.1 ��װ���
luxalpa-headless��
2.2 ��װ���� 
Ubuntu 14.04.2 LTS��
2.3 �������� 
Step1�� ��װcurl
�ڷ�������ִ����������
	sudo apt install curl
Ȼ��һ·Ĭ����ɰ�װ��
Step2�� ��װnvm
�ڷ������Ϸֱ�ִ���������
	curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.1/install.sh | bash
	source ~/.bashrc
Step3�� ��װnodejs
�ڷ�������ִ���������װnodejs 5.12��ע���Ժ�ʹ��ǰ���ʹ������node �Cv�鿴��ǰʹ�õ�nodejs�汾�Ƿ���5.12�����������ʹ������nvm use 5�л���5.12�汾����
	nvm install 5.12
Step4�� ��װscreen
�ڷ�������ִ���������װscreen��
	sudo apt-get install screen
Step5�� ��װwitness
��witness��װ�����������/homeĿ¼�£�Ȼ���ڷ�������ִ�����������ѹ���ɣ� 
	unzip luxalpa-headless.zip
Step6������luxalpa-headless
�ڷ�������ִ�������������luxalpa-headless��Ŀ¼��
	cd luxalpa-headless
Ȼ��ִ��������������luxalpa-headless��������ǰ��Ҫȷ��node�汾�Ƿ�Ϊ5.12��
	node play/rpc_service.js
Step7��luxalpa-headless�����ɹ���������ɡ�