import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/hjelp" ,"routes/help.tsx"),
  route("/more-info", "routes/more-info.tsx"),
  route("/admin", "routes/admin/admin.tsx"),
  route("/series", "routes/admin/overview.tsx"),
] satisfies RouteConfig;
