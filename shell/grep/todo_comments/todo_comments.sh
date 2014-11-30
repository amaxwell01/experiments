BASEDIRECTORY=$(dirname $0)
YOURFILE=$(grep -nris --exclude "todo_comments.sh" "@TODO\|todo" ${BASEDIRECTORY})

echo "==================================================="
echo "     Found all @TODO or @todo within your code"
echo "===================================================\n"
grep -nris --exclude "todo_comments.sh" "@TODO\|todo" ${BASEDIRECTORY} | grep [0-9]

# # Capture only the line number
# echo 'Filename'
# echo ${YOURFILE} | grep -f /[^:]/

# # Capture only the line number
# echo 'Line Number'
# echo ${YOURFILE} | grep [0-9]
