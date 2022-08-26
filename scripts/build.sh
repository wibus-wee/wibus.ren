CWD=$(pwd)
npm run build
cd .next
pwd
cp ./sw.js ../public/sw.js
cp ./workbox-*.js ../public