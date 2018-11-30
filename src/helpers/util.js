$.expr[':'].icontains = $.expr.createPseudo(arg => function (elem) {
  return (
    $(elem)
      .text()
      .toUpperCase()
      .indexOf(arg.toUpperCase()) >= 0
  );
});
