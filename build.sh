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
                for sourceFile in $1/static/$dirPath/*
                    do
                    sourceFullFilename=${sourceFile##*/} # main.50e7c4e3.js
                    sourceFilename=${sourceFullFilename%%.*} # main
                    sourceHash="getHash $sourceFullFilename"  # 50e7c4e3
                    sourceFiletype=${sourceFullFilename##*.} # js
                    for targetFile in static/$dirPath/*
                        do
                        targetFullFilename=${targetFile##*/}
                        targetFilename=${targetFullFilename%%.*}
                        targetHash="getHash $targetFullFilename"
                        targetFiletype=${targetFullFilename##*.}
                        if [[ ${targetFilename} == ${sourceFilename} && ${sourceFiletype} == ${targetFiletype} && ${targetHash} != ${sourceHash} ]]
                        then
                            git mv ${targetFile} static/$dirPath/${sourceFullFilename}
                            break
                        fi
                    done
                done
            fi
        fi
    done
    cp -r ../my-blog/build/* ./
    rm 404.html
    cp index.html 404.html
}
# parameter: the dir of built source code 
build ../my-blog/build 

