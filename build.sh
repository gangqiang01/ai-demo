#! /bin/bash
distDir="/var/www/html/m2mlink/dist"
webappIndexHtml="/root/JavaProject/m2m-core/leshan-mqtt-server-demo/src/main/resources/m2mlink/index.html"
webappStatic="/root/JavaProject/m2m-core/leshan-mqtt-server-demo/src/main/resources/m2mlink/static"
if [ -d "dist" ]; then
	rm -r dist
	echo "delete dish success"
fi
cnpm run build
echo "build success"
if [ -d $webappIndexHtml ]; then
	rm $webappIndexHtml
	echo "rm index.html success"
fi
if [ -d $webappStatic ]; then
	rm -r $webappStatic
	echo "rm static seccess"
fi
cp $distDir"/index.html" $webappIndexHtml
cp -r $distDir"/static" $webappStatic
echo "cp success"
