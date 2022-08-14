# Cypress学習

## インストール

```sh
# dependencies
apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb
npm install -D cypress
```

## WSL2でcypressを開けるようにする

WSL2はLinuxのGUIアプリケーションを開けないのでXサーバによって開けるようにする必要がある。  

VcXsrvをインストール
https://sourceforge.net/projects/vcxsrv/

~/.bashrcの先頭に下記を追記
```sh
# set DISPLAY variable to the IP automatically assigned to WSL2
export DISPLAY=$(cat /etc/resolv.conf | grep nameserver | awk '{print $2; exit;}'):0.0
```

下記を実行
```sh
source ~/.bashrc
sudo /etc/init.d/dbus start &> /dev/null
```

Windowsの検索からXLaunchを起動。  
Display settings, Client startupはデフォルトのまま進む。  
Extra settingsはDisable access controlにチェックを入れて進む。  
Windowsセキュリティアラートが出るが、パブリック/プライベートネットワークどちらも許可。  

参考
[Setting up the Cypress GUI in WSL2 Ubuntu for Windows 10 | Wilco van Esch](https://wilcovanes.ch/articles/setting-up-the-cypress-gui-in-wsl2-ubuntu-for-windows-10/)


