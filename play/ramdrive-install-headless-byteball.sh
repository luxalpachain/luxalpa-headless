#!/usr/bin/env bash

# only tested on ubuntu 16.4LTS with 32GB RAM
# don't forget to chmod a+x this file

sudo mkdir -p /media/ramdrive
mkdir -p ~/luxalpa
sudo mount -t tmpfs -o size=31G tmpfs /media/ramdrive/
cd /media/ramdrive
mkdir /media/ramdrive/luxalpa_app_storage

rm -rf ./headless-luxalpa
git clone https://github.com/luxalpa/headless-luxalpa.git
cd headless-luxalpa
yarn

rm -rf ~/.config/headless-luxalpa
ln -s /media/ramdrive/luxalpa_app_storage ~/.config/headless-luxalpa

echo "exports.LOG_FILENAME = '/dev/null';" >> conf.js

node start.js

function finish {
  rsync -rue --info=progress2 /media/ramdrive ~/luxalpa
}

trap finish EXIT
