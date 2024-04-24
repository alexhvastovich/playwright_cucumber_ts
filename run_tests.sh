#cucumber tag
tag=$1

#run cucumber tests & on failure run postcucumber
npm run cucumber --profile $tag || npm run postcucumber