export const index = (req, res) => {
  res.render("index", {
    path: "/",
    pageTitle: "Index Page",
  });
};
