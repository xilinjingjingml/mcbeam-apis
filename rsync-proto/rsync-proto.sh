#!/bin/bash 

#################################################################
# function: 
#   同步该项目中带有 proto 目录, 目录, 目录 
# filename: rsync-proto.sh
################################################################ 

set -x 

PROJECT_DIR=`pwd`
 
PROJECT_NAME=`echo ${PROJECT_DIR##*/}`
 
PUSH_PROJECT_NAME="mcbeam-apis" 

export PATH="${PATH}:/workspace/${PUSH_PROJECT_NAME}/rsync-proto"

# export GOPROXY=https://goproxy.io/
# go get -u github.com/golang/protobuf
# go get -u github.com/golang/protobuf/protoc-gen-go
# go get -u github.com/micro/micro/v3/cmd/protoc-gen-micro
# ls -l $GOPATH

cd /workspace 

# 触发时间
TIME=`date '+%Y:%m:%d-%H:%M:%S'`

echo "[INFO] 当前项目名称: ${PROJECT_NAME}" 
echo "[INFO] 远程仓库名称: ${PUSH_PROJECT_NAME}"

if [ -d "${PROJECT_NAME}" ]; then
    # 查找当前目录下名称为 proto 目录
    for proto_dir in `find ${PROJECT_NAME} -maxdepth 1 -type d -name "proto"`
    do 
        echo "[INFO] proto 协议目录: ${proto_dir}" 

        PUBLIC_PROTO_DIR="/workspace/${PUSH_PROJECT_NAME}/${proto_dir}"

        echo "${PUBLIC_PROTO_DIR}"

        # 清除历史 /workspace/上传项目仓库名称/当前项目名称
        if [ -d "/workspace/${PUSH_PROJECT_NAME}/${PROJECT_NAME}" ]; then 
            rm -rf /workspace/${PUSH_PROJECT_NAME}/${PROJECT_NAME} 
            mkdir -p "${PUBLIC_PROTO_DIR}"
            cp -ar ${proto_dir}/* "${PUBLIC_PROTO_DIR}" 
        else 
            mkdir -p "${PUBLIC_PROTO_DIR}"
            cp -ar ${proto_dir}/* "${PUBLIC_PROTO_DIR}" 
        fi
    done
else 
   mkdir -p "/workspace/${PUSH_PROJECT_NAME}/${PROJECT_NAME}" 
   cp -ar ${PROJECT_DIR}/proto "/workspace/${PUSH_PROJECT_NAME}/${PROJECT_NAME}"
fi

#cd /workspace/${PUSH_PROJECT_NAME}/${PROJECT_NAME} 
#for proto_file in `find proto -type f -name "*.proto"` 
#do
#    protoc --proto_path=. --micro_out=. --go_out=:. ${proto_file} 
#done  

cd /workspace/${PUSH_PROJECT_NAME}

echo "module gitee.com/microbeam/${PUSH_PROJECT_NAME}/${PROJECT_NAME}/proto" > ${PROJECT_NAME}/proto/go.mod

echo "[${TIME}]" >> message.txt

git config --global user.email "rsync@microbeam.cn" 
git config --global user.name "rsync"

# 将文件推送到 git 远程仓库
git add .

git commit -m "${TIME}" 

git push -u origin HEAD:refs/heads/master

