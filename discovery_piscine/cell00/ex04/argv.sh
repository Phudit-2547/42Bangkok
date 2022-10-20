#! /bin/bash

args=("$@")

if [ $# -gt 0 -a $# -lt 2 ]; 
then	
	echo ${args[0]}
elif [ $# -gt 0 -a $# -lt 3 ];
then
	echo ${args[0]}
	echo ${args[1]}
elif [ $# -gt 0 ];
then
        echo ${args[0]}
        echo ${args[1]}
	echo ${args[2]}
else
	 echo "No arguments supplied"
fi
