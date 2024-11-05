const pathToPageName = {
  all: "all",
  "for-him": "For Him",
  "for-her": "For Her",
  neutral: "Neutral",
};

export function convertPathToPageName(page: string) {
  return pathToPageName[page];
}

export function covertPageToPathName(path: string) {
  const res = Object.entries(pathToPageName).find(
    ([_, value]) => value === path
  );
  return res[0];
}
