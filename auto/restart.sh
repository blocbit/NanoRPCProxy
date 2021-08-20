git -C ~/NanoRPCProxy pull 
npm install --prefix ~/NanoRPCProxy
npm run --prefix ~/NanoRPCProxy  build
pm2 restart ~/NanoRPCProxy/dist/proxy.js --log ~/nanoLog/NanoRPCProxy.log
