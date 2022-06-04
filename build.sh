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
                    sourceFilename=${sourceFile##*/}
                    sourceFiletype=${sourceFilename##*.}
                    for targetFile in static/$dirPath/*
                        do
                        targetFilename=${targetFile##*/}
                        targetFiletype=${targetFilename##*.}
                        if [[ ${targetFilename} != ${sourceFilename} && ${sourceFiletype} == ${targetFiletype} ]]
                        then
                            git mv ${targetFile} static/$dirPath/${sourceFilename}
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

