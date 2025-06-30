export function isNavActive(currentPath, targetRoute) {
  if (targetRoute === "/") {
    return ["/", "/today", "/week", "/later"].includes(currentPath);
  }
  return currentPath.startsWith(targetRoute);
}
