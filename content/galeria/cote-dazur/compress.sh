#!/bin/bash

for image in $( ls *.webp );
do
    convert $image -quality 75 $image
done
