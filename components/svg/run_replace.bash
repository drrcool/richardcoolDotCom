cp ../../public/image/interestIcons/*svg .
for f in  *svg
do
  newname=$(echo $f | sed 's/svg/tsx/g' )
  mv $f $newname.tmp
   sed 's/\-m/M/g' $newname.tmp | sed 's/\-w/W/g' | sed 's/\-l/L/g' > $newname
done
