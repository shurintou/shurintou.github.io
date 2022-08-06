function getHash(){
    filename=$1
    tempFilename=${filename#*.}
    filehash=${tempFilename#*.}
    echo "$filehash"
}

function build(){
    for dir in $1/static/*
        do
        if [ -d $dir ]
        then
        dirPath=${dir##*/}
            # media dir need handle manually
            if [ ${dirPath} != 'media' ]
            then
                for targetFile in static/$dirPath/*
                    do
                    matchedFlag=0
                    targetFullFilename=${targetFile##*/}
                    targetFilename=${targetFullFilename%%.*}
                    targetHash="getHash $targetFullFilename"
                    targetFiletype=${targetFullFilename##*.}
                    for sourceFile in $1/static/$dirPath/*
                        do
                        sourceFullFilename=${sourceFile##*/} # main.50e7c4e3.js
                        sourceFilename=${sourceFullFilename%%.*} # main
                        sourceHash="getHash $sourceFullFilename"  # 50e7c4e3
                        sourceFiletype=${sourceFullFilename##*.} # js
                            if [[ ${targetFilename} == ${sourceFilename} && ${sourceFiletype} == ${targetFiletype} && ${targetHash} != ${sourceHash} ]]
                            then
                                matchedFlag=1
                                git mv ${targetFile} static/$dirPath/${sourceFullFilename}
                                break
                            fi
                    done
                    if [ ${matchedFlag} == 0 ] # no match file, delete it.
                    then
                        rm -f $targetFile
                    fi
                done
            fi
        fi
    done
    cp -r $1/* ./
    rm 404.html
    cp index.html 404.html
}
# parameter: the dir of built source code 
buildFolderPath=../my-blog/build 
build $buildFolderPath 
