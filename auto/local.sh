NANO_NAME=nano_node
NANO_NET=nano-test
NANO_TAG=V22.1
NANO_HOST_DIR="nanocurrency"

mkdir ${NANO_HOST_DIR}
mkdir nanoLog

docker pull nanocurrency/${NANO_NET}:${NANO_TAG}
sudo docker run --restart=unless-stopped -d -p 17075:17075 -p [::1]:17076:17076 -p [::1]:17078:17078 -v ${NANO_HOST_DIR}:/root --name ${NANO_NAME} nanocurrency/${NANO_NET}:${NANO_TAG}
sudo apt-get install curl
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm install pm2@latest -g
sudo npm install -g create-react-app
git clone https://github.com/blocbit/NanoRPCProxy.git
cp NanoRPCProxy/creds.json.default NanoRPCProxy/creds.json
cp NanoRPCProxy/settings.json.default NanoRPCProxy/settings.json
cp NanoRPCProxy/user_settings.json.default NanoRPCProxy/user_settings.json
cp NanoRPCProxy/token_settings.json.default NanoRPCProxy/token_settings.json
cd NanoRPCProxy
npm install
npm run build
pm2 start dist/proxy.js --log ~/nanoLog/NanoRPCProxy.log 
sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u nadmin --hp /home/nadmin
#pm2 monit
#pm2 monitor