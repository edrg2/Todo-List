const tasksRoutes = ["/today", "/week", "/later"];

export function activeNav(currentPath, targetRoute) {
  if (targetRoute === "/today") {
    return tasksRoutes.includes(currentPath);
  }
  return currentPath.startsWith(targetRoute);
}
