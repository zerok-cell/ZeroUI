#!/usr/bin/env bash

mk(){
  mkdir  "$1"
  echo "├─Create folder $1"
}

path="$(pwd)"
echo "$path"
folder_ts=(types components utils redux hooks routes)
read -p "┌Enter language (ts,js,python): " -r LANG

case $LANG in
  ts)
    if [ ! -d "./src" ]; then
      mk src
      for folder in "${folder_ts[@]}"; do
        mk "$path/src/$folder"
      done
      echo "├────────────────────────────────────┐"
      echo "├─Successfully created folders in src┤"
      echo "└────────────────────────────────────┘"
      else
        echo "└─Folder src already exists"
    fi
  ;;
esac
