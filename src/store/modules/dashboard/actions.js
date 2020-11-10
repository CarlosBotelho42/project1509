export function selectedPage(data) {
  return {
    type: '@dashboard/SELECTED_PAGE',
    payload: { data },
  }
}
