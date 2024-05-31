# script to run before pushing commits to the remote repository
# script exits if any command fails
set -e
echo checking $@

# validate OpenTofu code
tofu validate $@

# Generate commit message
MESSAGE=$(ollama run llama3 "no preamble. no explanation. git commit message explaining the following git diff: $(git diff HEAD)")

git commit -m "${MESSAGE}"