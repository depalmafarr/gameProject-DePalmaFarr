curl "https://tic-tac-toe-wdi.herokuapp.com/update/${id}" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json" \
  --data "{}"

echo
