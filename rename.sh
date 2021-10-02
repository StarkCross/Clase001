n $(find . -name "*$1");
do
  mv "$file" "${file%$1}$2"
done

