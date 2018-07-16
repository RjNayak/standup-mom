echo "starting compression"
java -jar yuicompressor-2.4.8.jar src\*.js -o ".js$:_min.js"
java -jar yuicompressor-2.4.8.jar src\*.css -o ".css$:_min.css"
copy public\* release\
copy srcactions\*_min.js release\src\actions
copy src\components\*_min.js rlease\src\components\
copy src\dispatchers\*_min.js release\src\actions\
copy src\stores\*_min.js release\src\stores
copy src\*_min.js release\
C:\Program Files\7zG.exe a -ttar -so archive.tar Release | C:\Program Files\7zG.exe a -si archive.tgz
echo "Build Succeed"