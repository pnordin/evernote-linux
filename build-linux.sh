#!/bin/bash
# Takes one optional parameter to append to 
# build directory name (e.g., to indicate whether it is a 32 or 64 bit build).

BUILD_DIR="../build/linux$1"
NW_ROOT_DIR="/opt/node-webkit"

mkdir -p $BUILD_DIR
zip -r app.nw ./*
cp $NW_ROOT_DIR/nw.pak $BUILD_DIR/nw.pak
cat $NW_ROOT_DIR/nw ./app.nw > $BUILD_DIR/evernote
chmod +x $BUILD_DIR/evernote
rm ./app.nw
